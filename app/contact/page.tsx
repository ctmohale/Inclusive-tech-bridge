import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ContactForm } from '@/components/contact-form'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Inclusive Tech Bridge in Burgersfort, Limpopo. Email, call or WhatsApp us, or send a message using our accessible contact form.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <section
        aria-labelledby="contact-heading"
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
            // Get in Touch
          </span>
          <h1
            id="contact-heading"
            className="mt-3 text-balance font-heading text-4xl font-bold text-foreground md:text-5xl"
          >
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a question or want to discuss your technology needs? Reach out
            using the details below or send us a message.
          </p>
        </div>
      </section>

      <section aria-label="Contact details and form" className="bg-background">
        <div className="site-container grid gap-12 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Get in Touch
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="surface-card-soft flex items-start gap-3 p-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="rounded text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="surface-card-soft flex items-start gap-3 p-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href={`tel:${company.phoneIntl}`}
                    className="rounded text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="surface-card-soft flex items-start gap-3 p-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">{company.location}</p>
                </div>
              </li>
              <li className="surface-card-soft flex items-start gap-3 p-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    Business Hours
                  </h3>
                  <ul className="text-muted-foreground">
                    {company.hours.map((h) => (
                      <li key={h.day}>
                        <span className="font-medium text-foreground">
                          {h.day}:
                        </span>{' '}
                        {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="surface-card p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked with an asterisk (*) are required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
