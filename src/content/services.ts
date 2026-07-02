// Consulting services — edit via the Tina admin UI at /admin ("Services"),
// or directly in services.json. This file resolves each service's icon name
// (a plain string in the JSON, editable as a dropdown in Tina) to the actual
// lucide-react icon component the pages render.
import {
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  MessageSquareText,
  Users,
  UsersRound,
} from 'lucide-react'
import servicesData from './services.json'

// Add an entry here (and to the `icon` field's options in tina/config.ts)
// to make a new icon selectable in the Tina dropdown.
const iconMap = {
  ClipboardList,
  ClipboardCheck,
  FileCheck2,
  FileText,
  MessageSquareText,
  Users,
  UsersRound,
}

export const services = servicesData.services.map((service) => ({
  ...service,
  icon: iconMap[service.icon as keyof typeof iconMap] ?? ClipboardList,
}))
