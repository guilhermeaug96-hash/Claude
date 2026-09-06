import { motion } from 'framer-motion'
import { quote } from '../data/chocopass'
import { useRevealVariants } from '../hooks/useMotionPreset'

export default function About() {
  const reveal = useRevealVariants()

  return (
    <section id="sobre" className="border-y border-border bg-card py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <h2 className="mb-4 text-2xl font-extrabold text-chocolate-dark sm:text-3xl">
            O que é o ChocoPass
          </h2>
          <p className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            Um passe único que reúne descontos reais de parceiros selecionados na costa do
            cacau — de resorts a fazendas de chocolate, cafés e escolas de surf. Sem cupom, sem
            letra miúda: você mostra o passe e economiza na hora, em cada parada da viagem.
          </p>
        </motion.div>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="border-l-4 border-caramel-gold pl-6"
        >
          <p className="font-display text-xl italic leading-snug text-chocolate-dark">
            “{quote.message}”
          </p>
          <cite className="mt-4 block text-sm not-italic text-muted-foreground">
            {quote.author}
          </cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
