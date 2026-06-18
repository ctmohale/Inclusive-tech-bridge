import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { company, navLinks } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40"
      />
      <div className="site-container relative grid gap-8 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="overflow-hidden rounded-lg">
              <Image
                src="/images/logo.png"
                alt=""
                width={124}
                height={124}
                className="h-[124px] w-[124px] object-contain"
              />
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {company.legalName}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Registration No: {company.registration}
          </p>
          <p className="mt-3 text-sm text-accent">{company.tagline}</p>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Quick Links
          </h2>
          <nav aria-label="Footer">
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <a
                href={`mailto:${company.email}`}
                className="rounded text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <a
                href={`tel:${company.phoneIntl}`}
                className="rounded text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                {company.phone} (Phone / WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span className="text-muted-foreground">{company.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border">
        <p className="site-container py-4 text-center text-sm text-muted-foreground">
          © 2026 {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
