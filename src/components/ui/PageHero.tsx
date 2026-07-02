import type { ReactNode } from 'react'
import { Kicker } from './Kicker'

type PageHeroProps = {
  index?: string
  label: string
  title: ReactNode
  description?: ReactNode
  narrow?: boolean
  className?: string
  children?: ReactNode
}

export function PageHero({
  index,
  label,
  title,
  description,
  narrow,
  className,
  children,
}: PageHeroProps) {
  const classes = ['page-hero', narrow ? 'narrow' : null, className ?? null]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes}>
      <Kicker index={index}>{label}</Kicker>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
      {children}
    </section>
  )
}
