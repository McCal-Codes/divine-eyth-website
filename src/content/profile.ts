// Core bio/identity content — edit via the Tina admin UI at /admin ("Site
// Profile"), or directly in profile.json. This file just re-exports it with
// a stable import path plus the derived Person JSON-LD schema.
import profileData from './profile.json'

export const profile = profileData

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
