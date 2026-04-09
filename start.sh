#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Nexus — start script for macOS and Linux
# Usage: bash start.sh
# ─────────────────────────────────────────────────────────────────────────────

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND="$SCRIPT_DIR/frontend"
BACKEND="$SCRIPT_DIR/backend"

echo ""
echo "  Nexus"
echo "  ─────────────────────────────"
echo ""

# Check Node
if ! command -v node &>/dev/null; then
  echo "  Error: Node.js not found. Install from https://nodejs.org (v18+)"
  exit 1
fi

# Check Python
PYTHON=""
if command -v python3 &>/dev/null; then PYTHON="python3"
elif command -v python &>/dev/null; then PYTHON="python"
else echo "  Error: Python not found. Install from https://python.org (3.11+)"; exit 1; fi

echo "  [1/2] Starting backend on port 8000..."
cd "$BACKEND"
$PYTHON -m pip install -r requirements.txt -q
$PYTHON -m uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!

sleep 2

echo "  [2/2] Starting frontend on port 3000..."
cd "$FRONTEND"
npm install --silent
npm run dev &
FRONTEND_PID=$!

sleep 3

# Open browser
echo ""
echo "  Opening http://localhost:3000 ..."
if command -v open &>/dev/null; then
  open http://localhost:3000          # macOS
elif command -v xdg-open &>/dev/null; then
  xdg-open http://localhost:3000      # Linux
fi

echo ""
echo "  Backend:  http://localhost:8000"
echo "  Frontend: http://localhost:3000"
echo ""
echo "  Press Ctrl+C to stop both servers."
echo ""

# Wait and clean up on exit
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo '  Nexus stopped.'" EXIT
wait
