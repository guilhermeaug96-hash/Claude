import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo/logo-brown-transparent.png'
import { Button } from './ui/button'

const links = [
  { href: '#sobre', label: 'O que é' },
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#como-funciona', label: 'Como funciona' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-vanilla-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 sm:px-6">
        <a href="#top" className="mr-auto flex items-center">
          <img src={logo} alt="ChocoPass" className="h-11 w-auto sm:h-12" />
        </a>

        <nav className="hidden gap-8 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-chocolate-dark hover:text-caramel-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <a href="#cta">Quero meu passe</a>
        </Button>

        <button
          type="button"
          className="inline-flex p-2 text-chocolate-dark md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-4 border-t border-border px-4 py-4"
          aria-label="Navegação móvel"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-chocolate-dark"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 justify-center">
            <a href="#cta" onClick={() => setOpen(false)}>
              Quero meu passe
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
