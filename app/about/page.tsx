import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Inclusive Tech Bridge was founded by Hlompho Mphethi, a self-taught technology specialist who is totally blind, with over 11 years of hands-on experience bridging technology and accessibility.',
}

export default function AboutPage() {
  const points = [
    'Built from real, practical technology experience.',
    'The founder understands accessibility challenges from lived experience.',
    'We exist to show that disability is not inability.',
    'We bridge the gap between technology and accessibility.',
    'We serve people with disabilities and people without disabilities.',
    'We promote digital inclusion, independence, and productivity.',
  ]

  return (
    <PageShell>
      <section
        aria-labelledby="about-heading"
        className="relative overflow-hidden border-b border-border"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-20%] h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]"
        />
        <div className="site-container relative py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            // About Us
          </span>
          <h1
            id="about-heading"
            className="mt-3 text-balance font-heading text-4xl font-bold text-foreground md:text-5xl"
          >
            About Inclusive Tech Bridge
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {company.legalName} ({company.abbreviation}) was built on the belief
            that technology should work for everyone, regardless of ability.
          </p>
        </div>
      </section>

      <section aria-labelledby="founder-heading" className="bg-background">
        <div className="site-container grid items-center gap-10 py-20 md:grid-cols-2">
          <div className="surface-card overflow-hidden p-2">
            <Image
              src="/images/about-founder.png"
              alt="The founder of Inclusive Tech Bridge working confidently at a computer using a braille display and assistive technology."
              width={800}
              height={600}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <h2
              id="founder-heading"
              className="font-heading text-3xl font-bold text-foreground"
            >
              Our Founder
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Inclusive Tech Bridge was founded by{' '}
              <strong className="text-foreground">Hlompho Mphethi</strong>, a
              self-taught technology specialist who is totally blind and has more
              than <strong className="text-foreground">11 years</strong> of
              hands-on technology experience.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Having navigated the world of technology without sight, Hlompho
              understands accessibility challenges from lived experience, not
              theory. That perspective shapes every service ITB offers.
            </p>
            <blockquote className="surface-card-soft mt-6 p-6">
              <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
              <p className="mt-2 text-pretty font-medium leading-relaxed text-foreground">
                Disability is not inability. With the right technology and
                support, everyone can work, learn, and create independently.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="story-heading"
        className="relative border-y border-border bg-background"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50"
        />
        <div className="site-container relative py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            // Our Purpose
          </span>
          <h2
            id="story-heading"
            className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl"
          >
            Why We Exist
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="surface-card-soft p-5 leading-relaxed text-foreground transition-colors hover:border-accent/40"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="about-cta" className="bg-background py-20">
        <div className="site-container">
          <div className="surface-card relative overflow-hidden px-6 py-16 text-center md:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
            />
            <div className="relative">
              <h2
                id="about-cta"
                className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold text-foreground md:text-4xl"
              >
                Let&apos;s build a more inclusive future together
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-full bg-accent text-background hover:bg-accent/90 glow-accent',
                  )}
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: 'lg', variant: 'outline' }),
                    'rounded-full border-border bg-white text-foreground hover:bg-secondary',
                  )}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
