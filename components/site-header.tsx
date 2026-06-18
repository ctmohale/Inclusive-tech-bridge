'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { company, navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between gap-4 py-0">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            aria-label={`${company.brandName} home`}
            className="flex items-center gap-2.5 rounded-md font-heading text-base font-semibold tracking-tight text-foreground"
          >
            <span className="overflow-hidden rounded-lg">
              <Image
                src="/images/logo.png"
                alt={`${company.brandName} logo`}
                width={88}
                height={88}
                className="h-[88px] w-[88px] object-contain"
              />
            </span>
            <span className="hidden sm:inline">{company.brandName}</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'inline-block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground',
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground',
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="mx-auto mt-1 block h-px w-full bg-accent"
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/20 md:inline-flex"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary md:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <ul className="site-container flex flex-col py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-md px-3 py-3 text-base font-medium',
                      isActive
                        ? 'bg-secondary text-accent'
                        : 'text-foreground hover:bg-secondary',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="px-3 py-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
