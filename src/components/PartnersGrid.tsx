import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import { partners } from '../data/chocopass'
import { useRevealVariants, useStaggerContainer } from '../hooks/useMotionPreset'
import ImageWithFallback from './ImageWithFallback'
import { cn } from '@/lib/utils'

export default function PartnersGrid() {
  const reveal = useRevealVariants()
  const stagger = useStaggerContainer()

  return (
    <section id="parceiros" className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-[46ch]">
          <h2 className="mb-2 text-2xl font-extrabold text-chocolate-dark sm:text-3xl">
            Parceiros em destaque
          </h2>
          <p className="text-muted-foreground">Uma amostra do que está incluso no seu passe.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {partners.map((partner, index) => (
            <motion.article
              key={partner.id}
              variants={reveal}
              className={cn(
                'flex flex-col overflow-hidden rounded-2xl border border-border bg-background',
                index === 0 && 'sm:col-span-2 sm:flex-row lg:col-span-3',
              )}
            >
              <div
                className={cn(
                  'relative aspect-[4/3]',
                  index === 0 && 'sm:aspect-auto sm:w-[55%]',
                )}
              >
                <ImageWithFallback src={partner.capa} alt="" fallbackLabel={partner.nome} />
                <span className="absolute left-3 top-3 rounded-full bg-chocolate-dark px-3 py-1 text-xs font-bold text-vanilla-cream">
                  {partner.tag}
                </span>
              </div>

              <div
                className={cn(
                  'flex flex-col gap-2 p-6',
                  index === 0 && 'justify-center sm:w-[45%]',
                )}
              >
                <span className="text-xs font-bold text-accent-text">{partner.categoria}</span>
                <h3 className="text-xl font-bold text-chocolate-dark">{partner.nome}</h3>
                <p className="text-sm text-muted-foreground">{partner.descricao}</p>

                <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} aria-hidden="true" /> {partner.cidade}, {partner.uf}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star size={14} aria-hidden="true" /> {partner.rating} ({partner.reviews})
                  </span>
                </div>

                <p className="mt-3 border-t border-dashed border-border pt-3 font-bold text-chocolate-dark">
                  {partner.beneficio}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
