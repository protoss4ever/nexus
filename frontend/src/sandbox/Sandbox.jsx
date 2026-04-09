import { useState, useCallback } from 'react';
import Recommend from './modules/Recommend';
import Group from './modules/Group';
import Predict from './modules/Predict';
import SandboxMemoryPanel from '../memory/SandboxMemoryPanel';
import { useSandboxMemory } from '../memory/useMemory.js';
import { PinButton } from '../workspace/WorkspaceView.jsx';
import { makeModulePin } from '../workspace/useWorkspace.js';

const MODULES = [
  { id: 'recommend', label: 'Recommend', Component: Recommend },
  { id: 'group',     label: 'Group',     Component: Group },
  { id: 'predict',   label: 'Predict',   Component: Predict },
];

export default function Sandbox({ onNavigate, onOpenLab, workspace, onOpenWorkspace }) {
  const [active, setActive]   = useState('recommend');
  const [memOpen, setMemOpen] = useState(false);
  const memory = useSandboxMemory();

  const current = MODULES.find(m => m.id === active);
  const { Component } = current;

  // logRecent is passed down to each module so it can log meaningful interactions
  const logRecent = useCallback((label, level) => {
    memory.logRecent({ module: active, level, label });
  }, [active, memory]);

  // saveItem surface — modules can call this with a label+level
  const saveItem = useCallback((label, level) => {
    memory.saveItem({ module: active, level, label });
  }, [active, memory]);

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh', background:'var(--sand)', color:'var(--ink)' }}>
      <nav className="top-nav nav-sandbox">
        <div className="nav-left">
          <button className="nav-home" onClick={() => onNavigate('landing')}>Nexus</button>
          <span className="nav-space">Sandbox</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
          <button
            className="mem-trigger mem-trigger--sandbox"
            onClick={() => setMemOpen(o => !o)}
            title="Explorations"
          >
            <span className="mem-trigger-icon">◷</span>
            Explorations
            {(memory.recent.length > 0 || memory.saved.length > 0) && (
              <span className="mem-trigger-dot" />
            )}
          </button>
          <button
            className="ws-trigger ws-trigger--sandbox"
            onClick={onOpenWorkspace}
            title="Workspace"
          >
            ⊞ Workspace
            {workspace && (workspace.resultPins.length + workspace.modulePins.length) > 0 && (
              <span className="ws-trigger-dot" />
            )}
          </button>
          <button className="nav-back" onClick={() => onNavigate('landing')}>← Home</button>
        </div>
      </nav>

      <div className="sb-body">
        <div className="sb-concepts">
          {MODULES.map(m => (
            <button
              key={m.id}
              className={`sb-concept-btn${active === m.id ? ' active' : ''}`}
              onClick={() => setActive(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <Component
          onOpenLab={onOpenLab}
          onLogRecent={logRecent}
          onSaveItem={saveItem}
        />
      </div>

      <footer className="footer-sandbox">
        <span>Made by Josh Carter</span>
        <button className="footer-link" onClick={() => onNavigate('disclaimer')}>
          Disclaimer &amp; Terms
        </button>
      </footer>

      <SandboxMemoryPanel
        open={memOpen}
        onClose={() => setMemOpen(false)}
        memory={memory}
      />
    </div>
  );
}
