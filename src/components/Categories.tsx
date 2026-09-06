import { motion } from 'framer-motion'
import { Hotel, UtensilsCrossed, Ticket, ShoppingBag, Coffee } from 'lucide-react'
import { categories } from '../data/chocopass'
import { useRevealVariants, useStaggerContainer } from '../hooks/useMotionPreset'

const icons = { Hotel, UtensilsCrossed, Ticket, ShoppingBag, Coffee }

export default function Categories() {
  const reveal = useRevealVariants()
  const stagger = useStaggerContainer()

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {categories.map((category) => {
            const Icon = icons[category.icone]
            return (
              <motion.div
                key={category.slug}
                variants={reveal}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center text-chocolate-dark shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-caramel-gold/15 text-caramel-gold">
                  <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold">{category.nome}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
