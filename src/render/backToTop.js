import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function renderBackToTop() {
  const btn = document.createElement('button')
  btn.id = 'back-to-top'
  btn.setAttribute('aria-label', 'Back to top')
  btn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
  document.body.appendChild(btn)

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

  // Fade in once user scrolls past the hero
  gsap.set(btn, { opacity: 0, pointerEvents: 'none' })
  ScrollTrigger.create({
    start: '400px top',
    onEnter: () => gsap.to(btn, { opacity: 1, pointerEvents: 'auto', duration: 0.3, ease: 'power2.out' }),
    onLeaveBack: () => gsap.to(btn, { opacity: 0, pointerEvents: 'none', duration: 0.2 }),
  })
}
