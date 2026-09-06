import { motion } from 'framer-motion'
import { quote } from '../data/chocopass'
import { useRevealVariants } from '../hooks/useMotionPreset'
import './About.css'

export default function About() {
  const reveal = useRevealVariants()

  return (
    <section id="sobre" className="about">
      <div className="container about__grid">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <h2 className="about__title">O que é o ChocoPass</h2>
          <p className="about__text">
            Um passe único que reúne descontos reais de parceiros selecionados
            na costa do cacau — de resorts a fazendas de chocolate, cafés e
            escolas de surf. Sem cupom, sem letra miúda: você mostra o passe e
            economiza na hora, em cada parada da viagem.
          </p>
        </motion.div>

        <motion.blockquote
          className="about__quote"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
        >
          <p>“{quote.message}”</p>
          <cite>{quote.author}</cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
