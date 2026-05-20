import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  return { theme, toggleTheme };
}
