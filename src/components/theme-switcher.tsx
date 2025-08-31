'use client'

import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      // If no theme is stored, default to light and apply it
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }


  return (
    <button onClick={toggleTheme} className="rounded-full p-2 bg-gray-200 dark:bg-gray-800">
      <Sun className="m500:h-4 m500:w-4 hidden h-6 w-6 dark:inline" />
      <Moon className="m500:h-4 m500:w-4 inline h-6 w-6 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
