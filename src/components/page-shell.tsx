import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollToTopOnRouteChange } from '@/components/scroll-to-top-on-route-change'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
