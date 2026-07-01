import { Link, useParams } from 'react-router-dom'
import { JsonLd } from '../components/ui/JsonLd'
import { Seo } from '../components/ui/Seo'
import { createBlogPostingSchema, posts } from '../content/posts'
import { NotFound } from './NotFound'

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug && item.date !== 'Draft')

  if (!post) {
    return <NotFound />
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/writing/${post.slug}`}
      />
      <JsonLd data={createBlogPostingSchema(post)} />

      <article className="post-page">
        <Link className="back-link" to="/writing">
          Back to writing
        </Link>
        <header>
          <p className="section-label">{post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <small>
            {post.date} · {post.readingTime}
          </small>
        </header>
        <div className="post-body">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </>
  )
}
