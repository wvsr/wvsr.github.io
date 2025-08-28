'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="rounded-full p-2 bg-gray-200 dark:bg-gray-800">
        <Sun className="m500:h-4 m500:w-4 hidden h-6 w-6 dark:inline" />
        <Moon className="m500:h-4 m500:w-4 inline h-6 w-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}
