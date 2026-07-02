import { AlertCircle } from 'lucide-react'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Kicker } from '../components/ui/Kicker'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { services } from '../content/services'

export function Consulting() {
  return (
    <>
      <Seo
        title="Consulting"
        description="Practical HR, people operations, compliance support, onboarding systems, and workplace communication consulting for growing teams."
        path="/consulting"
      />

      <PageHero
        index="01"
        label="Consulting"
        title="Practical HR and people operations support for growing teams."
        description="Support for small teams and growing organizations that need clearer documentation, onboarding systems, credentialing workflows, and communication practices without adding unnecessary complexity."
      >
        <ButtonLink to="/contact">Start an inquiry</ButtonLink>
      </PageHero>

      <section className="service-page-grid" aria-label="Consulting services">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <service.icon aria-hidden="true" size={26} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <section className="process-band">
        <div>
          <Kicker index="02">How the work feels</Kicker>
          <h2>Clear, organized, and appropriately scoped.</h2>
        </div>
        <ol>
          <li>
            <strong>Listen</strong>
            <span>Clarify the team’s real friction points, constraints, and documentation gaps.</span>
          </li>
          <li>
            <strong>Organize</strong>
            <span>Create practical structures, templates, workflows, and communication rhythms.</span>
          </li>
          <li>
            <strong>Hand off</strong>
            <span>Leave leaders with maintainable materials and a clearer next step.</span>
          </li>
        </ol>
      </section>

      <section className="disclaimer">
        <AlertCircle aria-hidden="true" size={22} />
        <p>
          Consulting support does not replace legal advice. Employment law, compliance, and
          regulatory questions should be reviewed with qualified legal counsel when required.
        </p>
      </section>
    </>
  )
}
