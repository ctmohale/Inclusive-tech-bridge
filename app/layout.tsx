import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { company } from '@/lib/site-data'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: 'Inclusive Tech Bridge (Pty) Ltd | Technology for Everyone',
    template: '%s | Inclusive Tech Bridge',
  },
  description:
    'Inclusive Tech Bridge (ITB) is a South African technology service company providing accessible, reliable technology solutions for individuals, businesses, schools and organizations of all abilities.',
  keywords: [
    'inclusive technology',
    'assistive technology',
    'braille services',
    'accessibility South Africa',
    'computer training',
    'Python lessons',
    'Burgersfort Limpopo',
  ],
  applicationName: company.brandName,
  authors: [{ name: company.founder }],
  creator: company.brandName,
  publisher: company.legalName,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: company.url,
    siteName: company.brandName,
    title: 'Inclusive Tech Bridge (Pty) Ltd | Technology for Everyone',
    description:
      'Accessible, reliable and professional technology solutions for people of all abilities.',
    images: [
      {
        url: `${company.url}/images/logo.png`,
        width: 500,
        height: 500,
        alt: `${company.brandName} company logo`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Inclusive Tech Bridge (Pty) Ltd | Technology for Everyone',
    description:
      'Accessible, reliable and professional technology solutions for people of all abilities.',
    images: [`${company.url}/images/logo.png`],
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '500x500', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/images/logo.png',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
