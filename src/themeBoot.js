// Decide initial theme: saved -> light (ignore system on first load)
const saved = localStorage.getItem('theme');
const initialTheme = saved || 'light';
document.documentElement.dataset.theme = initialTheme;

// If the user hasn't chosen yet, optionally follow system changes live.
// Delete this block if you want to stay light until the user toggles.
if (!saved && window.matchMedia) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener?.('change', (e) => {
    document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
  });
}
