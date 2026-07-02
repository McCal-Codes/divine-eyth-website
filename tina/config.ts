import { defineConfig } from 'tinacms'

// Keep this in sync with `writingCategories` in src/content/posts.ts — it's
// duplicated here because tina/config.ts runs outside the Vite app and can't
// import that module (it uses import.meta.glob, which only works in Vite).
const WRITING_CATEGORIES = [
  'Work & Culture',
  'People Operations',
  'Leadership',
  'Literature',
  'Essays',
  'Career Growth',
]

// Keep this in sync with the `iconMap` in src/content/services.ts.
const SERVICE_ICONS = [
  'ClipboardList',
  'ClipboardCheck',
  'FileCheck2',
  'FileText',
  'MessageSquareText',
  'Users',
  'UsersRound',
]

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main',
  // Both are ignored for local dev — only needed once this is connected to
  // Tina Cloud (see README's "Editing content via the dashboard" section).
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'images/uploads',
    },
  },

  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'md',
        // Keep frontmatter on one line per field — src/content/posts.ts's
        // parser is intentionally simple and doesn't handle YAML block
        // scalars.
        yamlMaxLineWidth: -1,
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            options: WRITING_CATEGORIES,
          },
          {
            type: 'string',
            name: 'date',
            label: 'Date',
            description:
              'Leave as "Draft" to keep this post unpublished. Set a real date (e.g. 2026-05-01) to publish it — it\'ll immediately appear on the Writing page.',
            required: true,
          },
          {
            type: 'string',
            name: 'readingTime',
            label: 'Reading Time',
            description: 'e.g. "5 min read"',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            description: 'Short 1–2 sentence summary shown in article previews.',
            ui: { component: 'textarea' },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            parser: { type: 'markdown' },
          },
        ],
      },
      {
        name: 'profile',
        label: 'Site Profile',
        path: 'src/content',
        format: 'json',
        match: { include: 'profile' },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: 'string', name: 'name', label: 'Name', required: true },
          { type: 'string', name: 'location', label: 'Location' },
          {
            type: 'string',
            name: 'descriptor',
            label: 'Short Descriptor',
            description: 'Line shown under the name on the homepage, e.g. "People Operations | HR Systems | Writer".',
          },
          {
            type: 'string',
            name: 'preferredTitle',
            label: 'Job Title',
            description: 'Used for SEO structured data (not shown directly on the page).',
          },
          {
            type: 'string',
            name: 'headline',
            label: 'Homepage Headline',
            ui: { component: 'textarea' },
          },
          {
            type: 'string',
            name: 'positioning',
            label: 'Positioning Line',
            description: 'Short summary shown in the footer and search engine results.',
            ui: { component: 'textarea' },
          },
          {
            type: 'string',
            name: 'email',
            label: 'Public Email',
            description: 'Leave blank to keep the Contact page in its "coming soon" state.',
          },
          {
            type: 'string',
            name: 'linkedinUrl',
            label: 'LinkedIn URL',
            description: 'Leave blank to hide the LinkedIn link.',
          },
          {
            type: 'string',
            name: 'siteUrl',
            label: 'Site URL',
            description: 'The live domain, used to build canonical links and share previews.',
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Homepage Photo',
          },
          {
            type: 'string',
            name: 'heroAlt',
            label: 'Homepage Photo Alt Text',
            description: 'Describes the photo for screen readers and search engines.',
          },
          {
            type: 'object',
            name: 'publicSources',
            label: 'Public Source Links',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || 'Source link' }),
            },
            fields: [
              { type: 'string', name: 'label', label: 'Link Text', required: true },
              { type: 'string', name: 'href', label: 'URL', required: true },
              { type: 'string', name: 'note', label: 'Note', ui: { component: 'textarea' } },
            ],
          },
        ],
      },
      {
        name: 'resume',
        label: 'Resume',
        path: 'src/content',
        format: 'json',
        match: { include: 'resume' },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'string',
            name: 'summary',
            label: 'Professional Summary',
            ui: { component: 'textarea' },
          },
          {
            type: 'object',
            name: 'experience',
            label: 'Experience',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.role || 'Experience entry' }),
            },
            fields: [
              { type: 'string', name: 'role', label: 'Role', required: true },
              { type: 'string', name: 'organization', label: 'Organization' },
              { type: 'string', name: 'dates', label: 'Dates' },
              { type: 'string', name: 'details', label: 'Details', list: true },
            ],
          },
          {
            type: 'object',
            name: 'education',
            label: 'Education',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.school || 'Education entry' }),
            },
            fields: [
              { type: 'string', name: 'school', label: 'School', required: true },
              { type: 'string', name: 'program', label: 'Program' },
              { type: 'string', name: 'details', label: 'Details', list: true },
            ],
          },
          {
            type: 'object',
            name: 'leadership',
            label: 'Leadership & Editorial Work',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || 'Leadership entry' }),
            },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            type: 'object',
            name: 'skillGroups',
            label: 'Skill Groups',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || 'Skill group' }),
            },
            fields: [
              { type: 'string', name: 'title', label: 'Group Title', required: true },
              { type: 'string', name: 'skills', label: 'Skills', list: true },
            ],
          },
          { type: 'string', name: 'tools', label: 'Tools', list: true },
        ],
      },
      {
        name: 'services',
        label: 'Services',
        path: 'src/content',
        format: 'json',
        match: { include: 'services' },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'object',
            name: 'services',
            label: 'Services',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || 'Service' }),
            },
            fields: [
              { type: 'string', name: 'title', label: 'Title', required: true },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: { component: 'textarea' },
              },
              {
                type: 'string',
                name: 'icon',
                label: 'Icon',
                options: SERVICE_ICONS,
                description: 'Pick an icon shown on the Consulting page.',
              },
            ],
          },
        ],
      },
      {
        name: 'navigation',
        label: 'Navigation',
        path: 'src/content',
        format: 'json',
        match: { include: 'navigation' },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Links',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || 'Link' }),
            },
            fields: [
              { type: 'string', name: 'label', label: 'Label', required: true },
              {
                type: 'string',
                name: 'href',
                label: 'Path',
                description: 'Must match a route, e.g. "/about".',
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
})
