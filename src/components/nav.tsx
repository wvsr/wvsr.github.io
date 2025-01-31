'use client'

import { Link } from 'next-view-transitions'
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
    // {
    //   path: '/about',
    //   text: 'About',
    // },
    {
      path: '/work',
      text: 'Works',
    },
  ]

  return (
    <div className="mb-10 w-full">
      <nav className="flex w-max gap-5 rounded-base border-2 border-border bg-main p-2.5 px-5 text-sm font-base text-text shadow-light dark:border-darkBorder dark:shadow-dark sm:text-base">
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'rounded-base border-2 px-2 py-1 transition-colors hover:border-border dark:hover:border-darkBorder',
                path === link.path
                  ? 'border-border dark:border-darkBorder'
                  : 'border-transparent',
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
