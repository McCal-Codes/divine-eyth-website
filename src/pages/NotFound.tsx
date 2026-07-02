import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The requested page could not be found on Divine Eyth's website."
        path="/404"
      />

      <PageHero
        label="404"
        title="That page is not available."
        description="The page may have moved, or the content may not be ready for public reading yet. Return home or explore the current site sections."
        narrow
        className="not-found-page"
      >
        <div className="hero-actions">
          <Link className="button button-primary" to="/">
            Home
          </Link>
          <Link className="button button-secondary" to="/writing">
            Writing
          </Link>
        </div>
      </PageHero>
    </>
  )
}
