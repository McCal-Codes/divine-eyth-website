import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
}

export function ButtonLink({ to, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link className={`button button-${variant}`} to={to}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </Link>
  )
}
