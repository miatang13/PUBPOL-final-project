const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

/**
 * Builds the full grid section for all fields and appends it to a container.
 * @param {import('../data/index.js').Field[]} fields
 * @param {HTMLElement} container
 * @param {(job: import('../data/index.js').Job) => void} onJobClick
 */
export function renderGrid(fields, container, onJobClick) {
  fields.forEach((fieldData) => {
    const section = document.createElement('section')
    section.id = `section-${fieldData.field.toLowerCase()}`
    section.className = 'field-section'
    section.dataset.field = fieldData.field

    const heading = document.createElement('h2')
    heading.className = 'field-heading'
    heading.textContent = fieldData.field
    section.appendChild(heading)

    const grid = document.createElement('div')
    grid.className = 'job-grid'

    fieldData.jobs.forEach((job) => {
      const card = buildCard(job)
      card.addEventListener('click', () => onJobClick(job))
      grid.appendChild(card)
    })

    section.appendChild(grid)
    container.appendChild(section)
  })
}

/**
 * @param {import('../data/index.js').Job} job
 * @returns {HTMLElement}
 */
function buildCard(job) {
  const card = document.createElement('div')
  card.className = 'job-card'

  card.innerHTML = `
    <div class="job-card__image-wrap">
      <img class="job-card__img job-card__img--human" src="${job.humanImage}" alt="${job.title} — human worker" />
      <img class="job-card__img job-card__img--robot" src="${job.robotImage}" alt="${job.title} — robot" />
    </div>
    <div class="job-card__footer">
      <span class="job-card__title">${job.title}</span>
      <span class="job-card__income">${fmt.format(job.annualIncome)} / yr</span>
    </div>
  `

  return card
}
