"""Turn generated 'transparent' PNGs (checkerboard baked in) into real alpha cutouts."""
import numpy as np, sys
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

def hsv_parts(a):
    rgb = a[..., :3].astype(float) / 255
    mx, mn = rgb.max(-1), rgb.min(-1)
    sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    return mx, sat

def checker_bg(a):
    v, s = hsv_parts(a)
    return (s < 0.09) & (v > 0.72)

def feather(alpha, r=1.2):
    im = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))
    return np.asarray(im).astype(float) / 255

def mid(src, out):
    a = np.asarray(Image.open(src).convert('RGB'))
    bg = checker_bg(a)
    fg = ~bg
    fg = ndi.binary_opening(fg, iterations=2)
    h, w = fg.shape
    # first solid foliage pixel per column (needs a run of foliage below it)
    run = ndi.uniform_filter1d(fg.astype(float), size=9, axis=0, origin=-4) > 0.8
    first = np.where(run.any(0), run.argmax(0), h)
    first = ndi.median_filter(first, size=5)
    yy = np.arange(h)[:, None]
    solid = yy >= first[None, :]
    # keep true foliage texture at the edge: union of solid-below and fg near the edge
    edge = (yy >= first[None, :] - 14) & fg
    alpha = feather((solid | edge).astype(float), 1.0)
    # pull checker fringe: darken nothing, just drop semi-alpha pixels that are bg-coloured
    alpha[bg & (yy < first[None, :])] = 0
    rgba = np.dstack([a, (alpha * 255).astype(np.uint8)])
    Image.fromarray(rgba, 'RGBA').save(out)

def sprig(src, out):
    a = np.asarray(Image.open(src).convert('RGB'))
    bg = checker_bg(a)
    lab, n = ndi.label(bg)
    border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    outside = np.isin(lab, list(border))
    fg = ~outside
    fg = ndi.binary_fill_holes(ndi.binary_opening(fg, iterations=1))
    # drop tiny islands
    lab2, n2 = ndi.label(fg)
    sizes = ndi.sum(fg, lab2, range(1, n2 + 1))
    keep = np.isin(lab2, [i + 1 for i, s in enumerate(sizes) if s > 2000])
    alpha = ndi.binary_erosion(keep, iterations=1).astype(float)
    alpha = feather(alpha, 1.1)
    rgba = np.dstack([a, (alpha * 255).astype(np.uint8)])
    Image.fromarray(rgba, 'RGBA').save(out)

mid('hero-mid.png', 'hero-mid-alpha.png')
sprig('hero-front.png', 'hero-front-alpha.png')
print('keyed')
