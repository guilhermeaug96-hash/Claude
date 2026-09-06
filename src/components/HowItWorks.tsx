import { motion } from 'framer-motion'
import { steps } from '../data/chocopass'
import { useRevealVariants, useStaggerContainer } from '../hooks/useMotionPreset'

export default function HowItWorks() {
  const reveal = useRevealVariants()
  const stagger = useStaggerContainer()

  return (
    <section id="como-funciona" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-extrabold text-chocolate-dark sm:text-3xl">
          Como funciona
        </h2>

        <motion.ol
          className="grid gap-8 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {steps.map((step) => (
            <motion.li key={step.numero} variants={reveal} className="flex flex-col gap-2">
              <span className="font-display text-2xl font-extrabold text-accent-text">
                {step.numero}
              </span>
              <h3 className="text-lg font-bold text-chocolate-dark">{step.titulo}</h3>
              <p className="max-w-[32ch] text-sm text-muted-foreground">{step.descricao}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
