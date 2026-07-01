import { Download, FileText } from 'lucide-react'
import { Seo } from '../components/ui/Seo'
import { resume } from '../content/resume'

export function Resume() {
  return (
    <>
      <Seo
        title="Resume"
        description="Resume page for Divine Eyth, including people operations, compliance support, writing, editorial leadership, and skills."
        path="/resume"
      />

      <section className="page-hero">
        <p className="section-label">Resume</p>
        <h1>People operations, workplace systems, and professional communication.</h1>
        <p>{resume.summary}</p>
        <button className="button button-primary" type="button" disabled>
          <span>Resume PDF coming soon</span>
          <Download aria-hidden="true" size={16} />
        </button>
      </section>

      <section className="resume-layout">
        <div className="resume-main">
          <section className="resume-section" aria-labelledby="summary-title">
            <h2 id="summary-title">Professional Summary</h2>
            <p>{resume.summary}</p>
          </section>

          <section className="resume-section" aria-labelledby="experience-title">
            <h2 id="experience-title">Experience</h2>
            {resume.experience.map((item) => (
              <article className="resume-item" key={`${item.role}-${item.organization}`}>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
                <span>{item.dates}</span>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="resume-section" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            {resume.education.map((item) => (
              <article className="resume-item" key={item.school}>
                <div>
                  <h3>{item.school}</h3>
                  <p>{item.program}</p>
                </div>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="resume-section" aria-labelledby="leadership-title">
            <h2 id="leadership-title">Leadership & Editorial Work</h2>
            {resume.leadership.map((item) => (
              <article className="resume-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </section>
        </div>

        <aside className="resume-sidebar">
          <FileText aria-hidden="true" size={26} />
          <h2>Skills</h2>
          {resume.skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="skill-group">
            <h3>Tools</h3>
            <ul>
              {resume.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
