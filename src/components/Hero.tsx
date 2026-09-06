import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { brand } from '../data/chocopass'
import './Hero.css'

export default function Hero() {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.1 },
    },
  }

  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p className="hero__kicker" variants={item}>
            Costa do Cacau · Bahia
          </motion.p>

          <motion.h1 className="hero__title" variants={item}>
            {brand.tagline}
          </motion.h1>

          <motion.p className="hero__subtitle" variants={item}>
            {brand.description}
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#cta" className="hero__primary-btn">
              Quero meu passe
            </a>
            <a href="#parceiros" className="hero__secondary-btn">
              Ver parceiros
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1000&q=80"
            alt="Chocolate artesanal produzido na costa do cacau"
          />
          <div className="hero__visual-drip" aria-hidden="true" />
          <div className="hero__stat-card">
            <span className="hero__stat-number">4.9</span>
            <span className="hero__stat-label">avaliação média dos parceiros</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
