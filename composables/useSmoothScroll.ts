import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.1,
    smoothTouch: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}
