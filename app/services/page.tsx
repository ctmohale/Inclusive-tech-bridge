import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Inclusive Tech Bridge services: assistive technology and braille, computer maintenance, networking support, Python lessons, computer literacy for matric learners, and workplace accessibility training.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <section
        aria-labelledby="services-heading"
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
            // Capabilities
          </span>
          <h1
            id="services-heading"
            className="mt-3 text-balance font-heading text-4xl font-bold text-foreground md:text-5xl"
          >
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Inclusive Tech Bridge offers a complete range of accessible
            technology services for individuals, schools, businesses, and
            organizations.
          </p>
        </div>
      </section>

      <section aria-label="List of services" className="bg-background">
        <div className="site-container space-y-6 py-20">
          {services.map((service, index) => (
            <article
              key={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className="surface-card p-6 transition-colors hover:border-accent/40 md:p-8"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-mono text-lg font-bold text-accent"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2
                    id={`${service.slug}-title`}
                    className="font-heading text-2xl font-bold text-foreground"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="services-cta" className="bg-background pb-20">
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
                id="services-cta"
                className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold text-foreground md:text-4xl"
              >
                Interested in one of our services?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Tell us what you need and we&apos;ll recommend the right
                inclusive technology solution for you.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-full bg-accent text-background hover:bg-accent/90 glow-accent',
                  )}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
