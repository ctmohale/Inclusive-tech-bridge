'use client'

import { useEffect, useEffectEvent, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { company } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const slides = [
  {
    title: 'Assistive technology',
    description:
      'Helping people use accessible tools more confidently in daily life, learning, and work.',
    points: [
      'Screen reader and assistive support',
      'Practical accessibility guidance',
    ],
  },
  {
    title: 'Braille services',
    description:
      'Clear, dependable braille support for reading, writing, translation, and learning.',
    points: ['Braille reading and writing', 'Translation and beginner training'],
  },
  {
    title: 'Computer support',
    description:
      'Reliable technical help for setup, troubleshooting, maintenance, and everyday use.',
    points: ['System repair and optimization', 'Networking and device support'],
  },
  {
    title: 'Training and lessons',
    description:
      'Accessible digital skills and practical training designed for real-world independence.',
    points: ['Python and digital skills', 'Inclusive workplace and learner training'],
  },
]

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)

  const advanceSlide = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % slides.length)
  })

  useEffect(() => {
    const interval = window.setInterval(() => {
      advanceSlide()
    }, 4200)

    return () => window.clearInterval(interval)
  }, [advanceSlide])

  return (
    <div className="motion-fade-up-delay-4 hero-shine surface-card p-8 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          At a glance
        </p>
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show ${slide.title} slide`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-2.5 rounded-full bg-accent/20 transition-all duration-300',
                activeIndex === index ? 'w-8 bg-accent' : 'w-2.5 hover:bg-accent/40',
              )}
            />
          ))}
        </div>
      </div>

      <dl className="motion-fade-up-delay-3 mt-6 grid grid-cols-3 gap-3">
        {[
          { value: '11+', label: 'Years' },
          { value: '6', label: 'Services' },
          { value: 'All', label: 'Abilities' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="interactive-lift rounded-2xl border border-accent/10 bg-white px-4 py-4 text-center"
          >
            <dt className="font-heading text-3xl font-semibold text-foreground">
              {stat.value}
            </dt>
            <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-6 min-h-[250px]">
        {slides.map((slide, index) => (
          <article
            key={slide.title}
            className={cn(
              'absolute inset-0 rounded-[1.5rem] border border-accent/10 bg-white p-6 transition-all duration-500 ease-out',
              activeIndex === index
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-4 opacity-0',
            )}
            aria-hidden={activeIndex !== index}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Featured Service
            </p>
            <h3 className="mt-3 font-heading text-3xl font-semibold text-foreground">
              {slide.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {slide.description}
            </p>
            <div className="mt-5 space-y-3">
              {slide.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 rounded-2xl border border-accent/10 bg-secondary/40 px-4 py-3 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="motion-fade-up-delay-4 interactive-lift mt-6 rounded-2xl border border-accent/10 bg-white px-5 py-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Based In
        </p>
        <p className="mt-2 text-base font-medium text-foreground">
          {company.location}
        </p>
      </div>
    </div>
  )
}
