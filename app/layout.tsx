import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

const siteUrl = 'https://inclusivetechbridge.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'Inclusive Tech Bridge',
    title: 'Inclusive Tech Bridge (Pty) Ltd | Technology for Everyone',
    description:
      'Accessible, reliable and professional technology solutions for people of all abilities.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
