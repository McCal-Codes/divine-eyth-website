import { ExternalLink, Mail } from 'lucide-react'
import { Kicker } from '../components/ui/Kicker'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { profile } from '../content/profile'

const inquiryTypes = [
  'Consulting',
  'Writing / Editorial',
  'Speaking',
  'Career Opportunity',
  'General',
]

export function Contact() {
  const hasEmail = Boolean(profile.email)
  const hasLinkedIn = Boolean(profile.linkedinUrl)

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Divine Eyth for consulting inquiries, writing or editorial work, speaking, career opportunities, and general conversation."
        path="/contact"
      />

      <PageHero
        index="01"
        label="Contact"
        title="For consulting inquiries, writing projects, and aligned opportunities."
        description="Contact details are being finalized. This page outlines the best-fit inquiry areas so the future form and direct links can launch with accurate information."
        narrow
      />

      <section className="contact-layout">
        <div className="contact-form contact-form-disabled" aria-labelledby="contact-status-title">
          <Kicker index="02">Inquiry form</Kicker>
          <h2 id="contact-status-title">Contact form coming soon.</h2>
          <p>
            The form integration is intentionally paused until the preferred inbox and submission
            workflow are confirmed.
          </p>
          <div className="inquiry-type-list" aria-label="Supported inquiry types">
            {inquiryTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>

        <aside className="contact-aside">
          <h2>Direct links</h2>
          {hasEmail ? (
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={18} />
              {profile.email}
            </a>
          ) : (
            <p>Email will be added once the preferred public inbox is confirmed.</p>
          )}
          {hasLinkedIn ? (
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" size={18} />
              LinkedIn
            </a>
          ) : (
            <p>LinkedIn will be added once the public profile URL is confirmed.</p>
          )}

          <div className="contact-note">
            <h3>Inquiry fit</h3>
            <p>
              Best-fit conversations include HR foundations, workplace communication, onboarding
              systems, credentialing support, writing, editorial work, and career opportunities.
            </p>
          </div>
        </aside>
      </section>
    </>
  )
}
