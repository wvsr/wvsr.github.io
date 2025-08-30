'use client'

import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav({ currentPath }: { currentPath: string }) {
  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/blog',
      text: 'Blog',
    },
  ]

  return (
    <div className="mb-10 flex w-full items-center justify-between">
      <nav className="flex w-max gap-5 rounded-base border-2 border-border bg-main p-1.5 px-4 text-sm font-base text-text shadow-light dark:border-darkBorder dark:shadow-dark sm:text-base">
        {links.map((link) => {
          const isActive =
            link.path === '/'
              ? currentPath === '/'
              : currentPath.startsWith(link.path)

          return (
            <a
              key={link.path}
              className={clsx(
                'rounded-base px-2 py-0.5 transition-colors hover:border-border dark:hover:border-darkBorder',
                {
                  'border-2 border-border dark:border-darkBorder': isActive,
                  'border-none': !isActive,
                },
              )}
              href={link.path}
            >
              {link.text}
            </a>
          )
        })}
      </nav>
      <ThemeSwitcher />
    </div>
  )
}
