'use client'
import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const pathname = usePathname()

  let headerClass =
    'flex items-center w-full bg-white dark:bg-stone-900 justify-between py-6 transition-all duration-300'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50 shadow-sm'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="group flex items-center justify-between transition-transform duration-300 hover:scale-105">
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-semibold text-transparent transition-all duration-300 group-hover:tracking-wider sm:block dark:from-white dark:to-gray-300">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-5 overflow-x-auto sm:flex md:max-w-72 lg:max-w-full">
          {headerNavLinks
            // .filter((link) => link.href !== '/')
            .map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`relative px-2 py-1 font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 font-bold'
                      : 'hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100'
                  } after:bg-primary-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''} `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.title}
                </Link>
              )
            })}
        </div>
        <div className="flex items-center space-x-3">
          {/* <SearchButton /> */}
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
