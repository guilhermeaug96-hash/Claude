import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand } from '../data/chocopass'
import './Header.css'

const links = [
  { href: '#sobre', label: 'O que é' },
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#como-funciona', label: 'Como funciona' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__row">
        <a href="#top" className="header__logo">
          {brand.name}
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#cta" className="header__cta">
          Quero meu passe
        </a>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="header__mobile-nav" aria-label="Navegação móvel">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#cta" className="header__cta" onClick={() => setOpen(false)}>
            Quero meu passe
          </a>
        </nav>
      )}
    </header>
  )
}
