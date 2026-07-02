import { ClipboardList, FileCheck2, MessageSquareText, Users } from 'lucide-react'

// Consulting services — the first 3 show on the homepage, all of them show
// on /consulting. To add a service, copy an object below and pick any icon
// from https://lucide.dev/icons (import it at the top of this file).
export const services = [
  {
    title: 'HR Foundations',
    description:
      'Support with workplace documentation, onboarding checklists, employee communication, policy organization, and basic HR infrastructure.',
    icon: ClipboardList,
  },
  {
    title: 'Hiring & Onboarding Systems',
    description:
      'Create clearer hiring workflows, role documentation, interview processes, onboarding guides, and first-90-day support systems.',
    icon: Users,
  },
  {
    title: 'Compliance & Credentialing Support',
    description:
      'Organize documentation-heavy workflows, credentialing checklists, application tracking, and recurring compliance processes.',
    icon: FileCheck2,
  },
  {
    title: 'Workplace Communication',
    description:
      'Help leaders write clearer internal communication, improve expectations, and reduce confusion through better documentation.',
    icon: MessageSquareText,
  },
]
