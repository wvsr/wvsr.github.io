'use client'

import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }

  React.useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);


  return (
    <button onClick={toggleTheme} className="rounded-full p-2 bg-gray-200 dark:bg-gray-800">
      <Sun className="m500:h-4 m500:w-4 hidden h-6 w-6 dark:inline" />
      <Moon className="m500:h-4 m500:w-4 inline h-6 w-6 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
