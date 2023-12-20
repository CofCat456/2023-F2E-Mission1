import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { Section } from '~/types'
import { scrollCenter } from '~/utils'

export function useSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.1,
    smoothTouch: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add(time => lenis.raf(time * 1000))

  gsap.ticker.lagSmoothing(0)

  const scrollTo = (id: Section) => lenis.scrollTo(`#${id}`, { duration: 1.5, easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)), offset: scrollCenter(id) })

  return {
    scrollTo,
  }
}
