import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Accessibility,
  Award,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { BusinessSchema } from '@/components/business-schema'
import { HeroSlideshow } from '@/components/hero-slideshow'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { services, coreValues, company } from '@/lib/site-data'

export default function HomePage() {
  return (
    <PageShell>
      <BusinessSchema />

      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-accent/15 bg-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60"
        />
        <div
          aria-hidden="true"
          className="motion-float pointer-events-none absolute left-[10%] top-[-8%] h-[320px] w-[320px] rounded-full bg-accent/10 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="motion-float-slow motion-pulse-soft pointer-events-none absolute right-[10%] top-[12%] h-[260px] w-[260px] rounded-full bg-accent/8 blur-[110px]"
        />
        <div aria-hidden="true" className="hero-weather">
          <div className="hero-cloud">
            <span className="hero-cloud-puff hero-cloud-puff-1" />
            <span className="hero-cloud-puff hero-cloud-puff-2" />
            <span className="hero-cloud-puff hero-cloud-puff-3" />
            <span className="hero-cloud-base" />
          </div>
          <div className="hero-rain" />
        </div>
        <div className="site-container relative py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-4xl">
              <span className="motion-fade-up inline-flex items-center rounded-full border border-accent/20 bg-white/90 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.24em] text-accent shadow-sm">
                Inclusive Tech Bridge
              </span>
              <h1
                id="hero-heading"
                className="motion-fade-up-delay-1 mt-7 max-w-4xl text-balance font-heading text-5xl font-semibold leading-[0.96] text-foreground md:text-7xl"
              >
                Bridging technology and accessibility{' '}
                <span className="text-accent">for everyone</span>
              </h1>
              <p className="motion-fade-up-delay-2 mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-foreground/75 md:text-2xl">
                Practical support, training, and accessible technology services
                for individuals, schools, businesses, and workplaces.
              </p>
              <div className="motion-fade-up-delay-2 mt-9 flex flex-col items-start gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'interactive-lift rounded-full bg-foreground px-7 text-white shadow-[0_18px_34px_-18px_rgba(15,23,42,0.45)] hover:bg-foreground/92',
                  )}
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: 'lg', variant: 'outline' }),
                    'interactive-lift rounded-full border-foreground/12 bg-white px-7 text-foreground hover:bg-secondary',
                  )}
                >
                  Request a Consultation
                </Link>
              </div>
              <div className="motion-fade-up-delay-3 mt-10 flex flex-wrap gap-3">
                {[
                  'Assistive technology',
                  'Braille services',
                  'Computer support',
                  'Training and lessons',
                ].map((item) => (
                  <div
                    key={item}
                    className="interactive-lift flex items-center gap-2 rounded-full border border-accent/10 bg-white/92 px-4 py-3 text-base text-foreground shadow-sm"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section aria-labelledby="who-heading" className="bg-secondary/30">
        <div className="site-container grid gap-8 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              // Who We Are
            </span>
            <h2
              id="who-heading"
              className="mt-3 max-w-3xl text-balance font-heading text-3xl font-bold text-foreground md:text-4xl"
            >
              Bridging the gap between technology and accessibility
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Inclusive Tech Bridge serves people with disabilities and people
              without disabilities alike, promoting digital inclusion,
              independence, and productivity through practical, professional
              technology services.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'For Individuals',
                  text: 'Support for individuals and families using technology with more confidence.',
                },
                {
                  title: 'For Schools',
                  text: 'Solutions for schools and learning environments that need accessible digital support.',
                },
                {
                  title: 'For Businesses',
                  text: 'Practical services for businesses and workplaces that rely on dependable technology.',
                },
                {
                  title: 'For Training',
                  text: 'Inclusive training designed for real-world use, learning, and independence.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="surface-card-soft px-5 py-5"
                >
                  <p className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-labelledby="mission-heading" className="bg-background">
        <div className="site-container py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                // Mission & Vision
              </span>
              <h2 id="mission-heading" className="sr-only">
                Our Mission and Vision
              </h2>
              <h3 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Mission and vision built for impact
              </h3>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="surface-card-soft group relative overflow-hidden p-7 transition-colors hover:border-accent/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                Our Mission
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                To provide inclusive, accessible, and high-quality technology
                solutions that empower individuals, companies, and
                organizations, improve productivity, and ensure equal access to
                digital tools for people of all abilities.
              </p>
            </article>
            <article className="surface-card-soft group relative overflow-hidden p-7 transition-colors hover:border-accent/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                Our Vision
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                To become a trusted and leading bridge for inclusive technology
                solutions, recognized for empowering people of all abilities to
                use technology confidently, independently, and effectively.
              </p>
            </article>
          </div>

          <h3 className="mt-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Our Core Values
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <li
                key={value}
                className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/92 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                <CheckCircle2
                  className="h-4 w-4 text-accent"
                  aria-hidden="true"
                />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section
        aria-labelledby="services-heading"
        className="relative border-y border-border bg-secondary/30"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50"
        />
        <div className="site-container relative py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            // Capabilities
          </span>
          <h2
            id="services-heading"
            className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl"
          >
            Our Services
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            From assistive technology and braille services to programming
            lessons and workplace re-integration training, we offer a complete
            range of inclusive technology services.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug} className="surface-card-soft group">
                <Link
                  href="/services"
                  className="flex h-full flex-col p-6 transition-colors hover:bg-secondary/35"
                >
                  <span className="flex w-fit items-center justify-center rounded-lg border border-accent/30 bg-accent/10 p-2 text-accent">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Learn more
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">about {service.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section aria-labelledby="why-heading" className="bg-background">
        <div className="site-container py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            // Why ITB
          </span>
          <h2
            id="why-heading"
            className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl"
          >
            Why choose Inclusive Tech Bridge
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Accessibility,
                title: 'Accessibility First',
                text: 'Built around real lived experience of accessibility challenges.',
              },
              {
                icon: Award,
                title: 'Proven Expertise',
                text: 'More than 11 years of hands-on technology experience.',
              },
              {
                icon: Users,
                title: 'For Everyone',
                text: 'Serving people with and without disabilities alike.',
              },
              {
                icon: ShieldCheck,
                title: 'Professional & Ethical',
                text: 'Reliable, trustworthy service grounded in integrity.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="surface-card-soft p-6 transition-colors hover:border-accent/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section aria-labelledby="cta-heading" className="bg-background pb-20">
        <div className="site-container">
          <div className="surface-card relative overflow-hidden px-6 py-12 md:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
            />
            <div className="relative grid gap-8 text-left md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                  Start Here
                </p>
                <h2
                  id="cta-heading"
                  className="mt-3 max-w-2xl text-balance font-heading text-3xl font-bold text-foreground md:text-4xl"
                >
                  Ready to make technology work for everyone?
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  Speak with Inclusive Tech Bridge about accessibility support,
                  training, braille services, or day-to-day technology help for
                  your home, school, or organization.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-full bg-accent text-background hover:bg-accent/90 glow-accent',
                  )}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ size: 'lg', variant: 'outline' }),
                    'rounded-full border-border bg-white text-foreground hover:bg-secondary',
                  )}
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
