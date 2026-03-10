import gsap from 'gsap'
import { marked } from 'marked'

const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

let overlay, panel, closeBtn

/** Call once on page load to inject the modal DOM. */
export function initModal() {
  overlay = document.createElement('div')
  overlay.id = 'modal-overlay'
  overlay.innerHTML = `
    <div id="modal-panel">
      <button id="modal-close" aria-label="Close">&times;</button>
      <div id="modal-content"></div>
    </div>
  `
  document.body.appendChild(overlay)

  panel = overlay.querySelector('#modal-panel')
  closeBtn = overlay.querySelector('#modal-close')

  closeBtn.addEventListener('click', closeModal)
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal() })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal() })
}

/**
 * Open the modal with data for a specific job.
 * @param {import('../data/index.js').Job} job
 */
export function openModal(job) {
  const content = overlay.querySelector('#modal-content')
  content.innerHTML = buildModalContent(job)

  // Show
  overlay.style.display = 'flex'
  gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })
  gsap.fromTo(panel, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })
  document.body.style.overflow = 'hidden'
}

export function closeModal() {
  gsap.to(overlay, {
    opacity: 0, duration: 0.2, ease: 'power2.in',
    onComplete: () => {
      overlay.style.display = 'none'
      document.body.style.overflow = ''
    }
  })
}

/**
 * @param {import('../data/index.js').Job} job
 * @returns {string}
 */
function buildModalContent(job) {
  const robotsHTML = job.robots.map((robot) => `
    <div class="modal-robot">
      <img class="modal-robot__image" src="${robot.image}" alt="${robot.name}" />
      <div class="modal-robot__info">
        <p class="modal-robot__name">${robot.name}</p>
        <p class="modal-robot__company">${robot.company}</p>
        <div class="modal-robot__description">${marked.parse(robot.description)}</div>
        <p class="modal-robot__price">Price: ${robot.price}</p>
      </div>
    </div>
  `).join('')

  return `
    <div class="modal-header">
      <h2 class="modal-job-title">${job.title}</h2>
      ${job.description ? `<div class="modal-job-description">${marked.parse(job.description)}</div>` : ''}
      ${job.annualIncome != null ? `<p class="modal-income">Human annual income: ${fmt.format(job.annualIncome)}</p>` : ''}
    </div>
    <div class="modal-robots">
      <h3 class="modal-robots-heading">Robots</h3>
      ${robotsHTML}
    </div>
  `
}
