/**
 * Renders a robot directory section listing all robots and their companies.
 * Each entry navigates to the industry section containing the robot.
 * @param {import('../data/index.js').Field[]} fields
 * @returns {HTMLElement}
 */
export function renderDirectory(fields) {
  const section = document.createElement('section')
  section.id = 'section-directory'
  section.className = 'directory-section'

  section.innerHTML = `<h2 class="directory-heading">Robot Directory</h2>`

  const grid = document.createElement('div')
  grid.className = 'directory-grid'

  fields.forEach((fieldData) => {
    const targetId = `section-${fieldData.field.toLowerCase()}`

    const group = document.createElement('div')
    group.className = 'directory-group'

    group.innerHTML = `<h3 class="directory-group__field">${fieldData.field}</h3>`

    const list = document.createElement('ul')
    list.className = 'directory-list'

    fieldData.jobs.forEach((job) => {
      job.robots.forEach((robot) => {
        const li = document.createElement('li')
        li.className = 'directory-item'

        const link = document.createElement('a')
        link.className = 'directory-link'
        link.href = `#${targetId}`
        link.innerHTML = `
          <span class="directory-link__robot">${robot.name}</span>
          <span class="directory-link__company">${robot.company}</span>
        `

        link.addEventListener('click', (e) => {
          e.preventDefault()
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
        })

        li.appendChild(link)
        list.appendChild(li)
      })
    })

    group.appendChild(list)
    grid.appendChild(group)
  })

  section.appendChild(grid)
  return section
}
