import { Link } from 'react-router-dom'
import { Seo } from '../components/ui/Seo'
import { writingCategories, posts } from '../content/posts'

const publishedPosts = posts.filter((post) => post.date !== 'Draft')

export function Writing() {
  return (
    <>
      <Seo
        title="Writing"
        description="Writing hub for Divine Eyth with draft essays on work, leadership, culture, literature, communication, and professional growth."
        path="/writing"
      />

      <section className="page-hero">
        <p className="section-label">Writing</p>
        <h1>Essays at the intersection of work, language, and human systems.</h1>
        <p>
          A home for professional essays, literary reflections, and practical writing on workplace
          communication, people operations, leadership, and culture.
        </p>
      </section>

      <section className="category-rail" aria-label="Writing categories">
        {writingCategories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </section>

      <section className="article-grid writing-grid" aria-label="Articles">
        {publishedPosts.length > 0 ? (
          publishedPosts.map((post) => (
            <Link className="article-card" to={`/writing/${post.slug}`} key={post.slug}>
              <span>{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <small>
                {post.date} · {post.readingTime}
              </small>
            </Link>
          ))
        ) : (
          <article className="status-card writing-status">
            <span className="section-label">Coming soon</span>
            <h2>Published essays are being prepared.</h2>
            <p>
              Draft topics are in development and will appear here once they are ready for public
              reading.
            </p>
            <ul className="coming-soon-list">
              {posts.slice(0, 4).map((post) => (
                <li key={post.slug}>{post.title}</li>
              ))}
            </ul>
          </article>
        )}
      </section>
    </>
  )
}
