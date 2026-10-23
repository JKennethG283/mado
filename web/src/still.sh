#!/bin/bash
# still.sh <id> <aspect> <background:opaque|transparent> "<scene>" [reference]
cd "$(dirname "$0")"
PRE="Photographic, medium-format film look, soft natural daylight, calm Japanese minimalism, muted deep greens and warm paper neutrals, gentle film grain, quiet and unhurried, no text, no logos, no watermarks."
ARGS=(gpt_image_2 --prompt "$PRE

$4" --aspect_ratio "$2" --background "$3" --resolution 2k --quality high --wait --wait-timeout 15m)
[ -n "$5" ] && ARGS+=(--image "$5")
OUT=$(higgsfield generate create "${ARGS[@]}" 2>&1)
URL=$(echo "$OUT" | grep -oE 'https://[^ ]+\.(png|jpg|webp)' | tail -1)
if [ -n "$URL" ]; then curl -s -o "$1.png" "$URL" && echo "$1 ok $URL"; else echo "$1 FAILED: $(echo "$OUT" | tail -3)"; fi
