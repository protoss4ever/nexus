import { useState } from 'react';
import Sandbox from './sandbox/Sandbox';
import Lab from './lab/Lab';
import WorkspaceView from './workspace/WorkspaceView';
import { useWorkspace } from './workspace/useWorkspace.js';

function Disclaimer({ onAccept }) {
  return (
    <div style={{ display:'flex', minHeight:'100vh', flexDirection:'column', background:'var(--dark-bg)', color:'var(--dark-text)', alignItems:'center', justifyContent:'center', padding:'3rem 1.5rem' }}>
      <div className="disclaimer-inner">
        <div className="disclaimer-title">Before you begin</div>
        <div className="disclaimer-section"><div className="disclaimer-heading">What Nexus is</div><div className="disclaimer-text">Nexus is an educational tool for learning AI concepts through interaction. It connects to locally installed AI models on your own machine. No data is sent to external servers.</div></div>
        <div className="disclaimer-section"><div className="disclaimer-heading">AI Output Disclaimer</div><div className="disclaimer-text">AI model outputs are generated automatically and may be inaccurate, incomplete, or misleading. Do not rely on Nexus outputs for decisions involving health, legal matters, financial planning, safety, or any consequential purpose. Always verify important information with qualified professionals.</div></div>
        <div className="disclaimer-section"><div className="disclaimer-heading">No Warranty</div><div className="disclaimer-text">Nexus is provided "as is" without warranty of any kind. The author makes no representations about the accuracy, reliability, or fitness of this tool for any purpose. Use is entirely at your own risk.</div></div>
        <div className="disclaimer-section"><div className="disclaimer-heading">Appropriate Use</div><div className="disclaimer-text">Nexus is intended for educational and experimental use only. Do not use it to process sensitive personal data, confidential information, or any content that you do not have the right to share. Do not use Nexus to generate harmful, deceptive, or unlawful content.</div></div>
        <div className="disclaimer-section"><div className="disclaimer-heading">Local Models</div><div className="disclaimer-text">Nexus requires Ollama and local AI models installed on your machine. The behavior and quality of outputs depend entirely on the models you have installed and how you configure them.</div></div>
        <button className="disclaimer-accept" onClick={onAccept}>I understand — take me to Nexus</button>
      </div>
    </div>
  );
}

function Landing({ onNavigate }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh', background:'var(--sand)', color:'var(--ink)', alignItems:'center', justifyContent:'center', padding:'3rem 1.5rem', textAlign:'center', position:'relative' }}>
      <div className="landing-grain" />
      <div className="landing-inner">
        <div className="nexus-wordmark">Nexus</div>
        <div className="landing-tagline">Learn AI concepts by doing. Then do them for real.</div>
        <div className="space-cards">
          <button className="space-card sandbox-card" onClick={() => onNavigate('sandbox')}>
            <span className="card-label">Sandbox</span>
            <span className="card-sub">Learn by playing with ideas</span>
            <span className="card-arrow">→</span>
          </button>
          <button className="space-card lab-card" onClick={() => onNavigate('lab')}>
            <span className="card-label" style={{ color:'var(--dark-text)' }}>Lab</span>
            <span className="card-sub" style={{ color:'var(--dark-mute)' }}>Run your own experiments</span>
            <span className="card-arrow" style={{ color:'var(--dark-text)' }}>→</span>
          </button>
        </div>
      </div>
      <footer className="footer-sandbox">
        <span>Made by Josh Carter</span>
        <button className="footer-link" onClick={() => onNavigate('disclaimer')}>Disclaimer &amp; Terms</button>
      </footer>
    </div>
  );
}

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [view, setView]         = useState('disclaimer');
  const [labTask, setLabTask]   = useState('recommend');
  const [wsOpen, setWsOpen]     = useState(false);
  const workspace = useWorkspace();

  function navigate(target) {
    if (!accepted && target !== 'disclaimer') { setView('disclaimer'); return; }
    setView(target);
  }
  function openLab(task) { setLabTask(task); setView('lab'); }

  if (view === 'disclaimer') return <Disclaimer onAccept={() => { setAccepted(true); setView('landing'); }} />;
  if (view === 'landing')    return <Landing onNavigate={navigate} />;
  if (view === 'sandbox')    return (
    <>
      <Sandbox onNavigate={navigate} onOpenLab={openLab} workspace={workspace} onOpenWorkspace={() => setWsOpen(true)} />
      {wsOpen && <WorkspaceView workspace={workspace} onClose={() => setWsOpen(false)} />}
    </>
  );
  if (view === 'lab') return (
    <>
      <Lab onNavigate={navigate} initialTask={labTask} workspace={workspace} onOpenWorkspace={() => setWsOpen(true)} />
      {wsOpen && <WorkspaceView workspace={workspace} onClose={() => setWsOpen(false)} />}
    </>
  );
  return <Landing onNavigate={navigate} />;
}
