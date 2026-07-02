import { ArrowUpRight, BookOpen, ClipboardCheck, FileText, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ui/ButtonLink'
import { JsonLd } from '../components/ui/JsonLd'
import { Kicker } from '../components/ui/Kicker'
import { Seo } from '../components/ui/Seo'
import { SectionHeader } from '../components/ui/SectionHeader'
import { personSchema, profile } from '../content/profile'
import { posts } from '../content/posts'
import { resume } from '../content/resume'
import { services } from '../content/services'

const publishedPosts = posts.filter((post) => post.date !== 'Draft')

const credibility = [
  {
    title: 'People Operations',
    body: 'HR, onboarding, documentation, internal workflows, and employee support.',
    icon: UsersRound,
  },
  {
    title: 'Compliance & Credentialing',
    body: 'Operational support across documentation, credentialing, and regulated workflows.',
    icon: ClipboardCheck,
  },
  {
    title: 'Writing & Editorial Leadership',
    body: 'Essays, editing, literary projects, and communication rooted in clarity and care.',
    icon: BookOpen,
  },
]

export function Home() {
  return (
    <>
      <Seo
        title="People Operations, HR Systems, and Writing"
        description="Personal website for Divine Eyth, a Pittsburgh-based people operations and HR professional working across workplace systems, compliance support, and writing."
      />
      <JsonLd data={personSchema} />

      <section className="hero-section">
        <div className="hero-copy">
          <Kicker index="01">Introduction</Kicker>
          <p className="hero-name">{profile.name}</p>
          <p className="hero-role">{profile.descriptor}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-body">
            I work at the intersection of human resources, operations, compliance, and
            communication, helping teams turn workplace complexity into clearer systems and more
            thoughtful support.
          </p>
          <div className="hero-actions" aria-label="Primary calls to action">
            <ButtonLink to="/resume">View Resume</ButtonLink>
            <ButtonLink to="/consulting" variant="secondary">
              Explore Consulting
            </ButtonLink>
            <ButtonLink to="/writing" variant="text">
              Read Writing
            </ButtonLink>
          </div>
        </div>
        <figure className="hero-figure">
          <img
            src={profile.heroImage}
            alt={profile.heroAlt}
            width={1693}
            height={929}
            fetchPriority="high"
          />
          <figcaption>
            Clear systems, careful language, and people-first infrastructure.
          </figcaption>
        </figure>
      </section>

      <section className="snapshot-section" aria-labelledby="snapshot-title">
        <SectionHeader
          label="Credibility snapshot"
          index="02"
          title="Operations experience with an editorial sense of clarity."
          body="A public-facing overview of people operations, documentation-heavy workflows, and writing-centered professional communication."
        />
        <div className="card-grid three">
          {credibility.map((item) => {
            const Icon = item.icon
            return (
              <article className="feature-card" key={item.title}>
                <Icon aria-hidden="true" size={24} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="split-section">
        <div>
          <Kicker index="03">Consulting preview</Kicker>
          <h2>Practical support for small teams and growing organizations.</h2>
          <p>
            Consulting is positioned around right-sized HR foundations, onboarding systems,
            documentation-heavy workflows, and workplace communication that reduces confusion.
          </p>
          <ButtonLink to="/consulting" variant="secondary">
            Explore services
          </ButtonLink>
        </div>
        <div className="service-list">
          {services.slice(0, 3).map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band writing-preview">
        <div className="section-row">
          <SectionHeader
            label="Writing preview"
            index="04"
            title="Essays on work, culture, literature, and professional growth."
            body="The writing hub is ready for approved essays, with starter topics marked clearly as drafts."
          />
          <ButtonLink to="/writing" variant="text">
            Visit writing
          </ButtonLink>
        </div>
        <div className="article-grid">
          {publishedPosts.length > 0 ? (
            publishedPosts.slice(0, 3).map((post) => (
              <Link className="article-card" to={`/writing/${post.slug}`} key={post.slug}>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <small>
                  {post.date} · {post.readingTime}
                </small>
              </Link>
            ))
          ) : (
            <article className="status-card">
              <span className="section-label">Writing coming soon</span>
              <h3>Essays are being prepared for publication.</h3>
              <p>
                The writing hub is ready for polished essays on people operations, workplace
                communication, literature, and professional growth.
              </p>
            </article>
          )}
        </div>
      </section>

      <section className="resume-preview">
        <div className="resume-paper">
          <FileText aria-hidden="true" size={28} />
          <Kicker index="05">Professional background</Kicker>
          <h2>{resume.summary}</h2>
          <ButtonLink to="/resume" variant="secondary">
            View full resume
          </ButtonLink>
        </div>
        <aside className="source-note">
          <h3>Public source context</h3>
          <p>
            Current public references support people operations, HR, compliance, credentialing, and
            editorial leadership positioning.
          </p>
          {profile.publicSources.map((source) => (
            <a href={source.href} key={source.href} target="_blank" rel="noopener noreferrer">
              {source.label}
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          ))}
        </aside>
      </section>

      <section className="contact-cta">
        <div>
          <Kicker index="06">Start a conversation</Kicker>
          <h2>For consulting inquiries, writing opportunities, or aligned career conversations.</h2>
        </div>
        <ButtonLink to="/contact">Contact Divine</ButtonLink>
      </section>
    </>
  )
}
