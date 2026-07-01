export const profile = {
  name: 'Divine Eyth',
  location: 'Pittsburgh, Pennsylvania',
  descriptor: 'People Operations | HR Systems | Writer',
  preferredTitle: 'People Operations / HR Professional',
  headline: 'Building clearer systems for people-centered work.',
  positioning:
    'People operations, workplace systems, and writing for more human-centered organizations.',
  email: '',
  linkedinUrl: '',
  siteUrl: 'https://divineeyth.com',
  heroImage: '/images/editorial-hero.png',
  heroAlt:
    'Warm editorial workspace with documents, notebook, and writing tools arranged on a desk.',
  publicSources: [
    {
      label: 'OSH360 team profile',
      href: 'https://www.osh360.com/ourteam',
      note: 'Publicly lists Divine Eyth as People & Operations Specialist.',
    },
    {
      label: 'Point Park University feature',
      href: 'https://www.pointpark.edu/news-arts-sciences/pulse-literary-magazine-launches-2026',
      note: 'Publicly connects Divine to English studies and Pulse Literary Magazine editorial leadership.',
    },
  ],
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.preferredTitle,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pittsburgh',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  url: profile.siteUrl,
  sameAs: [profile.linkedinUrl].filter(Boolean),
  knowsAbout: [
    'People operations',
    'Human resources',
    'Compliance documentation',
    'Credentialing workflows',
    'Workplace communication',
    'Editing',
    'Literary publishing',
  ],
}
