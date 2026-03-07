import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// --- Utility: fade + slide in a batch of elements with stagger ---
// Usage: animateIn('.my-class', { y: 30, stagger: 0.1 })
export function animateIn(targets, { y = 20, duration = 0.7, stagger = 0.08, delay = 0 } = {}) {
  gsap.fromTo(
    targets,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, stagger, delay, ease: 'power2.out' }
  )
}

// --- Utility: trigger animateIn when element scrolls into view ---
// Usage: scrollReveal('.section', { y: 40 })
export function scrollReveal(targets, options = {}) {
  gsap.utils.toArray(targets).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: options.y ?? 30 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })
}

// --- Page init ---
function init() {
  // Add your page setup and animations here
}

init()
