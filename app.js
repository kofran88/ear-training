// ── Data ─────────────────────────────────────────────────────

const MAJOR_SOLFEGE = [
  { sol:'Do',  deg:'1', semi:0,  char:'Stable, at rest. Home base. Every melody wants to return here.', colour:'green' },
  { sol:'Re',  deg:'2', semi:2,  char:'Active, questioning. Creates tension that wants to resolve to Do or Mi.', colour:'gold' },
  { sol:'Mi',  deg:'3', semi:4,  char:'Bright, settled. Defines the major quality. Warm and open.', colour:'green' },
  { sol:'Fa',  deg:'4', semi:5,  char:'Slightly darker. Has gravity downward back to Mi.', colour:'gold' },
  { sol:'Sol', deg:'5', semi:7,  char:'Strong, dominant. Second most stable note. Pure open quality.', colour:'green' },
  { sol:'La',  deg:'6', semi:9,  char:'Wistful, relative minor feeling. Melancholic but not tense.', colour:'blue' },
  { sol:'Ti',  deg:'7', semi:11, char:'Intensely unstable — the leading tone. Pulled magnetically to Do.', colour:'coral' },
  { sol:'Do',  deg:'8', semi:12, char:'Resolution. Octave arrival — same stability as root, higher register.', colour:'green' },
];

const MINOR_SOLFEGE = [
  { sol:'La',  deg:'1', semi:0,  char:'Home base in minor. Darker, more ambiguous feeling than major Do.', colour:'blue' },
  { sol:'Ti',  deg:'2', semi:2,  char:'Active tension, similar to Re in major.', colour:'gold' },
  { sol:'Do',  deg:'3', semi:3,  char:'The minor third — defines the minor colour. Heavier than major Mi.', colour:'green' },
  { sol:'Re',  deg:'4', semi:5,  char:'Subdominant minor — sombre, weighted.', colour:'gold' },
  { sol:'Mi',  deg:'5', semi:7,  char:'Dominant — same stability as major Sol.', colour:'green' },
  { sol:'Fa',  deg:'6', semi:8,  char:'The flat 6 — the most distinctly minor sound. Aching quality.', colour:'coral' },
  { sol:'Sol', deg:'7', semi:10, char:'The natural 7 (subtonic) — less tension than leading tone.', colour:'gold' },
  { sol:'La',  deg:'8', semi:12, char:'Octave return to home.', colour:'blue' },
];

const INTERVALS = [
  { semi:0,  abbr:'P1',  name:'Unison',       mnemonic:'Same note' },
  { semi:1,  abbr:'m2',  name:'Minor 2nd',    mnemonic:'Jaws theme' },
  { semi:2,  abbr:'M2',  name:'Major 2nd',    mnemonic:'Happy Birthday (1st→2nd note)' },
  { semi:3,  abbr:'m3',  name:'Minor 3rd',    mnemonic:'Smoke on the Water' },
  { semi:4,  abbr:'M3',  name:'Major 3rd',    mnemonic:'When the Saints Go Marching In' },
  { semi:5,  abbr:'P4',  name:'Perfect 4th',  mnemonic:'Here Comes the Bride' },
  { semi:6,  abbr:'TT',  name:'Tritone',      mnemonic:'The Simpsons theme' },
  { semi:7,  abbr:'P5',  name:'Perfect 5th',  mnemonic:'Twinkle Twinkle (1st→2nd note)' },
  { semi:8,  abbr:'m6',  name:'Minor 6th',    mnemonic:'The Entertainer' },
  { semi:9,  abbr:'M6',  name:'Major 6th',    mnemonic:'My Bonnie Lies Over the Ocean' },
  { semi:10, abbr:'m7',  name:'Minor 7th',    mnemonic:'Somewhere (West Side Story)' },
  { semi:11, abbr:'M7',  name:'Major 7th',    mnemonic:'Take On Me (intro riff)' },
  { semi:12, abbr:'P8',  name:'Octave',       mnemonic:'Somewhere Over the Rainbow' },
];

const CURRICULUM = [
  { week:1,  phase:'Phase 1', title:'Do, Sol, Mi — the stable trio', items:['Sing Do reliably from any starting pitch','Drill Do→Sol (P5) and Sol→Do','Add Mi — sing Do–Mi–Sol as a triad','Piano: play C major scale, sing each solfège name','Find Do in 3 songs you know well'] },
  { week:2,  phase:'Phase 1', title:'Adding Re and La', items:['Drill Re (M2 above Do) — sing Do→Re→Do','Introduce La — sing Do→Mi→Sol→La','Play a random note, sing up to Do','Piano: play broken triads, name each note','Sight-sing 4-bar melodies using Do Re Mi Sol'] },
  { week:3,  phase:'Phase 1', title:'Fa and Ti — tendency tones', items:['Fa has gravity downward — resolve it to Mi','Ti is the leading tone — resolve it up to Do','Drill the tritone: Fa→Ti and Ti→Fa','Full scale identification quiz, all 7 degrees','Transcription: sing back a 4-note melody by ear'] },
  { week:4,  phase:'Phase 1', title:'Review and consolidation', items:['Scale ID accuracy target: 70%+','Sight-sing 8-bar melodies from a method book','Analysis: pick a song, identify scale degrees of the melody','Piano: play any major scale, name degrees automatically'] },
  { week:5,  phase:'Phase 2', title:'Perfect 4th and 5th', items:['Drill ascending and descending P4','Drill P5 across all scale degrees','Melodic dictation: 4-note phrases using P4 and P5 leaps','Piano: play and name all P5s across the keyboard','Find P5 leaps in a piece you are learning'] },
  { week:6,  phase:'Phase 2', title:'Major and minor 3rds', items:['M3 vs m3 — the most common confused pair','Drill both melodically and harmonically','Sight-sing melodies with 3rd leaps','Analysis: find 3rd intervals in your current piano piece'] },
  { week:7,  phase:'Phase 2', title:'Tritone and 6ths', items:['The tritone: exactly half the octave — most distinctive interval','Drill M6 and m6','Compound exercise: identify interval in 5 seconds or less','Sight-sing a melody with at least one 6th leap'] },
  { week:8,  phase:'Phase 2', title:'Seconds and 7ths', items:['M2 vs m2 — stepwise motion, foundational for chromatic passages','M7 and m7 — wide leaps, occur in jazz and pop frequently','Full interval quiz: target 75%+ on all intervals','Piano: play and identify all intervals ascending from C'] },
  { week:9,  phase:'Phase 3', title:'Melodic dictation', items:['Dictate 8-bar melodies from recordings into notation','Focus on stepwise motion first, identify leaps by interval name','Sight-sing from real scores: beginner–intermediate etudes','Piano: sight-read a new piece, sing the melody as you play'] },
  { week:10, phase:'Phase 3', title:'Sight-singing applied', items:['Sight-sing daily from a method book','Record yourself: compare sung pitch to the correct pitch','Apply solfège labels to your current piano score','Song analysis: label scale degrees of a full song melody'] },
  { week:11, phase:'Phase 4', title:'Chord quality by ear', items:['Major vs minor triad — identify by sound, not sight','Diminished and augmented triads','Dominant 7th vs major 7th quality','Analysis: label chord roots and qualities in 8 bars','Piano: play chord progressions, sing root and quality aloud'] },
  { week:12, phase:'Phase 4', title:'Integration and song analysis', items:['Full analysis: label melody degrees + chord roots + qualities','Sight-sing a piece above your current level (stretch goal)','Self-assessment: which degrees and intervals are still uncertain?','Plan ongoing practice: keep daily 15-min sessions','Reward milestone: learn a new piece by ear, no sheet music'] },
];

const TIPS = [
  'Sing solfège syllables out loud — vocalising is more effective than silent identification.',
  'Use a drone: play Do on the piano and leave it ringing while you drill.',
  'Struggling with Ti? Sing Ti→Do ten times. Feel the resolution.',
  'When sight-reading, identify Do first. Everything else is relative to that anchor.',
  'Fa and Ti form the tritone — the most harmonically unstable pair. They define the key.',
  'To analyse a song: hum the melody, pause at key pitches, ask "does this feel like Do? Sol? Ti?"',
  '15 minutes daily beats 2 hours once a week — pitch memory consolidates during sleep.',
  'Record yourself sight-singing and compare to the correct pitch.',
];

// ── State ─────────────────────────────────────────────────────

let doMode = 'major';
let exMode = 'scale';
let currentTarget = null;
let sesCorrect = 0, sesWrong = 0;
let sessionLog = [];
let degreeCounts = {};
let exLocked = false;

function loadState() {
  try {
    const d = JSON.parse(localStorage.getItem('eartraining_v2') || '{}');
    sessionLog   = d.sessionLog   || [];
    degreeCounts = d.degreeCounts || {};
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem('eartraining_v2', JSON.stringify({ sessionLog, degreeCounts }));
  } catch(e) {}
}

// ── Audio ─────────────────────────────────────────────────────

let audioCtx = null;
function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playNote(freq, duration = 0.8, when = 0) {
  const ac = getCtx();
  const t = ac.currentTime + when;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.type = 'triangle';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.2, t + 0.015);
  gain.gain.setValueAtTime(0.2, t + duration * 0.65);
  gain.gain.linearRampToValueAtTime(0, t + duration);
  osc.start(t);
  osc.stop(t + duration + 0.05);
}

function semiToFreq(semi, base = 261.63) {
  return base * Math.pow(2, semi / 12);
}

function playScale(descending) {
  const semis = currentSolfege().map(s => s.semi);
  const order = descending ? [...semis].reverse() : semis;
  order.forEach((s, i) => setTimeout(() => playNote(semiToFreq(s), 0.45), i * 360));
}

// ── Nav ───────────────────────────────────────────────────────

function showPanel(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const btn = document.querySelector(`.nav-btn[data-panel="${id}"]`);
  if (btn) btn.classList.add('active');
  if (id === 'home')     updateHome();
  if (id === 'progress') updateProgress();
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showPanel(btn.dataset.panel));
});

// ── Helpers ───────────────────────────────────────────────────

function currentSolfege() {
  return doMode === 'major' ? MAJOR_SOLFEGE : MINOR_SOLFEGE;
}

function setDoMode(mode, btn) {
  doMode = mode;
  btn.closest('.toggle-row').querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildSolTable();
  buildSolChars();
  buildPiano();
}

function setExMode(mode, btn) {
  exMode = mode;
  btn.closest('.toggle-row').querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  resetExercise();
}

// ── Solfège table ─────────────────────────────────────────────

function buildSolTable() {
  const sol = currentSolfege();
  const tbl = document.getElementById('sol-table');
  tbl.innerHTML = `<thead><tr><th>Syllable</th><th>Degree</th><th>Semitones</th><th>Quality</th></tr></thead>`;
  const tbody = document.createElement('tbody');
  sol.forEach(s => {
    const tr = document.createElement('tr');
    const bc = { green:'badge-green', gold:'badge-gold', coral:'badge-coral', blue:'badge-blue' }[s.colour];
    tr.innerHTML = `<td><span class="sol-name">${s.sol}</span></td><td>${s.deg}</td><td>${s.semi}</td><td><span class="sol-badge ${bc}">${s.sol}</span></td>`;
    tr.addEventListener('click', () => playNote(semiToFreq(s.semi)));
    tbody.appendChild(tr);
  });
  tbl.appendChild(tbody);
}

function buildSolChars() {
  const sol = currentSolfege().slice(0, 7);
  const div = document.getElementById('sol-chars');
  div.innerHTML = '';
  sol.forEach(s => {
    const row = document.createElement('div');
    row.className = 'char-row';
    row.innerHTML = `<div class="char-sol">${s.sol}</div><div class="char-desc">${s.char}</div>`;
    row.addEventListener('click', () => playNote(semiToFreq(s.semi)));
    div.appendChild(row);
  });
}

// ── Piano ─────────────────────────────────────────────────────

const WHITE_SEMIS  = [0,2,4,5,7,9,11];
const BLACK_SEMIS  = [1,3,-1,6,8,10,-1];

function buildPiano() {
  const piano = document.getElementById('piano');
  piano.innerHTML = '';
  const wkeys = [];
  for (let oct = 0; oct < 2; oct++) {
    WHITE_SEMIS.forEach((ws, wi) => {
      const semi = ws + oct * 12;
      const sol  = currentSolfege().find(s => s.semi === semi % 12 || (semi === 12 && s.deg === '8'));
      const key  = document.createElement('div');
      key.className = 'wkey';
      key.dataset.semi = semi;
      if (wi > 0 || oct > 0) key.style.marginLeft = '1px';
      if (sol) {
        const lbl = document.createElement('span');
        lbl.className = 'sol-lbl';
        lbl.textContent = sol.sol;
        key.appendChild(lbl);
      }
      key.addEventListener('click', () => {
        playNote(semiToFreq(semi));
        key.classList.add('playing');
        setTimeout(() => key.classList.remove('playing'), 350);
      });
      piano.appendChild(key);
      wkeys.push(key);
    });
  }
  // Black keys
  requestAnimationFrame(() => {
    for (let oct = 0; oct < 2; oct++) {
      BLACK_SEMIS.forEach((bs, wi) => {
        if (bs < 0) return;
        const semi  = bs + oct * 12;
        const wkIdx = wi + oct * 7;
        const wkEl  = wkeys[wkIdx];
        if (!wkEl) return;
        const key = document.createElement('div');
        key.className = 'bkey';
        key.dataset.semi = semi;
        key.style.left = (wkEl.offsetLeft + 21) + 'px';
        key.addEventListener('click', e => {
          e.stopPropagation();
          playNote(semiToFreq(semi));
          key.classList.add('playing');
          setTimeout(() => key.classList.remove('playing'), 350);
        });
        piano.appendChild(key);
      });
    }
  });
}

// ── Intervals ─────────────────────────────────────────────────

function buildIntervalList() {
  const div = document.getElementById('interval-list');
  const sel = document.getElementById('int-select');
  div.innerHTML = '';
  sel.innerHTML = '';
  INTERVALS.forEach(iv => {
    const row = document.createElement('div');
    row.className = 'int-row';
    row.innerHTML = `<div class="int-semi">${iv.semi}</div><div class="int-name"><strong>${iv.abbr}</strong><br><span class="int-abbr">${iv.name}</span></div><div class="int-mnemonic">${iv.mnemonic}</div>`;
    row.addEventListener('click', () => { playNote(semiToFreq(0)); playNote(semiToFreq(iv.semi), 0.7, 0.05); });
    div.appendChild(row);
    const opt = document.createElement('option');
    opt.value = iv.semi;
    opt.textContent = `${iv.abbr} — ${iv.name}`;
    sel.appendChild(opt);
  });
}

function playInterval(melodic) {
  const semi = parseInt(document.getElementById('int-select').value);
  playNote(semiToFreq(0), melodic ? 0.6 : 0.9);
  playNote(semiToFreq(semi), 0.7, melodic ? 0.65 : 0.03);
}

// ── Curriculum ────────────────────────────────────────────────

function buildCurriculum() {
  const div = document.getElementById('curriculum-weeks');
  div.innerHTML = '';
  const phaseColour = { 'Phase 1':'badge-green', 'Phase 2':'badge-gold', 'Phase 3':'badge-coral', 'Phase 4':'badge-blue' };
  CURRICULUM.forEach(w => {
    const card = document.createElement('div');
    card.className = 'week-card';
    const head = document.createElement('div');
    head.className = 'week-head';
    head.innerHTML = `<span><span class="sol-badge ${phaseColour[w.phase]}" style="margin-right:6px">${w.phase}</span>Wk ${w.week}: ${w.title}</span><span>▾</span>`;
    const body = document.createElement('div');
    body.className = 'week-body';
    body.innerHTML = `<ul>${w.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    head.addEventListener('click', () => {
      body.classList.toggle('open');
      head.querySelector('span:last-child').textContent = body.classList.contains('open') ? '▴' : '▾';
    });
    card.appendChild(head);
    card.appendChild(body);
    div.appendChild(card);
  });
}

// ── Exercise ──────────────────────────────────────────────────

function resetExercise() {
  exLocked = false;
  currentTarget = null;
  document.getElementById('ex-feedback').className = 'feedback';
  document.querySelectorAll('.ex-btn').forEach(b => b.className = 'ex-btn');
  buildExChoices();
  const msgs = {
    scale:    'Press Play to hear a tone, then identify its solfège degree in C major.',
    interval: 'Press Play to hear two notes, then identify the interval between them.',
    melody:   'Press Play to hear a 3-note fragment, then identify each degree in order.',
  };
  document.getElementById('ex-instructions').textContent = msgs[exMode];
}

function buildExChoices() {
  const sol = doMode === 'major' ? MAJOR_SOLFEGE.slice(0,7) : MINOR_SOLFEGE.slice(0,7);
  const grid = document.getElementById('ex-choices');
  grid.innerHTML = '';
  if (exMode === 'interval') {
    ['m2','M2','m3','M3','P4','TT','P5','m6','M6','m7','M7','P8'].forEach(abbr => {
      const btn = document.createElement('button');
      btn.className = 'ex-btn';
      btn.textContent = abbr;
      btn.addEventListener('click', () => checkAnswer(abbr, btn));
      grid.appendChild(btn);
    });
  } else {
    sol.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'ex-btn';
      btn.textContent = s.sol;
      btn.addEventListener('click', () => {
        if (exMode === 'melody') checkMelody(s.sol, btn);
        else checkAnswer(s.sol, btn);
      });
      grid.appendChild(btn);
    });
  }
}

function playExercise() {
  exLocked = false;
  currentTarget = null;
  document.getElementById('ex-feedback').className = 'feedback';
  document.querySelectorAll('.ex-btn').forEach(b => b.className = 'ex-btn');
  const sol = doMode === 'major' ? MAJOR_SOLFEGE.slice(0,7) : MINOR_SOLFEGE.slice(0,7);

  if (exMode === 'scale') {
    const pick = sol[Math.floor(Math.random() * sol.length)];
    currentTarget = { type:'scale', answer:pick.sol, semi:pick.semi };
    playNote(semiToFreq(0), 0.35, 0);
    setTimeout(() => playNote(semiToFreq(pick.semi)), 500);

  } else if (exMode === 'interval') {
    const iv = INTERVALS[Math.floor(Math.random() * INTERVALS.length)];
    currentTarget = { type:'interval', answer:iv.abbr, semi:iv.semi };
    playNote(semiToFreq(0));
    playNote(semiToFreq(iv.semi), 0.7, 0.04);

  } else {
    const picks = [0,1,2].map(() => sol[Math.floor(Math.random() * sol.length)]);
    currentTarget = { type:'melody', answers:picks.map(p=>p.sol), semis:picks.map(p=>p.semi), cursor:0 };
    picks.forEach((p,i) => playNote(semiToFreq(p.semi), 0.45, i*0.52));
  }
}

function playReference() {
  playNote(semiToFreq(0), 0.6);
}

function checkAnswer(answer, btn) {
  if (!currentTarget || exLocked) return;
  exLocked = true;
  const correct = answer === currentTarget.answer;
  btn.className = 'ex-btn ' + (correct ? 'correct' : 'wrong');
  if (!correct) {
    document.querySelectorAll('.ex-btn').forEach(b => {
      if (b.textContent === currentTarget.answer) b.className = 'ex-btn correct';
    });
  }
  showFeedback(correct, correct ? `Correct! That's ${currentTarget.answer}.` : `Not quite — that was ${currentTarget.answer}.`);
  if (correct) { sesCorrect++; degreeCounts[currentTarget.answer] = (degreeCounts[currentTarget.answer]||0)+1; }
  else sesWrong++;
  updateSessionStats();
}

function checkMelody(answer, btn) {
  if (!currentTarget || currentTarget.type !== 'melody' || exLocked) return;
  const expected = currentTarget.answers[currentTarget.cursor];
  if (answer === expected) {
    btn.className = 'ex-btn correct';
    currentTarget.cursor++;
    if (currentTarget.cursor >= currentTarget.answers.length) {
      showFeedback(true, `All correct! ${currentTarget.answers.join(' → ')}`);
      sesCorrect++;
      updateSessionStats();
      exLocked = true;
    }
  } else {
    btn.className = 'ex-btn wrong';
    showFeedback(false, `Not quite. Sequence was: ${currentTarget.answers.join(' → ')}`);
    sesWrong++;
    updateSessionStats();
    exLocked = true;
  }
}

function showFeedback(good, msg) {
  const el = document.getElementById('ex-feedback');
  el.textContent = msg;
  el.className = `feedback show ${good ? 'good' : 'bad'}`;
}

function nextExercise() { playExercise(); }

function updateSessionStats() {
  document.getElementById('ses-correct').textContent = sesCorrect;
  document.getElementById('ses-wrong').textContent   = sesWrong;
  const total = sesCorrect + sesWrong;
  document.getElementById('ses-acc').textContent = total ? Math.round(sesCorrect/total*100)+'%' : '—';
  document.getElementById('ex-score').textContent = sesCorrect;
  document.getElementById('ex-total').textContent = total;
}

function logSession() {
  const total = sesCorrect + sesWrong;
  if (total === 0) { alert('Complete at least one exercise first!'); return; }
  const acc = Math.round(sesCorrect/total*100);
  sessionLog.unshift({ date:new Date().toLocaleDateString(), correct:sesCorrect, wrong:sesWrong, acc });
  if (sessionLog.length > 60) sessionLog.pop();
  saveState();
  sesCorrect = 0; sesWrong = 0; exLocked = false; currentTarget = null;
  document.getElementById('ex-feedback').className = 'feedback';
  document.querySelectorAll('.ex-btn').forEach(b => b.className = 'ex-btn');
  updateSessionStats();
  updateHome();
  alert('Session logged!');
}

// ── Home ──────────────────────────────────────────────────────

function updateHome() {
  document.getElementById('h-sessions').textContent = sessionLog.length;
  const streak = sessionLog.length;
  document.getElementById('h-streak').textContent = streak + 'd';
  document.getElementById('header-streak').textContent = streak + ' day streak';
  if (sessionLog.length) {
    const avg = Math.round(sessionLog.reduce((a,s)=>a+s.acc,0)/sessionLog.length);
    document.getElementById('h-accuracy').textContent = avg+'%';
  }
  const ph1 = Math.min(100, sessionLog.length*8);
  const ph2 = Math.max(0, ph1-80);
  const ph3 = Math.max(0, ph1-90);
  const ph4 = Math.max(0, ph1-95);
  [['ph1',ph1,''],['ph2',ph2,''],['ph3',ph3,''],['ph4',ph4,'']].forEach(([id,v]) => {
    document.getElementById(`${id}-bar`).style.width = v+'%';
    document.getElementById(`${id}-pct`).textContent = v+'%';
  });
  const week = Math.min(12, Math.floor(sessionLog.length/2)+1);
  const cur  = CURRICULUM[week-1];
  const phColour = { 'Phase 1':'badge-green','Phase 2':'badge-gold','Phase 3':'badge-coral','Phase 4':'badge-blue' };
  document.getElementById('todays-focus').innerHTML = `<span class="sol-badge ${phColour[cur.phase]}" style="margin-bottom:6px;display:inline-block">${cur.phase}</span><div style="font-size:14px;font-weight:500;margin-bottom:4px">Week ${week}: ${cur.title}</div><div style="font-size:13px;color:var(--text2)">${cur.items[0]}</div>`;
  document.getElementById('home-tip').textContent = TIPS[Math.floor(Math.random()*TIPS.length)];
}

// ── Progress ──────────────────────────────────────────────────

function updateProgress() {
  document.getElementById('p-sessions').textContent = sessionLog.length;
  if (sessionLog.length) {
    const avg = Math.round(sessionLog.reduce((a,s)=>a+s.acc,0)/sessionLog.length);
    document.getElementById('p-avg').textContent = avg+'%';
  }
  const dp = document.getElementById('degree-progress');
  dp.innerHTML = '';
  const sol = MAJOR_SOLFEGE.slice(0,7);
  const maxC = Math.max(1, ...sol.map(s=>degreeCounts[s.sol]||0));
  const cols = { green:'green', gold:'gold', blue:'blue', coral:'coral' };
  sol.forEach(s => {
    const count = degreeCounts[s.sol]||0;
    const pct = Math.round(count/maxC*100);
    dp.innerHTML += `<div class="prog-row"><div class="prog-label"><span>${s.sol} (deg ${s.deg})</span><span>${count} correct</span></div><div class="prog-track"><div class="prog-fill ${cols[s.colour]||'green'}" style="width:${pct}%"></div></div></div>`;
  });
  const logDiv = document.getElementById('session-log');
  if (!sessionLog.length) {
    logDiv.innerHTML = '<p class="hint">No sessions yet.</p>';
  } else {
    logDiv.innerHTML = sessionLog.slice(0,20).map(s => {
      const cls = s.acc>=80?'hi':s.acc>=60?'mid':'lo';
      return `<div class="log-row"><span>${s.date}</span><span>${s.correct}/${s.correct+s.wrong}</span><span class="log-score ${cls}">${s.acc}%</span></div>`;
    }).join('');
  }
}

function clearLog() {
  if (!confirm('Clear all progress data?')) return;
  sessionLog=[]; degreeCounts={};
  saveState(); updateHome(); updateProgress();
}

// ── Init ──────────────────────────────────────────────────────

loadState();
buildSolTable();
buildSolChars();
buildIntervalList();
buildCurriculum();
buildExChoices();
updateHome();
updateProgress();
setTimeout(buildPiano, 150);

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
