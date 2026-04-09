// ─── NEXUS WORKSPACE ──────────────────────────────────────────────────────────
// Light workspace tier per WORKSPACE-PRIMITIVE-AND-NEXUS-V4-DIRECTION-V1.
// Pin types: result (Lab), module (Sandbox).
// Behaviors: pin, compare (2 results), notes, persistence.
// Storage: localStorage under nexus-workspace-* keys.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback } from 'react';

const KEYS = {
  PINS:  'nexus-workspace-pins-v1',
  NOTES: 'nexus-workspace-notes-v1',
};

function loadPins()   { try { return JSON.parse(localStorage.getItem(KEYS.PINS) || '[]'); } catch { return []; } }
function savePins(d)  { try { localStorage.setItem(KEYS.PINS, JSON.stringify(d)); } catch {} }
function loadNotes()  { return localStorage.getItem(KEYS.NOTES) || ''; }
function saveNotes(v) { try { localStorage.setItem(KEYS.NOTES, v); } catch {} }

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }

export function useWorkspace() {
  const [pins,  setPins]  = useState(() => loadPins());
  const [notes, setNotes] = useState(() => loadNotes());

  const pin = useCallback((item) => {
    setPins(prev => {
      // Idempotent — same type+key combo does not duplicate
      const key = item.type === 'result'
        ? `${item.type}:${item.task}:${item.model}:${item.timestamp}`
        : `${item.type}:${item.module_id}:${item.level}`;
      if (prev.some(p => p._key === key)) return prev;
      const next = [{ ...item, id: uid(), pinned_at: new Date().toISOString(), _key: key }, ...prev];
      savePins(next);
      return next;
    });
  }, []);

  const unpin = useCallback((id) => {
    setPins(prev => { const next = prev.filter(p => p.id !== id); savePins(next); return next; });
  }, []);

  const isPinned = useCallback((key) => {
    return pins.some(p => p._key === key);
  }, [pins]);

  const updateNotes = useCallback((v) => {
    setNotes(v);
    saveNotes(v);
  }, []);

  const clearAll = useCallback(() => {
    setPins([]); savePins([]);
    setNotes(''); saveNotes('');
  }, []);

  const resultPins = pins.filter(p => p.type === 'result');
  const modulePins = pins.filter(p => p.type === 'module');

  return { pins, resultPins, modulePins, notes, pin, unpin, isPinned, updateNotes, clearAll };
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export function makeResultPin(run) {
  return {
    type:           'result',
    task:           run.task,
    model:          run.model || '',
    input_preview:  (run.data   || '').slice(0, 80),
    output_preview: (run.result || '').slice(0, 80),
    timestamp:      new Date().toISOString(),
  };
}

export function makeModulePin(module_id, level, label) {
  return {
    type:      'module',
    module_id,
    level,
    label:     label || `${module_id} / ${level}`,
    timestamp: new Date().toISOString(),
  };
}
