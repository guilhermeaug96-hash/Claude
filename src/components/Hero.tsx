import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, type Variants } from 'framer-motion'
import { brand } from '../data/chocopass'
import { Button } from './ui/button'
import ImageWithFallback from './ImageWithFallback'

export default function Hero() {
  const reduce = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 })

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce) return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handlePointerLeave() {
    px.set(0)
    py.set(0)
  }

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.1 } },
  }

  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }

  return (
    <section id="top" className="overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p variants={item} className="mb-4 text-sm font-bold text-accent-text">
            Costa do Cacau · Bahia
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-[16ch] text-4xl font-extrabold leading-[1.05] text-chocolate-dark sm:text-5xl lg:text-6xl"
          >
            {brand.tagline}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
            {brand.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#cta">Quero meu passe</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#parceiros">Ver parceiros</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px] md:mx-0 md:justify-self-end"
          style={{ perspective: 1200 }}
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-chocolate-dark/30"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1000&q=80"
              alt="Chocolate artesanal produzido na costa do cacau"
              fallbackLabel="Chocolate artesanal · Costa do Cacau"
              className="h-full w-full"
            />
          </motion.div>

          <div className="absolute -bottom-6 -left-6 flex flex-col rounded-2xl border border-border bg-card px-6 py-4 shadow-lg">
            <span className="font-display text-3xl font-extrabold text-chocolate-dark">4.9</span>
            <span className="max-w-[16ch] text-xs text-muted-foreground">
              avaliação média dos parceiros
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
