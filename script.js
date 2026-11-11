const root = document.documentElement;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Theme ---------- */
const themeButton = document.querySelector('#theme');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const THEME_COLORS = { light: '#f5f5ef', dark: '#171b18' };
const systemDark = matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  themeMeta.setAttribute('content', THEME_COLORS[theme]);
}

function savedTheme() {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
}

applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');

themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Follow the OS theme until the visitor picks one explicitly
systemDark.addEventListener('change', event => {
  if (!savedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

/* ---------- Scroll reveal ---------- */
if ('IntersectionObserver' in window && !reducedMotion) {
  root.classList.add('js-motion');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ---------- Highlight the nav link for the section in view ---------- */
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => navObserver.observe(section));
}

/* ---------- Copy email ---------- */
const copyButton = document.querySelector('#copy');
const copyLabel = copyButton.querySelector('.copy-label');
const copyStatus = document.querySelector('#copy-status');
const email = copyButton.dataset.email;
let copyTimer;

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyLabel.textContent = 'Copied ✓';
    copyButton.classList.add('copied');
    copyStatus.textContent = 'Email copied. Let’s talk!';
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      copyLabel.textContent = 'Copy email';
      copyButton.classList.remove('copied');
    }, 2200);
  } catch (e) {
    copyStatus.textContent = `Email: ${email} — select the address above to get in touch.`;
  }
});

/* ---------- Footer year ---------- */
document.querySelector('#year').textContent = new Date().getFullYear();
