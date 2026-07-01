type SectionHeaderProps = {
  label?: string
  title: string
  body?: string
}

export function SectionHeader({ label, title, body }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {label ? <p className="section-label">{label}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  )
}
