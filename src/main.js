import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fields } from './data/index.js'
import { renderGrid } from './render/grid.js'
import { renderNav } from './render/nav.js'
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

function buildTextSection(id, title, paragraphs) {
  const section = document.createElement('section')
  section.id = id
  section.className = 'text-section'
  section.innerHTML = `
    <h2 class="text-section__heading">${title}</h2>
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
    </header>
    <main id="main-content"></main>
  `

  const main = document.getElementById('main-content')

  // Background and Motivation section
  main.appendChild(buildTextSection('section-background', 'Background and Motivation', [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et tempus feugiat. Nullam varius turpis in molestie tincidunt. Quisque ornare risus quis ligula vestibulum, sed cursus enim blandit.',
  ]))

  // Industry grids
  const gridRoot = document.createElement('div')
  gridRoot.id = 'grid-root'
  main.appendChild(gridRoot)
  renderGrid(fields, gridRoot, (job) => openModal(job))

  // Policy and Geopolitics section
  main.appendChild(buildTextSection('section-policy', 'Policy and Geopolitics', [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    'Sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo, at varius nisi interdum id.',
  ]))

  // Side nav (after sections exist in DOM)
  renderNav(fields)

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
