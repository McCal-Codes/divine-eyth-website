import { Link } from 'react-router-dom'
import { Seo } from '../components/ui/Seo'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The requested page could not be found on Divine Eyth's website."
        path="/404"
      />

      <section className="page-hero narrow not-found-page">
        <p className="section-label">404</p>
        <h1>That page is not available.</h1>
        <p>
          The page may have moved, or the content may not be ready for public reading yet. Return
          home or explore the current site sections.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/">
            Home
          </Link>
          <Link className="button button-secondary" to="/writing">
            Writing
          </Link>
        </div>
      </section>
    </>
  )
}
