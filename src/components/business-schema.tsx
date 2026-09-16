import { company } from '@/lib/site-data'

export function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName,
    alternateName: company.abbreviation,
    description:
      'Inclusive Tech Bridge (ITB) provides accessible, reliable and professional technology solutions for individuals, businesses, schools and organizations of all abilities.',
    slogan: company.tagline,
    email: company.email,
    telephone: company.phoneIntl,
    url: company.url,
    image: `${company.url}/images/logo.png`,
    logo: `${company.url}/images/logo.png`,
    founder: {
      '@type': 'Person',
      name: company.founder,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.locationLocality,
      addressRegion: company.locationRegion,
      addressCountry: company.locationCountry,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
