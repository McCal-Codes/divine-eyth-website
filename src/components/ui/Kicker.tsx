import type { ReactNode } from 'react'

type KickerProps = {
  index?: string
  children: ReactNode
}

export function Kicker({ index, children }: KickerProps) {
  return (
    <p className="section-label">
      {index ? <span className="kicker-index">{index} — </span> : null}
      {children}
    </p>
  )
}
