'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

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
    <div className="mb-10 w-full">
      <nav className="flex w-max gap-5 rounded-base border-2 border-border bg-main p-1.5 px-4 text-sm font-base text-text shadow-light dark:border-darkBorder dark:shadow-dark sm:text-base">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'rounded-base px-2 py-0.5 transition-colors hover:border-border dark:hover:border-darkBorder',
                {
                  'border-2 border-border dark:border-darkBorder':
                    path === link.path || (link.path !== '/' && path.startsWith(link.path)),
                  'border-none':
                    !(path === link.path || (link.path !== '/' && path.startsWith(link.path))),
                },
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
