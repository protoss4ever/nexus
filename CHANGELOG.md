# Changelog

All notable changes to Nexus are documented here.

---

## V4 — Finalization

**Category expansion.** Sandbox now covers six domains: Human Behavior, Business, Technology, Science, History, and Systems. Each category includes Recommend, Group, and Predict examples at all three depth levels (Starter, Deeper, Real). A simple category dropdown sits above the level selector in each module.

**Workspace.** A new persistent workspace panel accessible from both Sandbox and Lab. Pin Lab results and Sandbox modules. Compare two pinned results side by side with differences highlighted. Persistent freeform notes. Stored in localStorage — nothing leaves the machine.

**Cross-platform launch support.** `start.sh` added for macOS and Linux. `Makefile` added with `make dev`, `make backend`, `make frontend`. Windows `start.bat` unchanged.

**README hardened.** Full rewrite covering product description, requirements, quick start for all platforms, project structure, usage guide for Lab and Sandbox, memory and workspace documentation, disclaimer, and non-commercial license terms.

---

## V3.1 — Module data split

Extracted all Sandbox data from `modules.js` into a `modules/data/` directory — one file per category. `index.js` serves as the single import point with a category registry and `ready` flag. `modules.js` becomes a compatibility re-export layer. No behavior changes.

---

## V3 — Memory

**Sandbox memory.** Recent explorations logged passively (capped at 20, deduplicated). Saved items require intentional action. Optional inline notes. Slide-out panel in Sandbox nav.

**Lab memory.** Save experiments by name after a run. Experiment history with expand, notes, and restore to Lab fields. Slide-out panel in Lab nav.

All memory stored in localStorage. Local-first, no cloud.

---

## V2 — Sandbox depth expansion

Three depth levels added to each module: **Starter**, **Deeper**, **Real**. Level selector appears above the Play / See / Build / Explore tabs. Level applies across all four tabs.

Progression nudge appears after meaningful interaction — quiet, dismissible, non-blocking.

Each module's content upgraded:
- **Recommend:** human interests (Starter), cross-domain media diet (Deeper), purchase co-occurrence (Real)
- **Group:** cities by climate/density (Starter), job listings (Deeper), news headlines with topic/tone toggle (Real)
- **Predict:** noisy step counts (Starter), seasonal sales with cycle (Deeper), startup WAU S-curve with revealed actual (Real)

**Explore tab** added to each module with harder questions and real-world applications.

---

## V1.1 — File upload

Lab accepts `.txt`, `.csv`, and `.json` file uploads. Parsed client-side and inserted into the editable data field. CSV headers auto-detected. JSON pretty-printed. User can edit after upload.

---

## V1 — Foundation

**Sandbox.** Three modules (Recommend, Group, Predict), each with Play / See / Build teaching rhythm. Curiosity-gap expandable after interaction. Bridge to Lab at Build level.

**Lab.** Task selector (Recommend / Group / Predict), model dropdown via Ollama, editable data and prompt fields, run button, results panel. Starter data per task.

**Backend.** FastAPI, two endpoints: `GET /models`, `POST /run`. Ollama integration. CORS enabled. Graceful fallback if Ollama is not running.

**Disclaimer gate.** Required acceptance on first entry. Accessible from every footer.

**Windows launcher.** `start.bat` starts backend and frontend and opens browser.
