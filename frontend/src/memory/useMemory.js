// ─── NEXUS MEMORY ─────────────────────────────────────────────────────────────
// Local-first. localStorage only. No cloud, no backend, no sync.
//
// Two distinct memory systems:
//   SANDBOX — curiosity memory (recent explorations + saved items)
//   LAB     — experiment memory (saved experiments + history)
//
// Behavioral contract:
//   Recent   = passive, auto-logged, short-term (capped at 20)
//   Saved    = intentional user action, permanent until deleted
//   Experiments = intentional save after a Lab run
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, useEffect } from 'react';

const KEYS = {
  SANDBOX_RECENT:  'nexus:sandbox:recent',
  SANDBOX_SAVED:   'nexus:sandbox:saved',
  LAB_EXPERIMENTS: 'nexus:lab:experiments',
};

const RECENT_LIMIT = 20;
const EXP_LIMIT    = 100;

// ─── STORAGE HELPERS ──────────────────────────────────────────────────────────

function load(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// ─── SANDBOX MEMORY HOOK ──────────────────────────────────────────────────────

export function useSandboxMemory() {
  const [recent, setRecent] = useState(() => load(KEYS.SANDBOX_RECENT));
  const [saved,  setSaved]  = useState(() => load(KEYS.SANDBOX_SAVED));

  // Log a recent exploration — called passively when user interacts with a module
  const logRecent = useCallback((entry) => {
    // entry: { module, level, label }
    setRecent(prev => {
      // Deduplicate by module+level+label — update timestamp if same
      const filtered = prev.filter(
        r => !(r.module === entry.module && r.level === entry.level && r.label === entry.label)
      );
      const next = [
        { ...entry, id: uid(), timestamp: Date.now() },
        ...filtered,
      ].slice(0, RECENT_LIMIT);
      save(KEYS.SANDBOX_RECENT, next);
      return next;
    });
  }, []);

  // Save an item intentionally
  const saveItem = useCallback((entry, note = '') => {
    // entry: { module, level, label }
    setSaved(prev => {
      // Don't duplicate exact same module+level+label
      if (prev.some(s => s.module === entry.module && s.level === entry.level && s.label === entry.label)) {
        return prev;
      }
      const next = [{ ...entry, id: uid(), timestamp: Date.now(), note }, ...prev];
      save(KEYS.SANDBOX_SAVED, next);
      return next;
    });
  }, []);

  // Update note on a saved item
  const updateNote = useCallback((id, note) => {
    setSaved(prev => {
      const next = prev.map(s => s.id === id ? { ...s, note } : s);
      save(KEYS.SANDBOX_SAVED, next);
      return next;
    });
  }, []);

  // Remove a saved item
  const removeSaved = useCallback((id) => {
    setSaved(prev => {
      const next = prev.filter(s => s.id !== id);
      save(KEYS.SANDBOX_SAVED, next);
      return next;
    });
  }, []);

  // Clear all recent
  const clearRecent = useCallback(() => {
    setRecent([]);
    save(KEYS.SANDBOX_RECENT, []);
  }, []);

  return { recent, saved, logRecent, saveItem, updateNote, removeSaved, clearRecent };
}

// ─── LAB MEMORY HOOK ──────────────────────────────────────────────────────────

export function useLabMemory() {
  const [experiments, setExperiments] = useState(() => load(KEYS.LAB_EXPERIMENTS));

  // Save an experiment after a run
  const saveExperiment = useCallback((entry) => {
    // entry: { name, task, model, data, prompt, result }
    setExperiments(prev => {
      const next = [
        { ...entry, id: uid(), timestamp: Date.now(), note: '' },
        ...prev,
      ].slice(0, EXP_LIMIT);
      save(KEYS.LAB_EXPERIMENTS, next);
      return next;
    });
  }, []);

  // Update note on an experiment
  const updateNote = useCallback((id, note) => {
    setExperiments(prev => {
      const next = prev.map(e => e.id === id ? { ...e, note } : e);
      save(KEYS.LAB_EXPERIMENTS, next);
      return next;
    });
  }, []);

  // Remove an experiment
  const removeExperiment = useCallback((id) => {
    setExperiments(prev => {
      const next = prev.filter(e => e.id !== id);
      save(KEYS.LAB_EXPERIMENTS, next);
      return next;
    });
  }, []);

  // Clear all
  const clearAll = useCallback(() => {
    setExperiments([]);
    save(KEYS.LAB_EXPERIMENTS, []);
  }, []);

  return { experiments, saveExperiment, updateNote, removeExperiment, clearAll };
}

// ─── FORMAT HELPERS ───────────────────────────────────────────────────────────

export function formatTimestamp(ts) {
  const d = new Date(ts);
  const now = new Date();
  const diffMs = now - d;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1)    return 'just now';
  if (diffMins < 60)   return `${diffMins}m ago`;
  if (diffHours < 24)  return `${diffHours}h ago`;
  if (diffDays < 7)    return `${diffDays}d ago`;
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}
