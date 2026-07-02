import type { ReactNode } from 'react'

type PullQuoteProps = {
  children: ReactNode
  attribution?: string
}

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <blockquote className="pull-quote">
      <p>{children}</p>
      {attribution ? <cite>{attribution}</cite> : null}
    </blockquote>
  )
}
