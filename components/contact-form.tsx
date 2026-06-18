'use client'

import { useState, useRef } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { services } from '@/lib/site-data'

type Errors = Partial<Record<'fullName' | 'email' | 'phone' | 'service' | 'message', string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  ////
  function validate(data: FormData): Errors {
    const next: Errors = {}
    const fullName = String(data.get('fullName') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const service = String(data.get('service') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!fullName) next.fullName = 'Please enter your full name.'
    if (!email) next.email = 'Please enter your email address.'
    else if (!emailPattern.test(email))
      next.email = 'Please enter a valid email address, for example name@example.com.'
    if (!phone) next.phone = 'Please enter your phone number.'
    if (!service) next.service = 'Please select a service you are interested in.'
    if (!message) next.message = 'Please enter a message.'
    return next
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors = validate(data)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      // Move focus to the error summary for screen reader users
      requestAnimationFrame(() => errorSummaryRef.current?.focus())
      return
    }

    setSubmitted(true)
    form.reset()
  }

  const fieldClass =
    'mt-1 w-full rounded-2xl border border-accent/10 bg-white px-4 py-3 text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-accent/60'

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      {/* Error summary */}
      {Object.keys(errors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-title"
          className="rounded-2xl border border-destructive bg-destructive/10 p-4"
        >
          <p
            id="error-summary-title"
            className="flex items-center gap-2 font-semibold text-destructive"
          >
            <AlertCircle className="h-5 w-5" aria-hidden="true" />
            There is a problem with your form
          </p>
          <ul className="mt-2 list-inside list-disc text-sm text-destructive">
            {Object.entries(errors).map(([key, value]) => (
              <li key={key}>
                <a href={`#${key}`} className="underline underline-offset-2">
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Success message */}
      {submitted && (
        <div
          role="status"
          className="flex items-start gap-2 rounded-2xl border border-accent bg-accent/15 p-4 text-accent-foreground"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>
            Thank you! Your message has been sent successfully. We will get back
            to you as soon as possible.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="font-medium text-foreground">
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={errors.fullName ? 'true' : undefined}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className={fieldClass}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-destructive">
            {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-medium text-foreground">
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClass}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="font-medium text-foreground">
          Phone Number <span className="text-destructive">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          aria-required="true"
          aria-invalid={errors.phone ? 'true' : undefined}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={fieldClass}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-destructive">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="font-medium text-foreground">
          Service Interested In <span className="text-destructive">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          aria-required="true"
          defaultValue=""
          aria-invalid={errors.service ? 'true' : undefined}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={fieldClass}
        >
          <option value="" disabled>
            Please select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="General Enquiry">General Enquiry</option>
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-sm text-destructive">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={fieldClass}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className={cn(
          'rounded-full bg-accent text-background hover:bg-accent/90 glow-accent',
        )}
      >
        Send Message
        <Send className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  )
}
