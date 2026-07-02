// Blog posts live as Markdown files in `src/content/blog/*.md`, each with a
// frontmatter block (title/category/date/excerpt/readingTime) followed by the
// post body written in plain Markdown. This file just loads and parses them —
// to add, edit, or publish a post, go edit the `.md` files instead.
import { marked } from 'marked'
import { profile } from './profile'

export const writingCategories = [
  'Work & Culture',
  'People Operations',
  'Leadership',
  'Literature',
  'Essays',
  'Career Growth',
]

export type Post = {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  readingTime: string
  bodyHtml: string
}

type Frontmatter = {
  title: string
  category: string
  date: string
  excerpt: string
  readingTime: string
}

function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  const data: Record<string, string> = {}

  if (!match) {
    return { data: data as Frontmatter, content: raw.trim() }
  }

  const [, frontmatter, content] = match
  for (const line of frontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '')
    data[key] = value
  }

  return { data: data as Frontmatter, content: content.trim() }
}

const postFiles = import.meta.glob('./blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

export const posts: Post[] = Object.entries(postFiles)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '')
    const { data, content } = parseFrontmatter(raw)

    return {
      slug,
      title: data.title,
      category: data.category,
      date: data.date,
      excerpt: data.excerpt,
      readingTime: data.readingTime,
      bodyHtml: marked.parse(content, { async: false }),
    }
  })
  .sort((a, b) => {
    if (a.date === 'Draft' && b.date === 'Draft') return a.title.localeCompare(b.title)
    if (a.date === 'Draft') return 1
    if (b.date === 'Draft') return -1
    return b.date.localeCompare(a.date)
  })

export const createBlogPostingSchema = (post: Post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date === 'Draft' ? undefined : post.date,
  author: {
    '@type': 'Person',
    name: profile.name,
    url: `${profile.siteUrl}/about`,
  },
  mainEntityOfPage: `${profile.siteUrl}/writing/${post.slug}`,
})
