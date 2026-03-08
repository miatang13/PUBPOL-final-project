/**
 * Renders a fixed left side nav.
 * @param {import('../data/index.js').Field[]} fields
 */
export function renderNav(fields) {
  const items = [
    { label: 'Background', id: 'section-background' },
    ...fields.map((f) => ({
      label: f.field,
      id: `section-${f.field.toLowerCase()}`,
    })),
    { label: 'Policy & Geopolitics', id: 'section-policy' },
  ]

  const nav = document.createElement('nav')
  nav.id = 'side-nav'
  nav.innerHTML = items
    .map((item) => `<a class="nav-link" href="#${item.id}" data-target="${item.id}">${item.label}</a>`)
    .join('')

  document.body.prepend(nav)

  // Smooth scroll on click
  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      document.getElementById(link.dataset.target)?.scrollIntoView({ behavior: 'smooth' })
    })
  })

  // Highlight active section as user scrolls
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nav.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('nav-link--active'))
          nav.querySelector(`[data-target="${entry.target.id}"]`)?.classList.add('nav-link--active')
        }
      })
    },
    { threshold: 0.25 }
  )

  // Observe after a tick so all sections exist in the DOM
  requestAnimationFrame(() => {
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })
}
