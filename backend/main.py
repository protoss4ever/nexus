from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import asyncio

app = FastAPI(title="Nexus Backend", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OLLAMA_BASE = "http://localhost:11434"

class RunRequest(BaseModel):
    task: str
    data: str
    model: str
    prompt: str

@app.get("/models")
async def get_models():
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp = await client.get(f"{OLLAMA_BASE}/api/tags")
            data = resp.json()
            names = [m["name"] for m in data.get("models", [])]
            return {"models": names}
    except Exception as e:
        return {"models": [], "error": str(e)}

@app.post("/run")
async def run_experiment(req: RunRequest):
    try:
        payload = {
            "model": req.model,
            "stream": False,
            "messages": [
                {"role": "system", "content": req.prompt},
                {"role": "user", "content": req.data}
            ]
        }
        async with httpx.AsyncClient(timeout=120.0) as client:
            resp = await client.post(f"{OLLAMA_BASE}/api/chat", json=payload)
            data = resp.json()
            result = data.get("message", {}).get("content", "")
            return {"result": result, "error": None}
    except Exception as e:
        return {"result": None, "error": str(e)}

@app.get("/health")
async def health():
    return {"status": "ok"}
