#!/usr/bin/env bash
# Downloads the BSI PDFs listed in RESSOURCES.md into resources/ (git-ignored, ADR 0019).
# Existing files are kept; delete a PDF to fetch it again.
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p resources

# Pairs every "### `file.pdf`" heading with the URL on its "**Quelle:**" line.
awk '
  /^### `.*\.pdf`/ { file = $2; gsub(/`/, "", file) }
  /\*\*Quelle:\*\*/ && file {
    url = $0
    sub(/.*\*\*Quelle:\*\* /, "", url)
    sub(/;.*/, "", url)
    print file, url
    file = ""
  }
' RESSOURCES.md | while read -r file url; do
  if [[ -s "resources/$file" ]]; then
    echo "skip   $file"
  else
    echo "fetch  $file"
    curl --fail --silent --show-error --location --output "resources/$file" "$url"
  fi
done
