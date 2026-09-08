const root = document.documentElement;
const body = document.body;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const safeStorage = {
  get(key, area = localStorage) {
    try { return area.getItem(key); } catch { return null; }
  },
  set(key, value, area = localStorage) {
    try { area.setItem(key, value); } catch { /* Storage can be blocked. */ }
  },
};
const i18n = window.portfolioI18n;

// Theme
const themeToggle = document.querySelector('[data-theme-toggle]');
const savedTheme = safeStorage.get('portfolio-theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  root.dataset.theme = 'dark';
}

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  safeStorage.set('portfolio-theme', nextTheme);
});

// Short loading sequence, shown once per browser session.
const preloader = document.querySelector('[data-preloader]');
const preloaderStep = document.querySelector('[data-preloader-step]');
const preloaderCount = document.querySelector('[data-preloader-count]');
const preloaderTrack = document.querySelector('[data-preloader-track]');
let activePreloaderStage = 'hypothesis';

const updatePreloaderLanguage = () => {
  if (preloaderStep) preloaderStep.textContent = i18n?.translate(activePreloaderStage) || activePreloaderStage;
};
updatePreloaderLanguage();

function hidePreloaderImmediately() {
  preloader?.classList.add('is-hidden');
  body.classList.remove('is-loading');
}

if (!preloader || reduceMotion || safeStorage.get('portfolio-intro', sessionStorage)) {
  hidePreloaderImmediately();
} else {
  body.classList.add('is-loading');
  const steps = [
    ['hypothesis', 18],
    ['data', 46],
    ['model', 74],
    ['insight', 100],
  ];
  let stepIndex = 0;

  const advance = () => {
    const [stage, value] = steps[stepIndex];
    activePreloaderStage = stage;
    updatePreloaderLanguage();
    preloaderCount.textContent = String(value).padStart(2, '0');
    preloaderTrack.style.transform = `scaleX(${value / 100})`;
    stepIndex += 1;

    if (stepIndex < steps.length) {
      window.setTimeout(advance, 300);
      return;
    }

    safeStorage.set('portfolio-intro', '1', sessionStorage);
    window.setTimeout(() => {
      preloader.classList.add('is-leaving');
      body.classList.remove('is-loading');
      window.setTimeout(() => preloader.classList.add('is-hidden'), 800);
    }, 360);
  };

  window.setTimeout(advance, 120);
}

// Mobile navigation
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

const updateNavToggleLabel = () => {
  if (!navToggle) return;
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-label', i18n?.translate(isOpen ? 'closeMenu' : 'openMenu') || (isOpen ? 'Close menu' : 'Open menu'));
};

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  updateNavToggleLabel();
  nav?.classList.toggle('open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    updateNavToggleLabel();
  });
});

// Scroll state and progress.
const progressBar = document.querySelector('[data-scroll-progress]');
const updateScrollState = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  header?.classList.toggle('scrolled', window.scrollY > 16);
  if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
};

updateScrollState();
window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState, { passive: true });

// Reveal elements and count numerical results when they enter the viewport.
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

function renderCounter(element, value) {
  const decimals = Number(element.dataset.decimals || 0);
  const prefix = element.dataset.prefix || '';
  const suffix = element.dataset.suffix || '';
  const decimalValue = value.toFixed(decimals);
  const number = i18n?.language === 'pt-BR' ? decimalValue.replace('.', ',') : decimalValue;
  element.innerHTML = `${prefix}${number}<span>${suffix}</span>`;
}

function animateCounter(element) {
  const target = Number(element.dataset.counter);

  if (reduceMotion) {
    renderCounter(element, target);
    return;
  }

  const startedAt = performance.now();
  const duration = 1100;
  const frame = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    renderCounter(element, target * eased);
    if (progress < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

const counters = document.querySelectorAll('[data-counter]');
counters.forEach((counter) => renderCounter(counter, Number(counter.dataset.counter)));
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.65 });
  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  counters.forEach(animateCounter);
}

window.addEventListener('portfolio:languagechange', () => {
  updatePreloaderLanguage();
  updateNavToggleLabel();
  counters.forEach((counter) => renderCounter(counter, Number(counter.dataset.counter)));
});

// Keep the current section visible in the navigation.
const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  observedSections.forEach((section) => sectionObserver.observe(section));
}

// Project filters.
const filterButtons = document.querySelectorAll('[data-filter]');
const projects = [...document.querySelectorAll('[data-project]')];
const projectCount = document.querySelector('[data-project-count]');
let activeFilter = 'all';

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    let visible = 0;
    projects.forEach((project) => {
      const categories = project.dataset.category.split(' ');
      const matches = activeFilter === 'all' || categories.includes(activeFilter);

      if (matches) {
        visible += 1;
        project.hidden = false;
        if (!reduceMotion) {
          project.animate(
            [
              { opacity: 0, transform: 'translateY(10px) scale(.985)' },
              { opacity: 1, transform: 'translateY(0) scale(1)' },
            ],
            { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' },
          );
        }
      } else {
        project.hidden = true;
      }
    });

    if (projectCount) projectCount.textContent = visible;
  });
});

// Pointer spotlight on project cards.
document.querySelectorAll('.interactive-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (!finePointer || reduceMotion) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
  });
});

// Subtle 3D tilt on the data pipeline.
document.querySelectorAll('[data-tilt]').forEach((element) => {
  element.addEventListener('pointermove', (event) => {
    if (!finePointer || reduceMotion) return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    element.style.setProperty('--tilt-x', `${(-y * 5).toFixed(2)}deg`);
    element.style.setProperty('--tilt-y', `${(x * 6).toFixed(2)}deg`);
  });
  element.addEventListener('pointerleave', () => {
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  });
});

// Magnetic response on primary controls.
if (finePointer && !reduceMotion) {
  document.querySelectorAll('.button, .theme-toggle').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const bounds = element.getBoundingClientRect();
      const x = event.clientX - bounds.left - bounds.width / 2;
      const y = event.clientY - bounds.top - bounds.height / 2;
      element.style.transform = `translate(${(x * 0.12).toFixed(1)}px, ${(y * 0.16).toFixed(1)}px)`;
    });
    element.addEventListener('pointerleave', () => { element.style.transform = ''; });
  });
}

// Data reticle: an original cursor based on graph nodes and coordinate axes.
const dataCursor = document.querySelector('[data-cursor]');
if (finePointer && !reduceMotion && dataCursor) {
  body.classList.add('has-custom-cursor');

  window.addEventListener('pointermove', (event) => {
    dataCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    dataCursor.classList.add('is-visible');
    const interactive = event.target.closest('a, button, [data-tilt], .interactive-card');
    dataCursor.classList.toggle('is-interactive', Boolean(interactive));
  });

  document.documentElement.addEventListener('mouseleave', () => {
    dataCursor.classList.remove('is-visible');
  });
  window.addEventListener('pointerdown', () => dataCursor.classList.add('is-pressed'));
  window.addEventListener('pointerup', () => dataCursor.classList.remove('is-pressed'));
  window.addEventListener('blur', () => dataCursor.classList.remove('is-visible', 'is-pressed'));
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
