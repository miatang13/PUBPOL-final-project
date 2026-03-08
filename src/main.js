import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fields } from './data/index.js'
import background from './data/background.js'
import policy from './data/policy.js'
import { renderGrid } from './render/grid.js'
import { renderNav } from './render/nav.js'
import { renderBackToTop } from './render/backToTop.js'
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

// --- Helpers ---

let textSectionCount = 0
function buildTextSection(id, title, paragraphs) {
  textSectionCount++
  const index = String(textSectionCount).padStart(2, '0')
  const section = document.createElement('section')
  section.id = id
  section.className = 'text-section'
  section.innerHTML = `
    <h2 class="text-section__heading"><span class="section-index">${index}</span> ${title}</h2>
    ${paragraphs.map((p) => `<p class="text-section__body">${p}</p>`).join('')}
  `
  return section
}

// --- Init ---

function init() {
  initModal()

  const app = document.getElementById('app')

  app.innerHTML = `
    <header id="hero">
      <h1 id="hero-title">The Automated Workforce</h1>
      <p id="hero-subtitle">Across industries, robots are taking over tasks once performed by humans.<br>Explore who — and what — is replacing them.</p>
      <div id="hero-authors">
        <a class="author-link" href="https://www.michaelpiseno.com/" target="_blank" rel="noopener">Michael Piseno</a>
        <span class="author-sep">&</span>
        <a class="author-link" href="https://www.mia-tang.com/" target="_blank" rel="noopener">Mia Tang</a>
      </div>
    </header>
    <main id="main-content"></main>
  `

  const main = document.getElementById('main-content')

  // Background and Motivation section
  main.appendChild(buildTextSection('section-background', background.title, background.paragraphs))

  // Industry grids
  const gridRoot = document.createElement('div')
  gridRoot.id = 'grid-root'
  main.appendChild(gridRoot)
  renderGrid(fields, gridRoot, (job) => openModal(job))

  // Policy and Geopolitics section
  main.appendChild(buildTextSection('section-policy', policy.title, policy.paragraphs))

  // Side nav + back to top (after sections exist in DOM)
  renderNav(fields)
  renderBackToTop()

  // Animate hero on load
  animateIn('#hero-title', { y: 30, duration: 0.9 })
  animateIn('#hero-subtitle', { y: 20, duration: 0.8, delay: 0.2 })

  // Scroll-reveal
  scrollReveal('.text-section__heading', { y: 20 })
  scrollReveal('.text-section__body', { y: 16 })
  scrollReveal('.field-heading', { y: 24 })
  scrollReveal('.job-card', { y: 32 })
}

init()
