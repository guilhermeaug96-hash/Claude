import { brand, categories } from '../data/chocopass'
import logo from '../assets/logo/logo-gold-transparent.png'

export default function Footer() {
  return (
    <footer className="mt-auto bg-chocolate-dark py-12 text-vanilla-cream/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-[1.4fr_1fr_1fr] sm:px-6">
        <div>
          <img src={logo} alt="ChocoPass" className="h-14 w-auto" />
          <p className="mt-3 max-w-[30ch] text-sm">{brand.shortTagline}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-vanilla-cream">Categorias</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>{category.nome}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-vanilla-cream">Empresa</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#sobre" className="hover:text-vanilla-cream">
                O que é o ChocoPass
              </a>
            </li>
            <li>
              <a href="#parceiros" className="hover:text-vanilla-cream">
                Parceiros
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-vanilla-cream">
                Como funciona
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-vanilla-cream/15 px-4 pt-6 text-xs opacity-70 sm:px-6">
        © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
