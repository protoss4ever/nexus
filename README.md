# Nexus

**Sandbox teaches language. Lab uses language.**

*Non-commercial public license — see [LICENSE](./LICENSE) for terms.*

Nexus is a public, local-first platform for learning AI concepts through interaction and running experiments on your own data with your own models. Two spaces, one platform. No cloud. No accounts. Nothing hidden.

---

## What Nexus is

Nexus has two spaces:

**Sandbox** — A teaching instrument. Learn how recommendation, grouping, and prediction work by interacting with real examples across six domains: Human Behavior, Business, Technology, Science, History, and Systems. Each concept has three depth levels (Starter, Deeper, Real) and four learning modes (Play, See, Build, Explore). No setup required to use the Sandbox.

**Lab** — An experiment workspace. Bring your own data, choose a local model via Ollama, select a task type, and run it. Results are raw model output — no hidden processing, no intermediary interpretation.

Nexus does not contain any intelligence layer, predictive suggestions, or personalization. It is a calm, lightweight tool for learning and experimentation.

---

## What Nexus does

**Three task types** — available in both Sandbox and Lab:
- **Recommend** — Find similarity across items using latent connections
- **Group** — Discover natural clusters without knowing the category names
- **Predict** — Extend patterns forward and understand why models fail at inflection points

**Sandbox features:**
- Six categories: Human Behavior, Business, Technology, Science, History, Systems
- Three depth levels per concept: Starter / Deeper / Real
- Four learning modes: Play / See / Build / Explore
- Progression nudge after meaningful interaction
- Category and level apply across all four modes

**Lab features:**
- File upload: `.txt`, `.csv`, `.json` parsed client-side into editable data field
- Editable prompts with sensible defaults per task
- Model dropdown populated from your local Ollama installation
- Experiment memory: save, annotate, and restore past runs

**Memory:**
- Sandbox: Recent explorations (passive) + Saved items (intentional) in a slide-out panel
- Lab: Experiment history with save, notes, expand, and restore

**Workspace:**
- Pin Lab results and Sandbox modules
- Compare two pinned results side by side with differences highlighted
- Persistent freeform notes
- Accessible from both spaces

---

## Requirements

| Requirement | Version |
|-------------|---------|
| [Node.js](https://nodejs.org/) | 18 or higher |
| [Python](https://www.python.org/) | 3.11 or higher |
| [Ollama](https://ollama.com/) | Latest (for Lab) |

Ollama is only required to use the Lab. The Sandbox works without it.

---

## Quick start

### Option 1 — One command (all platforms)

```bash
# macOS / Linux
bash start.sh

# Windows
start.bat

# Any platform with Make
make dev
```

> **Windows note:** If Windows shows a SmartScreen warning ("Windows protected your PC") when running `start.bat`, click **More info** then **Run anyway**. Alternatively, right-click `start.bat` → Properties → check **Unblock** at the bottom → OK. This happens because the file was downloaded from the internet. The script only starts the local backend and frontend servers.

### Option 2 — Manual

**1. Install Ollama and pull a model (for Lab use)**
```bash
# Install from https://ollama.com, then:
ollama pull qwen2.5:7b
# or any model you prefer
```

**2. Start the backend**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**3. Start the frontend**
```bash
cd frontend
npm install
npm run dev
```

**4. Open in browser**
```
http://localhost:3000
```

### Option 3 — Sandbox preview (no setup)

Open `nexus-preview.html` directly in your browser for a quick look at the Sandbox. No installation required.

Note: the preview is a standalone file from an earlier build. It does not include the category selector, workspace, or the full V4 depth content. The full product requires the React app (`npm run dev`).

---

## OS support

| OS | Launcher |
|----|----------|
| Windows | `start.bat` |
| macOS | `bash start.sh` |
| Linux | `bash start.sh` |
| Any (with Make) | `make dev` |

The application code is fully cross-platform. The launchers start both backend and frontend and open the browser automatically.

---

## Project structure

```
nexus/
├── frontend/
│   ├── src/
│   │   ├── App.jsx              # Root routing and workspace state
│   │   ├── index.css            # Shared design tokens and styles
│   │   ├── sandbox/
│   │   │   ├── Sandbox.jsx      # Sandbox space root
│   │   │   └── modules/
│   │   │       ├── ModuleShell.jsx   # Category + level + tab shell
│   │   │       ├── Recommend.jsx
│   │   │       ├── Group.jsx
│   │   │       ├── Predict.jsx
│   │   │       └── data/
│   │   │           ├── index.js           # Category registry
│   │   │           ├── human-behavior.js
│   │   │           ├── business.js
│   │   │           ├── technology.js
│   │   │           ├── science.js
│   │   │           ├── history.js
│   │   │           └── systems.js
│   │   ├── lab/
│   │   │   └── Lab.jsx          # Lab experiment space
│   │   ├── memory/
│   │   │   ├── useMemory.js     # Sandbox + Lab memory hooks
│   │   │   ├── SandboxMemoryPanel.jsx
│   │   │   └── LabMemoryPanel.jsx
│   │   └── workspace/
│   │       ├── useWorkspace.js  # Workspace hook (localStorage)
│   │       └── WorkspaceView.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── main.py                  # FastAPI: GET /models, POST /run
│   └── requirements.txt
├── nexus-preview.html           # Standalone single-file Sandbox preview
├── start.sh                     # macOS / Linux launcher
├── start.bat                    # Windows launcher
├── Makefile                     # Cross-platform: make dev
└── README.md
```

---

## Using the Lab

1. Make sure Ollama is running and at least one model is pulled
2. Start the backend (`uvicorn main:app --port 8000`)
3. Open Nexus and go to Lab
4. Select a task type: Recommend, Group, or Predict
5. Use the starter data or paste your own (or upload a `.txt`, `.csv`, or `.json` file)
6. Edit the prompt if you want — it is always visible and editable
7. Select a model from the dropdown and click Run

Results appear as raw model output. Nothing is interpreted or processed beyond what the model returns.

To save a result: click **↓ Save experiment** in the output header, give it a name, and it will appear in the Experiments panel.

---

## Using the Sandbox

The Sandbox does not require any backend or models. Open Nexus and go to Sandbox.

1. Select a module: Recommend, Group, or Predict
2. Select a category from the dropdown (Human Behavior, Business, Technology, Science, History, Systems)
3. Select a depth level: Starter, Deeper, or Real
4. Work through Play → See → Build → Explore at your own pace

After interacting with a module, a quiet nudge will suggest trying the next depth level. You can also jump to any level directly.

---

## Memory and Workspace

**Memory** is local to your browser (localStorage). Nothing is sent anywhere.

- **Sandbox memory:** Recent explorations are logged automatically. Click the save button (↓) on any recent item to keep it. Access via the Explorations panel in the Sandbox nav.
- **Lab memory:** After a run, click **↓ Save experiment** to name and store it. Access via the Experiments panel in the Lab nav. Saved experiments can be restored to the Lab fields.

**Workspace** is a quiet pinboard accessible from both spaces via the ⊞ Workspace button.

- **Pin** any Lab result after a run, or any Sandbox module at any level
- **Compare** two pinned Lab results side by side (differences highlighted in amber)
- **Notes** persist automatically as you type

All memory and workspace data stays on your machine. There is no export in the current version.

---

## Disclaimer

Nexus is provided for **educational and experimental use only**.

AI model outputs are generated automatically and may be inaccurate, incomplete, or misleading. Do not use Nexus for decisions involving health, legal matters, financial planning, safety, or any consequential purpose.

Nexus is provided "as is" without warranty of any kind. Use is entirely at your own risk.

Do not use Nexus to process sensitive personal data, confidential information, or any content you do not have the right to use. Do not use Nexus to generate harmful, deceptive, or unlawful content.

---

## License and usage

Nexus is digital public infrastructure, free for personal, educational, and research use.

**Non-commercial use is permitted freely.** Use it, share it, adapt it — as long as the use is not primarily directed toward commercial advantage or monetary compensation. Any derivative must carry the same license and attribution.

**Commercial use requires a separate license.** If you want to use Nexus in a product, as a paid service, or as part of a business model, contact Josh Carter at joshcarter@amina.tools to discuss terms. Commercial licensing is available — this restriction exists to keep Nexus in the public commons, not to prevent collaboration.

See the [LICENSE](./LICENSE) file for the full terms.

---

Made by Josh Carter
