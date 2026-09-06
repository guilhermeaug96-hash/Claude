import { useReducedMotion, type Variants } from 'framer-motion'

/** Shared entrance variants for scroll-triggered section reveals. */
export function useRevealVariants(): Variants {
  const reduce = useReducedMotion()

  if (reduce) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    }
  }

  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

export function useStaggerContainer(staggerChildren = 0.12): Variants {
  const reduce = useReducedMotion()

  if (reduce) {
    return { hidden: {}, visible: {} }
  }

  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren: 0.05 },
    },
  }
}
