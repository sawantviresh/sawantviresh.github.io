const projects = {
  toing: {
    accent:'#087a43',
    kicker:'01 / PRODUCT · 2026 · INDIVIDUAL',
    title:'Toing by Swiggy',
    subtitle:'Product Teardown',
    thesis:"Why build a second app instead of a budget tab inside Swiggy?",
    approach:['Strategic rationale','Competitive landscape','Personas','User journey','Product investigation','Business impact','Prioritisation','Roadmap'],
    insights:[
      ['The separate-app strategy creates acquisition friction.','The teardown compares the benefit of an independent low-price brand with the convenience, trust and shared infrastructure available inside the core Swiggy app.'],
      ['The low-price promise breaks at checkout.','The analysis flags a ₹25 delivery fee on a ₹60 item, arguing that the effective surcharge can undermine the budget value proposition.'],
      ['Reliability can matter more than acquisition.','The teardown connects onboarding, delivery reliability and checkout transparency to conversion and retention rather than treating them as isolated UX issues.']
    ],
    recommendation:'Fix the core value proposition before adding growth features.',
    priority:['Checkout-fee transparency','Swiggy-login friction','Delivery reliability','Frequency-building use cases'],
    roadmap:['90 Days — Protect the promise','6 Months — Build frequency','12 Months — Re-evaluate the separate-app thesis using retention data'],
    visuals:['assets/toing-2.jpg','assets/toing-12.jpg','assets/toing-15.jpg','assets/toing-16.jpg'],
    decks:[['View Full Toing Presentation','presentations/toing-product-teardown.pdf']],
    note:'The original 17-page deck is provided as the detailed deep dive.'
  },
  alok: {
    accent:'#163e78',
    kicker:'02 / STRATEGY · 2026 · INDIVIDUAL',
    title:'Alok Industries',
    subtitle:'Profitability Diagnosis & Strategic Turnaround',
    thesis:'How can Alok Industries move from structural losses toward a more sustainable and higher-value business model?',
    approach:['5C','VRIO','Porter’s Five Forces','Profitability diagnosis','Strategic turnaround'],
    insights:[
      ['Scale was not translating into competitive advantage.','The strategic diagnosis found that integrated scale was not being fully converted into value in a difficult, low-margin environment.'],
      ['The profitability challenge was structural.','The analysis links the pressure to legacy debt, margin compression, operational disruption and external trade / macro headwinds.'],
      ['The turnaround requires sequencing.','The recommended logic starts with balance-sheet repair before moving the business up the value chain and improving structural efficiency.']
    ],
    recommendation:'Repair the balance sheet first, then move toward higher-value finished garments and structurally more efficient operations.',
    priority:['Balance-sheet deleveraging','Value-chain pivot','Structural efficiency'],
    roadmap:['0–12 months — Balance-sheet deleveraging','12–24 months — Value-chain pivot','24+ months — Structural efficiency'],
    visuals:['assets/alok-diagnosis-2.jpg','assets/alok-diagnosis-3.jpg','assets/alok-turnaround-4.jpg'],
    decks:[
      ['View Alok Strategic Analysis','presentations/alok-task2.pdf'],
      ['View Alok Turnaround Roadmap','presentations/alok-task1.pdf']
    ],
    note:'Task 1 and Task 2 are intentionally presented as one end-to-end case.'
  },
  twt: {
    accent:'#76263e',
    kicker:'03 / STRATEGY · 2026 · INDIVIDUAL',
    title:'The Whole Truth Foods',
    subtitle:'U.S. Market Entry Strategy',
    thesis:'Should The Whole Truth enter the U.S. market, and what should its entry strategy look like?',
    approach:['Market attractiveness','PESTEL','Market sizing','Entry strategy','Phased execution'],
    insights:[
      ['The category presents a meaningful opportunity.','The analysis identifies an attractive U.S. protein-bar category and a premium clean-label segment that can support a focused entry.'],
      ['The strategic question is where to play and how to enter.','Rather than treating the market as a binary go / no-go, the case narrows the target segment and entry route.'],
      ['A phased digital-first strategy can reduce entry risk.','The recommendation uses a digital-first, diaspora-led beachhead before progressively broadening distribution.']
    ],
    recommendation:'Enter the U.S. through premium clean-label protein bars, using a digital-first beachhead and progressively expanding distribution.',
    priority:['Define the premium clean-label beachhead','Validate via digital-first channels','Expand into broader retail as traction builds'],
    roadmap:['Phase 1 — Digital-first / diaspora-led','Phase 2 — Natural / specialty validation','Phase 3 — Premium mainstream expansion'],
    visuals:['assets/twt-exec-2.jpg','assets/twt-pestel-3.jpg','assets/twt-sizing-4.jpg'],
    decks:[['View Full TWT Presentation','presentations/whole-truth-us-entry.pdf']],
    note:'The portfolio page surfaces the decision logic; the full six-page deck remains the deep dive.'
  },
  mondelez: {
    accent:'#5a3c86',
    kicker:'04 / STRATEGY · 2026 · TEAM',
    title:'Mondelēz India',
    subtitle:'Finding the Growth White Space in Biscuits',
    thesis:'How can Mondelēz build a stronger growth position in Indian biscuits and snacking?',
    approach:['Portfolio diagnosis','BCG Matrix','Ansoff Matrix','Porter','Integrated strategy'],
    insights:[
      ['Chocolate is the cash engine.','The analysis positions Dairy Milk and 5Star as the mature, cash-generating base of the portfolio.'],
      ['Biscuits represent the strategic growth gap.','The case highlights Mondelēz’s lower biscuit share in a faster-growing category relative to established competitors.'],
      ['Premium snacking is the strategic whitespace.','Rather than compete head-on on mass-market volume, the recommendation leans into differentiation and premium focus.']
    ],
    recommendation:'Mondelēz should pursue a differentiation-focused strategy in Indian biscuits and build a premium snacking ecosystem rather than compete head-on on volume.',
    priority:['Protect the chocolate cash engine','Invest behind growing adjacencies','Build a premium snacking ecosystem'],
    roadmap:['Market penetration — strengthen Oreo / Chocobakes','Product + market development — premium adjacencies','Differentiation focus — build the premium snacking position'],
    visuals:['assets/mondelez-5.jpg','assets/mondelez-6.jpg'],
    decks:[['View Full Mondelēz Presentation','presentations/mondelez-india-strategy.pdf']],
    note:'Team project: Yash & Viresh.'
  },
  snabbit: {
    accent:'#5c2c48',
    kicker:'05 / BUSINESS + PRODUCT · 2026 · INDIVIDUAL',
    title:'Snabbit',
    subtitle:'Business & Product Analysis',
    thesis:'Can a 10-minute home-help proposition become a scalable and economically sustainable business?',
    approach:['Category opportunity','Business model','Competitive landscape','Operational moat','SWOT','Economics','Strategic roadmap'],
    insights:[
      ['Speed is the core proposition.','The 10-minute promise reframes household help from a planned service into an on-demand utility.'],
      ['Operational density is part of the moat.','The analysis highlights hyperlocal density, workforce control and operational coordination as core advantages.'],
      ['Growth does not automatically mean healthy economics.','The profitability section separates growth traction from the harder question of utilisation, pricing and sustainable unit economics.']
    ],
    recommendation:'Use operational density as the foundation for higher-value service expansion while improving unit economics.',
    priority:['Increase local density and utilisation','Improve price / worker economics','Expand into higher-value service verticals'],
    roadmap:['Density — reduce travel and idle time','Economics — strengthen contribution margins','Expansion — unlock higher-margin verticals'],
    visuals:['assets/snabbit-1.jpg','assets/snabbit-6.jpg','assets/snabbit-7.jpg','assets/snabbit-8.jpg'],
    decks:[['View Full Snabbit Analysis','presentations/snabbit-analysis.pdf']],
    note:'Presented as a broader business + product analysis rather than a narrow UX teardown.'
  }
};

const modal = document.getElementById('case-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.modal-close');

function caseTemplate(p){
  const bullets = p.priority.map(x=>`<li>${x}</li>`).join('');
  const roadmap = p.roadmap.map(x=>`<li>${x}</li>`).join('');
  const insights = p.insights.map((i,idx)=>`<article class="insight"><div class="num">0${idx+1}</div><h5>${i[0]}</h5><p>${i[1]}</p></article>`).join('');
  const visuals = p.visuals.map((src,idx)=>`<img src="${src}" alt="Selected visual ${idx+1} from ${p.title}" loading="lazy">`).join('');
  const decks = p.decks.map(d=>`<a class="deck-btn" href="${d[1]}" target="_blank" rel="noreferrer">${d[0]} ↗</a>`).join('');
  return `<div class="case-wrap" style="--case-accent:${p.accent}">
      <div class="case-kicker">${p.kicker}</div>
      <h2 id="modal-title" class="case-title">${p.title}</h2>
      <p class="case-subtitle">${p.subtitle}</p>
      <div class="case-thesis">${p.thesis}</div>
      <div class="case-meta"><span>2026</span><span>${p.kicker.includes('TEAM')?'Team — Yash & Viresh':'Individual Analysis'}</span><span>Source: uploaded project deck(s)</span></div>
      <section class="case-section"><h4>The approach</h4><div class="approach-flow">${p.approach.map((x,i)=>`<span>${x}</span>${i<p.approach.length-1?'<b>→</b>':''}`).join('')}</div></section>
      <section class="case-section"><h4>Key insights</h4><div class="insights">${insights}</div></section>
      <section class="case-section"><h4>What it means</h4><div class="recommendation"><strong>Recommendation</strong><p>${p.recommendation}</p></div></section>
      <section class="case-section"><h4>Priority / roadmap</h4><div class="approach-flow">${p.priority.map((x,i)=>`<span>${i+1}. ${x}</span>`).join('')}</div><ul style="color:#59626e;padding-left:20px">${roadmap}</ul></section>
      <section class="case-section"><h4>Selected visuals</h4><div class="visual-grid">${visuals}</div></section>
      <section class="case-section"><h4>Full presentation</h4><div class="deck-box"><div><h5>Want the detailed deck?</h5><p>${p.note}</p></div><div class="deck-actions">${decks}</div></div></section>
    </div>`;
}

function openCase(key){
  const p = projects[key];
  if(!p) return;
  modalContent.innerHTML = caseTemplate(p);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-panel').scrollTop = 0;
  closeBtn.focus();
}
function closeCase(){
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('click',e=>{
    if(e.target.closest('a')) return;
    openCase(card.dataset.project);
  });
  const btn = card.querySelector('.project-open');
  if(btn) btn.addEventListener('click',e=>{e.stopPropagation();openCase(card.dataset.project);});
});
closeBtn.addEventListener('click',closeCase);
modal.querySelector('.modal-backdrop').addEventListener('click',closeCase);
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeCase(); });

const menu = document.querySelector('.nav-menu');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click',()=>{
  const isOpen = navLinks.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(isOpen));
});
navLinks.addEventListener('click',()=>{navLinks.classList.remove('open');menu.setAttribute('aria-expanded','false');});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
