import { gsap } from 'gsap';

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeIn = (direction = "up") => ({
  initial: {
    y: direction === "up" ? 40 : -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
});

export const animateText = (element) => {
  gsap.from(element, {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "power4.out",
  });
}; 