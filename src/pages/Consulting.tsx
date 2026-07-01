import { AlertCircle, ClipboardList, FileCheck2, MessageSquareText, Users } from 'lucide-react'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Seo } from '../components/ui/Seo'
import { services } from '../content/services'

const icons = [ClipboardList, Users, FileCheck2, MessageSquareText]

export function Consulting() {
  return (
    <>
      <Seo
        title="Consulting"
        description="Practical HR, people operations, compliance support, onboarding systems, and workplace communication consulting for growing teams."
        path="/consulting"
      />

      <section className="page-hero">
        <p className="section-label">Consulting</p>
        <h1>Practical HR and people operations support for growing teams.</h1>
        <p>
          Support for small teams and growing organizations that need clearer documentation,
          onboarding systems, credentialing workflows, and communication practices without adding
          unnecessary complexity.
        </p>
        <ButtonLink to="/contact">Start an inquiry</ButtonLink>
      </section>

      <section className="service-page-grid" aria-label="Consulting services">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <article className="service-card" key={service.title}>
              <Icon aria-hidden="true" size={26} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          )
        })}
      </section>

      <section className="process-band">
        <div>
          <p className="section-label">How the work feels</p>
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
