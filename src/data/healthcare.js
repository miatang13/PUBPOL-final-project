// HEALTHCARE — edit only this file for healthcare content
// Image paths are relative to /public. Drop images in /public/images/healthcare/

/** @type {import('./index.js').Field} */
export default {
  field: 'Healthcare',
  jobs: [
    {
      title: 'Pharmacy Technician',
      humanImage: 'https://picsum.photos/seed/h1h/600/600',
      robotImage: 'https://picsum.photos/seed/h1r/600/600',
      annualIncome: 37000,
      robots: [
        {
          name: 'Parata Max',
          company: 'Parata Systems',
          description:
            'An automated pharmacy dispensing system that fills, caps, and labels prescription bottles with near-zero error rates.',
          price: '$80,000 – $200,000',
          image: 'https://picsum.photos/seed/h1rb/400/400',
        },
      ],
    },
    {
      title: 'Medical Lab Technician',
      humanImage: 'https://picsum.photos/seed/h2h/600/600',
      robotImage: 'https://picsum.photos/seed/h2r/600/600',
      annualIncome: 55000,
      robots: [
        {
          name: 'Cobas 8000',
          company: 'Roche',
          description:
            'A modular automated analyzer platform that processes thousands of blood and urine samples per hour for routine diagnostics.',
          price: '$500,000+',
          image: 'https://picsum.photos/seed/h2rb/400/400',
        },
      ],
    },
  ],
}
