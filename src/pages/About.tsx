import { ButtonLink } from '../components/ui/ButtonLink'
import { JsonLd } from '../components/ui/JsonLd'
import { Seo } from '../components/ui/Seo'
import { personSchema, profile } from '../content/profile'

const sections = [
  {
    title: 'Professional Background',
    body: 'Divine works across people operations, HR coordination, compliance support, credentialing workflows, and administrative systems. Public information identifies her as a People & Operations Specialist at OSH360.',
  },
  {
    title: 'HR and Operations Philosophy',
    body: 'Her work is grounded in a simple belief: organizations run better when their systems are clear, their communication is honest, and their people are treated as whole human beings.',
  },
  {
    title: 'Writing and Editorial Work',
    body: 'Her background also includes English studies and editorial leadership connected to Pulse Literary Magazine. That literary sensibility shapes a practical attention to language, audience, structure, and care.',
  },
  {
    title: 'What She’s Building Next',
    body: 'This site creates space for consulting, writing, and professional growth rooted in clear systems, careful communication, and practical support.',
  },
]

export function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Divine Eyth’s people operations, HR systems, compliance support, and writing-centered professional background."
        path="/about"
      />
      <JsonLd data={personSchema} />

      <section className="page-hero narrow">
        <p className="section-label">About</p>
        <h1>People operations with a writer’s attention to clarity.</h1>
        <p>
          Divine Eyth works across people operations, HR systems, compliance support, and writing.
          Her work treats documentation as more than paperwork: it is structure that helps people
          understand expectations, responsibilities, and possibilities.
        </p>
      </section>

      <section className="about-layout">
        <div className="about-intro">
          <h2>Clear systems for human-centered organizations.</h2>
          <p>
            Her background combines hands-on operational experience with a literary and editorial
            sensibility. That combination shapes how she approaches workplace systems: not as
            paperwork for its own sake, but as a form of support.
          </p>
          <ButtonLink to="/contact" variant="secondary">
            Get in touch
          </ButtonLink>
        </div>

        <div className="timeline">
          {sections.map((section) => (
            <article key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band source-band">
        <div>
          <p className="section-label">Public context</p>
          <h2>Positioning cues, used carefully.</h2>
          <p>
            These public pages support the site’s professional direction and provide context for
            the positioning used across this site.
          </p>
        </div>
        <div className="source-list">
          {profile.publicSources.map((source) => (
            <a href={source.href} key={source.href} target="_blank" rel="noreferrer">
              <strong>{source.label}</strong>
              <span>{source.note}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
