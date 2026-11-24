#!/usr/bin/env bash
# Extracts the text of every PDF in resources/ into resources/.text/<name>.txt.
# Each physical page starts with a line "===== Seite N =====" (ADR 0017).
# Requires Ghostscript (`gs`). resources/ is git-ignored (ADR 0019).
set -euo pipefail

cd "$(dirname "$0")/.."
out="resources/.text"
mkdir -p "$out"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

for pdf in resources/*.pdf; do
  name="$(basename "$pdf" .pdf)"
  if [[ "$out/$name.txt" -nt "$pdf" ]]; then
    echo "$name: up to date"
    continue
  fi
  rm -f "$tmp"/p*.txt
  gs -q -dNOPAUSE -dBATCH -sDEVICE=txtwrite -sOutputFile="$tmp/p%d.txt" "$pdf"
  pages="$(find "$tmp" -name 'p*.txt' | wc -l | tr -d ' ')"
  : > "$out/$name.txt"
  for ((p = 1; p <= pages; p++)); do
    printf '===== Seite %d =====\n' "$p" >> "$out/$name.txt"
    tr -d "\r" < "$tmp/p$p.txt" >> "$out/$name.txt"
  done
  echo "$name: $pages pages"
done
