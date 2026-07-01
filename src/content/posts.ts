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
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'human-side-workplace-systems',
    title: 'The Human Side of Workplace Systems',
    category: 'People Operations',
    date: 'Draft',
    readingTime: '4 min read',
    excerpt:
      'A draft essay on why policies, workflows, and documentation should make work feel clearer, not colder.',
    body: [
      'Workplace systems are often treated as administrative housekeeping: necessary, dull, and separate from the human parts of work.',
      'But the best systems reduce friction. They help people understand where to go, what to expect, and how to participate with confidence.',
      'This essay draft can become a practical reflection on onboarding, documentation, and the quiet trust created by clear expectations.',
    ],
  },
  {
    slug: 'onboarding-communication-problem',
    title: 'Why Onboarding Is a Communication Problem',
    category: 'Work & Culture',
    date: 'Draft',
    readingTime: '5 min read',
    excerpt:
      'A practical look at onboarding as a writing, sequencing, and expectation-setting challenge.',
    body: [
      'Onboarding is not only a checklist. It is an organization explaining itself to someone who is still learning the language of the team.',
      'When onboarding fails, the missing piece is often not effort. It is unclear communication, scattered documentation, or expectations that arrived too late.',
      'This draft should be revised with examples Divine wants to make public.',
    ],
  },
  {
    slug: 'literature-teaches-leadership',
    title: 'What Literature Teaches About Leadership',
    category: 'Literature',
    date: 'Draft',
    readingTime: '6 min read',
    excerpt:
      'A literary essay seed on attention, interpretation, and the responsibilities of guiding people through complexity.',
    body: [
      'Literature asks readers to practice attention: to notice tone, context, contradiction, and what remains unsaid.',
      'Those same habits matter in leadership and workplace communication, where people are rarely responding only to the literal words in front of them.',
      'This draft will be revised with a finished essay before publication.',
    ],
  },
  {
    slug: 'small-teams-need-hr-structure',
    title: 'Small Teams Still Need HR Structure',
    category: 'People Operations',
    date: 'Draft',
    readingTime: '4 min read',
    excerpt:
      'A grounded argument for right-sized documentation and people-first infrastructure in growing organizations.',
    body: [
      'Small teams often delay HR structure because they do not want to feel formal or impersonal.',
      'Right-sized structure can do the opposite. It can protect warmth by making expectations, responsibilities, and support easier to find.',
      'This draft should be tailored to the consulting audience Divine wants to reach.',
    ],
  },
  {
    slug: 'clarity-is-care',
    title: 'Clarity Is a Form of Care',
    category: 'Essays',
    date: 'Draft',
    readingTime: '3 min read',
    excerpt:
      'A short essay on documentation, direct communication, and the workplace relief of knowing what is expected.',
    body: [
      'Clarity is sometimes mistaken for rigidity. In practice, clarity can be one of the most generous things a workplace offers.',
      'It gives people a map before they are lost, a shared language before conflict hardens, and a way to ask better questions.',
      'This draft will be expanded into an approved future essay.',
    ],
  },
  {
    slug: 'gap-between-policy-and-practice',
    title: 'The Gap Between Policy and Practice',
    category: 'Leadership',
    date: 'Draft',
    readingTime: '5 min read',
    excerpt:
      'A draft reflection on why written policies need maintenance, communication, and leadership follow-through.',
    body: [
      'A policy is only useful if people understand it, can find it, and see leaders use it consistently.',
      'The gap between policy and practice is where confusion gathers. Closing that gap requires writing, training, repetition, and honest revision.',
      'This draft should be reviewed before publication for legal and compliance sensitivity.',
    ],
  },
]

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
