import { motion } from 'framer-motion'
import { useRevealVariants } from '../hooks/useMotionPreset'
import { Button } from './ui/button'

export default function FinalCta() {
  const reveal = useRevealVariants()

  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={reveal}
          className="mx-auto max-w-xl rounded-3xl bg-chocolate-dark px-8 py-14 text-center text-vanilla-cream sm:px-10"
        >
          <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
            Sua viagem ao Cacau Park custa menos do que parece.
          </h2>
          <p className="mb-8 text-vanilla-cream/85">
            Garanta seu ChocoPass e comece a economizar no primeiro parceiro que visitar.
          </p>
          <Button asChild size="lg">
            <a href="#top">Quero meu passe</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
