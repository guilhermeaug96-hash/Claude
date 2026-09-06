import { motion } from 'framer-motion'
import { steps } from '../data/chocopass'
import { useRevealVariants, useStaggerContainer } from '../hooks/useMotionPreset'
import './HowItWorks.css'

export default function HowItWorks() {
  const reveal = useRevealVariants()
  const stagger = useStaggerContainer()

  return (
    <section id="como-funciona" className="how">
      <div className="container">
        <h2 className="how__title">Como funciona</h2>

        <motion.ol
          className="how__list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {steps.map((step) => (
            <motion.li key={step.numero} className="how__step" variants={reveal}>
              <span className="how__number">{step.numero}</span>
              <h3>{step.titulo}</h3>
              <p>{step.descricao}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
