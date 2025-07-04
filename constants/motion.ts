const MOTION_PROPS = {
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
}

const STAGGER_CONTAINER = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const STAGGER_ITEM = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const CARD_3D = {
  whileHover: {
    rotateY: 5,
    rotateX: 5,
    scale: 1.05,
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  },
}

export { MOTION_PROPS, STAGGER_CONTAINER, STAGGER_ITEM, CARD_3D }
