import { motion } from 'framer-motion'
import { useRevealVariants } from '../hooks/useMotionPreset'
import './FinalCta.css'

export default function FinalCta() {
  const reveal = useRevealVariants()

  return (
    <section id="cta" className="final-cta">
      <div className="container">
        <motion.div
          className="final-cta__box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={reveal}
        >
          <h2>Sua viagem ao Cacau Park custa menos do que parece.</h2>
          <p>Garanta seu ChocoPass e comece a economizar no primeiro parceiro que visitar.</p>
          <a href="#top" className="final-cta__btn">
            Quero meu passe
          </a>
        </motion.div>
      </div>
    </section>
  )
}
