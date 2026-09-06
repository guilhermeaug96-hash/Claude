import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import { partners } from '../data/chocopass'
import { useRevealVariants, useStaggerContainer } from '../hooks/useMotionPreset'
import ImageWithFallback from './ImageWithFallback'
import './PartnersGrid.css'

export default function PartnersGrid() {
  const reveal = useRevealVariants()
  const stagger = useStaggerContainer()

  return (
    <section id="parceiros" className="partners">
      <div className="container">
        <div className="partners__header">
          <h2>Parceiros em destaque</h2>
          <p>Uma amostra do que está incluso no seu passe.</p>
        </div>

        <motion.div
          className="partners__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {partners.map((partner, index) => (
            <motion.article
              key={partner.id}
              className={`partners__card${index === 0 ? ' partners__card--feature' : ''}`}
              variants={reveal}
            >
              <div className="partners__image-wrap">
                <ImageWithFallback src={partner.capa} alt="" fallbackLabel={partner.nome} />
                <span className="partners__tag">{partner.tag}</span>
              </div>

              <div className="partners__body">
                <span className="partners__category">{partner.categoria}</span>
                <h3>{partner.nome}</h3>
                <p className="partners__desc">{partner.descricao}</p>

                <div className="partners__meta">
                  <span>
                    <MapPin size={14} aria-hidden="true" /> {partner.cidade}, {partner.uf}
                  </span>
                  <span>
                    <Star size={14} aria-hidden="true" /> {partner.rating} ({partner.reviews})
                  </span>
                </div>

                <p className="partners__benefit">{partner.beneficio}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
