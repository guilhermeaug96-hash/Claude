import { brand, categories } from '../data/chocopass'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <span className="footer__logo">{brand.name}</span>
          <p className="footer__tagline">{brand.tagline}</p>
        </div>

        <div>
          <h3>Categorias</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>{category.nome}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Empresa</h3>
          <ul>
            <li>
              <a href="#sobre">O que é o ChocoPass</a>
            </li>
            <li>
              <a href="#parceiros">Parceiros</a>
            </li>
            <li>
              <a href="#como-funciona">Como funciona</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
