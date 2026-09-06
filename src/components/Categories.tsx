import { motion } from 'framer-motion'
import { Hotel, UtensilsCrossed, Ticket, ShoppingBag, Coffee } from 'lucide-react'
import { categories } from '../data/chocopass'
import { useRevealVariants, useStaggerContainer } from '../hooks/useMotionPreset'
import './Categories.css'

const icons = {
  Hotel,
  UtensilsCrossed,
  Ticket,
  ShoppingBag,
  Coffee,
}

export default function Categories() {
  const reveal = useRevealVariants()
  const stagger = useStaggerContainer()

  return (
    <section className="categories">
      <div className="container">
        <motion.div
          className="categories__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {categories.map((category) => {
            const Icon = icons[category.icone]
            return (
              <motion.div key={category.slug} className="categories__item" variants={reveal}>
                <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                <span>{category.nome}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
