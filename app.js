/* ============================================================
   DepEd Orders S2026 — app.js
   Interactive behaviors: nav, matrix tabs, scroll animations,
   back-to-top, mobile menu
   ============================================================ */

'use strict';

// ────────────────────────────────────────────────
// 1. MOBILE NAVIGATION TOGGLE
// ────────────────────────────────────────────────
const menuToggle   = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

if (menuToggle && mobileDrawer) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close drawer when a link is clicked
  mobileDrawer.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// ────────────────────────────────────────────────
// 2. ACTIVE NAV LINK ON SCROLL (Intersection Observer)
// ────────────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
);

sections.forEach(section => navObserver.observe(section));


// ────────────────────────────────────────────────
// 3. SCROLL-TRIGGERED FADE-IN ANIMATIONS
// ────────────────────────────────────────────────
const animatables = [
  '.fact-card',
  '.order-summary-card',
  '.term-card',
  '.eot-card',
  '.def-card',
  '.stage-card',
  '.resource-card',
  '.assess-card',
  '.descriptor-card',
  '.ai-card',
  '.exit-card',
  '.track-card',
  '.core-subject',
  '.hours-card',
  '.tl-term',
  '.subsection',
];

animatables.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });
});

const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


// ────────────────────────────────────────────────
// 4. BACK-TO-TOP BUTTON
// ────────────────────────────────────────────────
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });
}


// ────────────────────────────────────────────────
// 5. LEARNING CONTINUITY MATRIX (DO 014)
// ────────────────────────────────────────────────

const matrixData = {
  typhoon: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'No typhoon or tropical cyclone' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Tropical Cyclone Wind Signal 1–2 (Kinder–JHS in-person classes suspended)' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Tropical Cyclone Wind Signal 3 — work, ALS, and in-person classes for all levels automatically suspended' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Tropical Cyclone Wind Signal 4' },
  ],
  rain: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'No heavy rainfall or flood' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Yellow warning (rainfall) / Alarm water level (flooding) — suspended at discretion of LCE' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Orange warning (rainfall) / Critical water level (flooding) — work, ALS, and in-person classes automatically suspended' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Red warning (rainfall) / Critical water level (flooding)' },
  ],
  quake: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'No earthquake or slight earthquake tremors' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Intensity IV and below — suspended at discretion of LCE' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Intensity V — suspended at discretion of LCE' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Intensity VI — work, ALS, and in-person classes automatically suspended' },
  ],
  power: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'No power outage' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Power outages during class hours — no suspension' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Power outage for 2–3 days — no automatic suspension of classes' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Power outage for 4 or more days — no automatic suspension of classes' },
  ],
  heat: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'No extreme heat' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Caution 27–32°C — no automatic suspension; LCE may still declare suspensions' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Extreme Caution 33–41°C — no automatic suspension; LCE may still declare suspensions' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Extreme Danger 42–52°C — no automatic suspension; LCE may still declare suspensions' },
  ],
  air: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'Good (green) 0–25 to Fair (yellow) 25.1–35.0' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Unhealthy (orange) 35.1–45 to Red 45.1–55 — no automatic suspension; LCE may declare' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Acutely Unhealthy (purple) PM2.5 55.1–90 — no automatic suspension; LCE may declare' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Emergency (maroon) PM2.5 >91 — no automatic suspension; LCE may declare' },
  ],
  human: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'No human-induced disasters' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Transportation strikes' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Bomb threats' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Armed conflict' },
  ],
  other: [
    { stage: 'HAYO',  chipClass: 'chip-hayo',  condition: 'No emergency or hazard' },
    { stage: 'HINAY', chipClass: 'chip-hinay', condition: 'Potential viral/bacterial outbreak; State of national emergency' },
    { stage: 'HINGA', chipClass: 'chip-hinga', condition: 'Actual viral/bacterial outbreak' },
    { stage: 'HINTO', chipClass: 'chip-hinto', condition: 'Famine; Drought; Pandemic' },
  ],
};

function renderMatrix(hazard) {
  const tbody = document.getElementById('matrixBody');
  if (!tbody) return;

  const rows = matrixData[hazard] || [];

  tbody.innerHTML = rows.map(row => `
    <tr>
      <td>
        <span class="stage-chip ${row.chipClass}">${row.stage}</span>
      </td>
      <td>${row.condition}</td>
    </tr>
  `).join('');
}

// Initial render
renderMatrix('typhoon');

// Tab switching
const matrixTabs = document.querySelectorAll('.matrix-tab');
matrixTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    matrixTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    renderMatrix(tab.dataset.hazard);
  });

  // Keyboard navigation for tabs
  tab.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tab.click();
    }
  });
});


// ────────────────────────────────────────────────
// 6. GRADE TABLE ROW HIGHLIGHT
// ────────────────────────────────────────────────
const gradeRows = document.querySelectorAll('.grade-row');
gradeRows.forEach(row => {
  row.addEventListener('click', () => {
    gradeRows.forEach(r => r.classList.remove('selected'));
    row.classList.toggle('selected');
  });

  row.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      row.click();
    }
  });
});


// ────────────────────────────────────────────────
// 7. HERO ENTRANCE ANIMATION
// ────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const heroBadge    = document.querySelector('.hero-badge');
  const heroHeadline = document.querySelector('.hero-headline');
  const heroSub      = document.querySelector('.hero-sub');
  const heroOrders   = document.querySelector('.hero-orders');
  const heroMeta     = document.querySelector('.hero-meta');

  const heroEls = [heroBadge, heroHeadline, heroSub, heroOrders, heroMeta].filter(Boolean);

  heroEls.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
});
