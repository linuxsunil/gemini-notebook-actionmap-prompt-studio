// shell-template.js — Locked, WCAG 2.1 AA-Compliant Course Shell Generator

function buildLockedCourseHtml(courseData) {
  // Safely embed JSON inside a <script> tag without breaking HTML parsing
  const safeJson = JSON.stringify(courseData)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');

  const safeTitle = String((courseData.meta && courseData.meta.title) || 'Interactive Workplace Simulation')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeTitle}</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f8fafc;
      --surface: #ffffff;
      --surface-alt: #f1f5f9;
      --ink: #0f172a;
      --ink-muted: #475569;
      --border: #cbd5e1;
      --border-light: #e2e8f0;
      --navy: #142c4c;
      --navy-hover: #0d1e36;
      --navy-soft: #e2eaf4;
      --emerald: #047857;
      --emerald-hover: #065f46;
      --emerald-bg: #d1fae5;
      --emerald-ink: #064e3b;
      --amber: #b45309;
      --amber-bg: #fef3c7;
      --amber-ink: #78350f;
      --error: #b91c1c;
      --error-bg: #fee2e2;
      --error-ink: #7f1d1d;
      --radius: 6px;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }

    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; overflow-x: clip; }
    body {
      font-family: var(--font-sans);
      font-size: 16px;
      line-height: 1.55;
      color: var(--ink);
      background: var(--bg);
      -webkit-font-smoothing: antialiased;
    }

    button { font-family: inherit; font-size: inherit; color: inherit; cursor: pointer; }
    :focus-visible { outline: 3px solid #f59e0b; outline-offset: 2px; }
    [hidden] { display: none !important; }

    /* Header */
    .course-header {
      background: var(--navy);
      color: #ffffff;
      border-bottom: 4px solid var(--emerald);
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.15rem 1.5rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .brand-kicker {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--emerald-bg);
      margin-bottom: 0.25rem;
    }
    .brand-title {
      margin: 0;
      font-size: clamp(1.25rem, 1.1rem + 0.8vw, 1.75rem);
      font-weight: 700;
      line-height: 1.2;
    }
    .brand-sub {
      margin: 0.25rem 0 0;
      font-size: 0.9rem;
      color: #cbd5e1;
    }
    .header-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .btn-job-aid {
      min-height: 44px;
      padding: 0.55rem 1rem;
      background: var(--emerald);
      color: #ffffff;
      border: 1px solid var(--emerald);
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 0.875rem;
    }
    .btn-job-aid:hover { background: var(--emerald-hover); }
    .btn-spec-toggle {
      min-height: 44px;
      padding: 0.55rem 0.9rem;
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 0.825rem;
    }
    .btn-spec-toggle:hover { background: rgba(255, 255, 255, 0.2); }

    /* Collapsible ID Spec Strip */
    .spec-strip {
      background: var(--navy-soft);
      border-bottom: 1px solid var(--border);
      color: var(--ink);
    }
    .spec-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
      font-size: 0.875rem;
    }
    .spec-label {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--navy);
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .spec-list { margin: 0; padding-left: 1.1rem; }

    /* Stepper */
    .stepper-bar {
      background: var(--surface);
      border-bottom: 1px solid var(--border);
    }
    .stepper-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .stepper-tabs {
      display: flex;
      gap: 0.25rem;
      overflow-x: auto;
    }
    .step-tab {
      min-height: 46px;
      padding: 0.5rem 0.9rem;
      background: transparent;
      border: 0;
      border-bottom: 3px solid transparent;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--ink-muted);
      white-space: nowrap;
    }
    .step-tab:hover:not(:disabled) { background: var(--surface-alt); color: var(--ink); }
    .step-tab.is-active { color: var(--navy); border-bottom-color: var(--navy); }
    .step-tab:disabled { opacity: 0.45; cursor: not-allowed; }
    .step-num {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      padding: 0.12rem 0.4rem;
      border-radius: 4px;
      background: var(--surface-alt);
      color: var(--ink-muted);
    }
    .step-tab.is-active .step-num { background: var(--navy-soft); color: var(--navy); }
    .step-tab.is-resolved .step-num { background: var(--emerald-bg); color: var(--emerald-ink); }
    .stepper-meta {
      display: flex;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-transform: uppercase;
      color: var(--ink-muted);
    }

    /* Main Layout */
    .workspace {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.5rem;
    }
    .triage-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
      gap: 1.5rem;
      align-items: start;
    }

    /* Message Card */
    .comms-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
    }
    .comms-bar {
      background: var(--surface-alt);
      border-bottom: 1px solid var(--border);
      padding: 0.65rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .comms-channel {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--ink-muted);
      font-weight: 600;
    }
    .comms-header {
      padding: 1.25rem;
      border-bottom: 1px solid var(--border-light);
    }
    .comms-subject {
      margin: 0 0 0.5rem;
      font-size: 1.15rem;
      font-weight: 700;
      line-height: 1.3;
    }
    .comms-sender {
      font-size: 0.875rem;
      color: var(--ink-muted);
    }
    .comms-sender strong { color: var(--ink); }
    .comms-body {
      padding: 1.25rem;
      font-size: 0.95rem;
      white-space: pre-line;
      word-break: break-word;
    }

    /* Decision Panel */
    .decision-panel {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .panel-kicker {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--ink-muted);
      font-weight: 600;
    }
    .panel-title {
      margin: 0.2rem 0 0;
      font-size: 1.15rem;
      font-weight: 700;
    }
    .prompt-text { margin: 0; color: var(--ink-muted); font-size: 0.925rem; }

    .choices-list { display: flex; flex-direction: column; gap: 0.65rem; }
    .choice-btn {
      width: 100%;
      text-align: left;
      padding: 0.9rem 1rem;
      background: var(--surface-alt);
      border: 1px solid var(--border);
      border-left: 4px solid var(--ink-muted);
      border-radius: var(--radius);
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      transition: background 0.12s ease, border-color 0.12s ease;
    }
    .choice-btn:hover:not(:disabled) {
      background: var(--navy-soft);
      border-left-color: var(--navy);
    }
    .choice-btn:disabled { cursor: default; }
    .choice-btn.is-contained {
      background: var(--emerald-bg);
      border-color: var(--emerald);
      border-left-color: var(--emerald);
      color: var(--emerald-ink);
    }
    .choice-btn.is-fallout {
      background: var(--error-bg);
      border-color: var(--error);
      border-left-color: var(--error);
      color: var(--error-ink);
    }
    .choice-btn.is-tried { opacity: 0.65; border-left-color: var(--amber); }
    .choice-label { font-weight: 700; font-size: 0.925rem; }
    .choice-detail { font-size: 0.85rem; color: var(--ink-muted); }
    .choice-btn.is-contained .choice-detail { color: var(--emerald-ink); }
    .choice-btn.is-fallout .choice-detail { color: var(--error-ink); }

    /* Consequence Box */
    .consequence-box {
      padding: 1rem 1.15rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .consequence-box[data-outcome="contained"] {
      background: var(--emerald-bg);
      border-color: var(--emerald);
      border-left: 4px solid var(--emerald);
      color: var(--emerald-ink);
    }
    .consequence-box[data-outcome="fallout"] {
      background: var(--error-bg);
      border-color: var(--error);
      border-left: 4px solid var(--error);
      color: var(--error-ink);
    }
    .consequence-title { margin: 0; font-size: 1rem; font-weight: 700; }
    .timeline-list {
      margin: 0;
      padding-left: 1.15rem;
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .takeaway-text {
      margin: 0;
      font-size: 0.875rem;
      padding-top: 0.6rem;
      border-top: 1px solid rgba(15, 23, 42, 0.15);
    }

    .btn-primary {
      min-height: 44px;
      padding: 0.55rem 1.15rem;
      background: var(--navy);
      color: #ffffff;
      border: 0;
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 0.9rem;
      align-self: flex-start;
    }
    .btn-primary:hover { background: var(--navy-hover); }
    .btn-emerald {
      min-height: 44px;
      padding: 0.55rem 1.15rem;
      background: var(--emerald);
      color: #ffffff;
      border: 0;
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 0.9rem;
      align-self: flex-start;
    }
    .btn-emerald:hover { background: var(--emerald-hover); }

    /* Debrief View — Standardized, Zero-Overflow Cards */
    .debrief-shell { display: flex; flex-direction: column; gap: 1.5rem; }
    .debrief-banner {
      background: var(--surface);
      border: 1px solid var(--border);
      border-left: 5px solid var(--emerald);
      border-radius: var(--radius);
      padding: 1.5rem;
    }
    .debrief-banner[data-tier="reinforce"] { border-left-color: var(--amber); }
    .debrief-banner h2 { margin: 0.25rem 0 0.5rem; font-size: 1.5rem; }
    .debrief-banner p { margin: 0; color: var(--ink-muted); max-width: 70ch; }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }
    .metric-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-bottom: 3px solid var(--navy);
      border-radius: var(--radius);
      padding: 1rem 1.15rem;
    }
    .metric-val { font-family: var(--font-mono); font-size: 1.65rem; font-weight: 700; margin: 0.25rem 0; }
    .metric-sub { font-size: 0.8rem; color: var(--ink-muted); }

    .habits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }
    .habit-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-left: 4px solid var(--emerald);
      border-radius: var(--radius);
      padding: 1.1rem;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .habit-card[data-status="reinforced"] { border-left-color: var(--amber); }

    /* LOCKED FIX: Always stack badge under title so it NEVER clips or overflows */
    .habit-head {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;
    }
    .habit-name { margin: 0; font-size: 1rem; font-weight: 700; line-height: 1.3; }
    .habit-badge {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      background: var(--emerald-bg);
      color: var(--emerald-ink);
      max-width: 100%;
    }
    .habit-badge[data-status="reinforced"] {
      background: var(--amber-bg);
      color: var(--amber-ink);
    }
    .habit-desc { margin: 0; font-size: 0.875rem; color: var(--ink-muted); }

    /* Slide-over Job Aid Drawer */
    .drawer-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.48);
      z-index: 40;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }
    .drawer-backdrop.is-open { opacity: 1; pointer-events: auto; }
    .job-aid-drawer {
      position: fixed;
      top: 0; right: 0; bottom: 0;
      width: min(440px, 100vw);
      background: var(--surface);
      border-left: 3px solid var(--navy);
      z-index: 50;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.22s ease;
    }
    .job-aid-drawer.is-open { transform: translateX(0); }
    .drawer-header {
      background: var(--navy);
      color: #ffffff;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      border-bottom: 3px solid var(--emerald);
    }
    .drawer-header h2 { margin: 0; font-size: 1.1rem; }
    .btn-close {
      min-width: 40px; min-height: 40px;
      background: rgba(255, 255, 255, 0.14);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: var(--radius);
      font-weight: 700;
    }
    .drawer-body {
      padding: 1.25rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .aid-section h3 {
      margin: 0 0 0.4rem;
      font-size: 0.85rem;
      font-family: var(--font-mono);
      text-transform: uppercase;
      color: var(--navy);
      border-bottom: 1px solid var(--border-light);
      padding-bottom: 0.25rem;
    }
    .aid-section ul { margin: 0; padding-left: 1.15rem; font-size: 0.875rem; }
    .aid-section li + li { margin-top: 0.35rem; }

    @media (max-width: 860px) {
      .triage-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header class="course-header">
    <div class="header-inner">
      <div>
        <div class="brand-kicker" id="hdr-kicker">Workplace Decision Simulation</div>
        <h1 class="brand-title" id="hdr-title"></h1>
        <p class="brand-sub" id="hdr-sub"></p>
      </div>
      <div class="header-actions">
        <button type="button" class="btn-spec-toggle" id="btn-spec" aria-expanded="false" onclick="toggleSpec()">ID Spec</button>
        <button type="button" class="btn-job-aid" id="btn-aid" aria-expanded="false" onclick="openDrawer()">Quick-Reference Job Aid</button>
      </div>
    </div>
  </header>

  <section class="spec-strip" id="spec-strip" hidden>
    <div class="spec-inner" id="spec-content"></div>
  </section>

  <nav class="stepper-bar" aria-label="Simulation Scenarios">
    <div class="stepper-inner">
      <div class="stepper-tabs" id="stepper-tabs" role="tablist"></div>
      <div class="stepper-meta" id="stepper-meta"></div>
    </div>
  </nav>

  <main class="workspace">
    <section id="triage-view" class="triage-grid" aria-live="polite"></section>
    <section id="debrief-view" class="debrief-shell" hidden></section>
  </main>

  <div class="drawer-backdrop" id="drawer-backdrop" onclick="closeDrawer()"></div>
  <aside class="job-aid-drawer" id="job-aid-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" aria-hidden="true">
    <div class="drawer-header">
      <h2 id="drawer-title">On-Demand Quick-Reference</h2>
      <button type="button" class="btn-close" id="btn-close-drawer" aria-label="Close Job Aid" onclick="closeDrawer()">&times;</button>
    </div>
    <div class="drawer-body" id="drawer-body"></div>
  </aside>

  <script>
    const COURSE_DATA = ${safeJson};
    const scenarios = Array.isArray(COURSE_DATA.scenarios) ? COURSE_DATA.scenarios : [];

    let state = {
      currentView: 0,
      unlockedStep: 0,
      aidCount: 0,
      progress: scenarios.map(() => ({ firstChoiceIdx: null, lastChoiceIdx: null, tried: [], resolved: false }))
    };

    function esc(str) {
      const d = document.createElement('div');
      d.textContent = str == null ? '' : String(str);
      return d.innerHTML;
    }

    function init() {
      const meta = COURSE_DATA.meta || {};
      document.getElementById('hdr-title').textContent = meta.title || 'Workplace Simulation';
      document.getElementById('hdr-sub').textContent = meta.subtitle || '';
      if (meta.primaryTheory) {
        document.getElementById('hdr-kicker').textContent = meta.primaryTheory + (meta.secondaryTheory ? ' · ' + meta.secondaryTheory : '');
      }

      const los = Array.isArray(meta.learningObjectives) ? meta.learningObjectives : [];
      document.getElementById('spec-content').innerHTML =
        '<div><div class="spec-label">Theory Applied</div><div><strong>Primary:</strong> ' + esc(meta.primaryTheory || 'Action Mapping') +
        (meta.secondaryTheory ? '<br><strong>Secondary:</strong> ' + esc(meta.secondaryTheory) : '') +
        (meta.theoryRationale ? '<br><em>' + esc(meta.theoryRationale) + '</em>' : '') + '</div></div>' +
        '<div><div class="spec-label">Learning Objectives</div>' +
        (los.length ? '<ul class="spec-list">' + los.map(l => '<li>' + esc(l) + '</li>').join('') + '</ul>' : '<div>Aligned to workplace performance.</div>') + '</div>';

      const aid = Array.isArray(COURSE_DATA.jobAid) ? COURSE_DATA.jobAid : [];
      document.getElementById('drawer-body').innerHTML = aid.length
        ? aid.map(sec => '<div class="aid-section"><h3>' + esc(sec.heading) + '</h3><ul>' +
            (sec.bullets || []).map(b => '<li>' + esc(b) + '</li>').join('') + '</ul></div>').join('')
        : '<p>No job aid items provided.</p>';

      render();
    }

    function toggleSpec() {
      const el = document.getElementById('spec-strip');
      const btn = document.getElementById('btn-spec');
      el.hidden = !el.hidden;
      btn.setAttribute('aria-expanded', String(!el.hidden));
    }

    function openDrawer() {
      state.aidCount += 1;
      document.getElementById('job-aid-drawer').classList.add('is-open');
      document.getElementById('drawer-backdrop').classList.add('is-open');
      document.getElementById('job-aid-drawer').setAttribute('aria-hidden', 'false');
      document.getElementById('btn-aid').setAttribute('aria-expanded', 'true');
      document.getElementById('btn-close-drawer').focus();
    }

    function closeDrawer() {
      document.getElementById('job-aid-drawer').classList.remove('is-open');
      document.getElementById('drawer-backdrop').classList.remove('is-open');
      document.getElementById('job-aid-drawer').setAttribute('aria-hidden', 'true');
      document.getElementById('btn-aid').setAttribute('aria-expanded', 'false');
      document.getElementById('btn-aid').focus();
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.getElementById('job-aid-drawer').classList.contains('is-open')) {
        closeDrawer();
      }
    });

    function goTo(target) {
      if (target === 'debrief') {
        if (!state.progress.every(p => p.resolved)) return;
        state.currentView = 'debrief';
      } else if (target <= state.unlockedStep) {
        state.currentView = target;
      }
      render();
    }

    function pickChoice(scIdx, chIdx) {
      const st = state.progress[scIdx];
      const choice = scenarios[scIdx].choices[chIdx];
      if (!st || st.resolved || !choice) return;

      if (st.firstChoiceIdx === null) st.firstChoiceIdx = chIdx;
      st.lastChoiceIdx = chIdx;

      if (choice.isOptimal) {
        st.resolved = true;
        if (scIdx + 1 > state.unlockedStep && scIdx + 1 < scenarios.length) {
          state.unlockedStep = scIdx + 1;
        }
      } else if (!st.tried.includes(chIdx)) {
        st.tried.push(chIdx);
      }
      render();
    }

    function retry(scIdx) {
      state.progress[scIdx].lastChoiceIdx = null;
      render();
    }

    function nextStep(scIdx) {
      if (scIdx + 1 < scenarios.length) {
        state.unlockedStep = Math.max(state.unlockedStep, scIdx + 1);
        state.currentView = scIdx + 1;
      } else {
        state.currentView = 'debrief';
      }
      render();
    }

    function restart() {
      state = {
        currentView: 0,
        unlockedStep: 0,
        aidCount: 0,
        progress: scenarios.map(() => ({ firstChoiceIdx: null, lastChoiceIdx: null, tried: [], resolved: false }))
      };
      render();
    }

    function render() {
      const allDone = state.progress.every(p => p.resolved);
      const tabsHtml = scenarios.map((sc, i) => {
        const active = state.currentView === i;
        const done = state.progress[i].resolved;
        return '<button type="button" class="step-tab ' + (active ? 'is-active ' : '') + (done ? 'is-resolved' : '') + '" ' +
          (i > state.unlockedStep ? 'disabled' : '') + ' onclick="goTo(' + i + ')">' +
          '<span class="step-num">' + (done ? 'OK' : '0' + (i + 1)) + '</span><span>' + esc(sc.tabTitle || 'Scenario ' + (i + 1)) + '</span></button>';
      }).join('') +
      '<button type="button" class="step-tab ' + (state.currentView === 'debrief' ? 'is-active ' : '') + (allDone ? 'is-resolved' : '') + '" ' +
        (!allDone ? 'disabled' : '') + ' onclick="goTo(\\'debrief\\')">' +
        '<span class="step-num">END</span><span>Readiness Summary</span></button>';

      document.getElementById('stepper-tabs').innerHTML = tabsHtml;
      document.getElementById('stepper-meta').textContent = state.currentView === 'debrief'
        ? 'Debrief Complete'
        : 'Scenario ' + (state.currentView + 1) + ' of ' + scenarios.length;

      const triageEl = document.getElementById('triage-view');
      const debriefEl = document.getElementById('debrief-view');

      if (state.currentView === 'debrief') {
        triageEl.hidden = true;
        debriefEl.hidden = false;
        renderDebrief(debriefEl);
      } else {
        triageEl.hidden = false;
        debriefEl.hidden = true;
        renderScenario(triageEl, state.currentView);
      }
    }

    function renderScenario(container, idx) {
      const sc = scenarios[idx];
      const st = state.progress[idx];
      const activeChoice = st.lastChoiceIdx !== null ? sc.choices[st.lastChoiceIdx] : null;
      const locked = st.resolved || (activeChoice && !activeChoice.isOptimal);

      const choicesHtml = (sc.choices || []).map((c, ci) => {
        let cls = '';
        if (st.lastChoiceIdx === ci) cls = c.isOptimal ? 'is-contained' : 'is-fallout';
        else if (st.tried.includes(ci)) cls = 'is-tried';
        return '<button type="button" class="choice-btn ' + cls + '" ' + (locked ? 'disabled' : '') + ' onclick="pickChoice(' + idx + ',' + ci + ')">' +
          '<span class="choice-label">' + esc(c.label) + '</span>' +
          (c.detail ? '<span class="choice-detail">' + esc(c.detail) + '</span>' : '') +
        '</button>';
      }).join('');

      let feedbackHtml = '';
      if (activeChoice) {
        const outcome = activeChoice.isOptimal ? 'contained' : 'fallout';
        const tl = Array.isArray(activeChoice.timeline) ? activeChoice.timeline : [];
        feedbackHtml = '<div class="consequence-box" data-outcome="' + outcome + '" role="status">' +
          '<h3 class="consequence-title">' + esc(activeChoice.outcomeTitle || (activeChoice.isOptimal ? 'Incident Contained' : 'Workplace Fallout')) + '</h3>' +
          (tl.length ? '<ul class="timeline-list">' + tl.map(t => '<li>' + esc(t) + '</li>').join('') + '</ul>' : '') +
          (activeChoice.takeaway ? '<p class="takeaway-text"><strong>Operational Takeaway:</strong> ' + esc(activeChoice.takeaway) + '</p>' : '') +
          (activeChoice.isOptimal
            ? '<button type="button" class="btn-emerald" onclick="nextStep(' + idx + ')">' + (idx + 1 < scenarios.length ? 'Next Scenario &rarr;' : 'View Readiness Summary &rarr;') + '</button>'
            : '<button type="button" class="btn-primary" onclick="retry(' + idx + ')">Reassess &amp; Try Another Action</button>') +
        '</div>';
      }

      container.innerHTML =
        '<article class="comms-card">' +
          '<div class="comms-bar"><span class="comms-channel">' + esc(sc.channel || 'Workplace Message') + '</span></div>' +
          '<div class="comms-header">' +
            '<h2 class="comms-subject">' + esc(sc.subject || sc.tabTitle) + '</h2>' +
            (sc.sender ? '<div class="comms-sender"><strong>From:</strong> ' + esc(sc.sender) + '</div>' : '') +
          '</div>' +
          '<div class="comms-body">' + esc(sc.message) + '</div>' +
        '</article>' +
        '<aside class="decision-panel">' +
          '<div><div class="panel-kicker">Scenario 0' + (idx + 1) + ' · Decision</div><h2 class="panel-title">Choose Your Action</h2></div>' +
          '<p class="prompt-text">' + esc(sc.prompt || 'How do you respond?') + '</p>' +
          '<div class="choices-list">' + choicesHtml + '</div>' +
          feedbackHtml +
        '</aside>';
    }

    function renderDebrief(container) {
      let firstPass = 0;
      const habitCards = scenarios.map((sc, i) => {
        const st = state.progress[i];
        const optimalIdx = sc.choices.findIndex(c => c.isOptimal);
        const nailed = st.firstChoiceIdx === optimalIdx;
        if (nailed) firstPass += 1;
        const optChoice = sc.choices[optimalIdx] || {};
        return '<div class="habit-card" data-status="' + (nailed ? 'demonstrated' : 'reinforced') + '">' +
          '<div class="habit-head">' +
            '<h3 class="habit-name">' + esc(sc.habitName || sc.tabTitle) + '</h3>' +
            '<span class="habit-badge" data-status="' + (nailed ? 'demonstrated' : 'reinforced') + '">' +
              (nailed ? 'Demonstrated' : 'Needs Reinforcement') +
            '</span>' +
          '</div>' +
          '<p class="habit-desc">' + esc(optChoice.takeaway || 'Completed after reviewing consequences.') + '</p>' +
        '</div>';
      }).join('');

      const tier = firstPass === scenarios.length ? 'high' : 'reinforce';
      container.innerHTML =
        '<div class="debrief-banner" data-tier="' + tier + '">' +
          '<div class="panel-kicker">Final Debrief</div>' +
          '<h2>' + (tier === 'high' ? 'Readiness Confirmed' : 'Policy Reinforcement Recommended') + '</h2>' +
          '<p>' + (tier === 'high'
            ? 'You resolved every workplace scenario on your first decision without triggering fallout.'
            : 'You resolved every scenario after testing consequences. Review the habits marked for reinforcement below.') + '</p>' +
        '</div>' +
        '<div class="metrics-grid">' +
          '<div class="metric-card"><div class="panel-kicker">First-Pass Containment</div><div class="metric-val">' + firstPass + ' / ' + scenarios.length + '</div><div class="metric-sub">Resolved on initial triage</div></div>' +
          '<div class="metric-card"><div class="panel-kicker">Job Aid Lookups</div><div class="metric-val">' + state.aidCount + '</div><div class="metric-sub">On-demand reference checks</div></div>' +
        '</div>' +
        '<div class="habits-grid">' + habitCards + '</div>' +
        '<div><button type="button" class="btn-primary" onclick="restart()">Restart Simulation</button></div>';
    }

    window.addEventListener('DOMContentLoaded', init);
  <\/script>
</body>
</html>`;
}