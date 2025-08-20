import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const start = document.documentElement.dataset.theme || 'light';
  const [theme, setTheme] = useState(start);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const next = theme === 'light' ? 'dark' : 'light';
  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <button
      className="button ghost theme-toggle"
      onClick={() => setTheme(next)}
      aria-pressed={theme === 'dark'}
      aria-label={label}
      title={label}
    >
      <span className="icon" aria-hidden="true">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <span className="label">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
