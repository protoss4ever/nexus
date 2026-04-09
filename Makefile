# ─────────────────────────────────────────────────────────────────────────────
# Nexus Makefile — works on Windows (via Git Bash), macOS, and Linux
# Usage: make dev
# ─────────────────────────────────────────────────────────────────────────────

.PHONY: dev backend frontend install

dev:
	@echo "Starting Nexus..."
ifeq ($(OS),Windows_NT)
	@start.bat
else
	@bash start.sh
endif

backend:
	cd backend && python3 -m pip install -r requirements.txt -q && \
	python3 -m uvicorn main:app --reload --port 8000

frontend:
	cd frontend && npm install --silent && npm run dev

install:
	cd backend && python3 -m pip install -r requirements.txt
	cd frontend && npm install
