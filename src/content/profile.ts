// Core bio/identity content — shows up on the homepage hero, page headers,
// footer, and SEO meta tags throughout the site. Edit the values below directly.
export const profile = {
  name: 'Divine Eyth',
  location: 'Pittsburgh, Pennsylvania',
  // Short line under the name on the homepage hero.
  descriptor: 'People Operations | HR Systems | Writer',
  // Used in the Person schema.org JSON-LD (jobTitle) below.
  preferredTitle: 'People Operations / HR Professional',
  // Big homepage headline.
  headline: 'Building clearer systems for people-centered work.',
  // Short positioning line, used in the footer and meta descriptions.
  positioning:
    'People operations, workplace systems, and writing for more human-centered organizations.',
  // Leave blank ('') to keep the Contact page's "coming soon" state. Fill in
  // to make the mailto: link and LinkedIn link live on /contact and /about.
  email: '',
  linkedinUrl: '',
  // Used to build canonical URLs and absolute Open Graph image URLs — update
  // if the site ever moves to a different domain.
  siteUrl: 'https://divineeyth.com',
  // Homepage hero photo. Drop a new image in `public/images/` and point this
  // at it (e.g. '/images/my-new-photo.jpg').
  heroImage: '/images/editorial-hero.png',
  heroAlt:
    'Warm editorial workspace with documents, notebook, and writing tools arranged on a desk.',
  // "Public source context" links shown on the homepage and About page.
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
