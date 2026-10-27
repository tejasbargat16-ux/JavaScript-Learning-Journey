#!/usr/bin/env bash
# Scaffold helper (works in Termux).
#
#   bash scripts/new.sh day 13 "Closures"
#   bash scripts/new.sh dsa arrays two-sum "Two Sum" Easy "Hash Map"
#
set -euo pipefail
cd "$(dirname "$0")/.."

# escape characters that are special inside a sed replacement (\ & |)
esc() { printf '%s' "$1" | sed -e 's/[\\&|]/\\&/g'; }

case "${1:-}" in
  day)
    N=$(printf "%02d" "$((10#${2:?usage: new.sh day <number> <topic>}))")
    TOPIC="${3:?usage: new.sh day <number> <topic>}"
    DIR="Day-$N"
    [ -e "$DIR" ] && { echo "✗ $DIR already exists"; exit 1; }
    mkdir "$DIR"
    sed -e "s|{{NN}}|$N|g" -e "s|{{TOPIC}}|$(esc "$TOPIC")|g" scripts/templates/day-readme.md > "$DIR/README.md"
    : > "$DIR/day$N.js"            # left empty on purpose (empty = ⏳ in progress table)
    : > "$DIR/day${N}_practice.js"
    echo "✓ Created $DIR  (README.md, day$N.js, day${N}_practice.js)"
    ;;
  dsa)
    TOPIC="${2:?usage: new.sh dsa <topic> <slug> <title> [diff] [pattern]}"
    SLUG="${3:?missing slug}"
    TITLE="${4:?missing title}"
    DIFF="${5:-Easy}"
    PATTERN="${6:-TBD}"
    F="DSA/$TOPIC/$SLUG.js"
    [ -e "$F" ] && { echo "✗ $F already exists"; exit 1; }
    mkdir -p "DSA/$TOPIC"
    sed -e "s|{{TITLE}}|$(esc "$TITLE")|g" -e "s|{{DIFF}}|$(esc "$DIFF")|g" -e "s|{{PATTERN}}|$(esc "$PATTERN")|g" DSA/_template.js > "$F"
    echo "✓ Created $F"
    ;;
  *)
    echo "usage:"
    echo "  bash scripts/new.sh day <number> <topic>"
    echo "  bash scripts/new.sh dsa <topic> <slug> <title> [Easy|Medium|Hard] [pattern]"
    exit 1
    ;;
esac
