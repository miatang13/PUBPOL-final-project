import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fields } from './data/index.js'
import { renderGrid } from './render/grid.js'
import { initModal, openModal } from './render/modal.js'

gsap.registerPlugin(ScrollTrigger)

// --- Animation utilities ---

export function animateIn(targets, { y = 20, duration = 0.7, stagger = 0.08, delay = 0 } = {}) {
  gsap.fromTo(
    targets,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, stagger, delay, ease: 'power2.out' }
  )
}

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

// --- Init ---

function init() {
  initModal()

  const app = document.getElementById('app')

  // Hero
  app.innerHTML = `
    <header id="hero">
      <h1 id="hero-title">The Automated Workforce</h1>
      <p id="hero-subtitle">Across industries, robots are taking over tasks once performed by humans.<br>Explore who — and what — is replacing them.</p>
    </header>
    <main id="grid-root"></main>
  `

  // Render all field grids
  const gridRoot = document.getElementById('grid-root')
  renderGrid(fields, gridRoot, (job) => openModal(job))

  // Animate hero on load
  animateIn('#hero-title', { y: 30, duration: 0.9 })
  animateIn('#hero-subtitle', { y: 20, duration: 0.8, delay: 0.2 })

  // Scroll-reveal section headings and cards
  scrollReveal('.field-heading', { y: 24 })
  scrollReveal('.job-card', { y: 32 })
}

init()
