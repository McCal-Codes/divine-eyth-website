import { Link } from 'react-router-dom'
import { profile } from '../../content/profile'
import { navigation } from '../../data/navigation'

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" to="/">
          <img className="brand-mark" src="/brand-mark.svg" alt="" aria-hidden="true" />
          <span>Divine Eyth</span>
        </Link>
        <p>{profile.positioning}</p>
      </div>
      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <Link key={item.href} to={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
