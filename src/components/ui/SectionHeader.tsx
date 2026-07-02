import { Kicker } from './Kicker'

type SectionHeaderProps = {
  label?: string
  index?: string
  title: string
  body?: string
}

export function SectionHeader({ label, index, title, body }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {label ? <Kicker index={index}>{label}</Kicker> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  )
}
