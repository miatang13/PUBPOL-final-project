// HEALTHCARE — edit only this file for healthcare content
// Image paths are relative to /public. Drop images in /public/images/healthcare/

/** @type {import('./index.js').Field} */
export default {
  field: 'Healthcare',
  jobs: [
    {
      title: 'Pharmacy Technician',
      humanImage: '/images/healthcare/pharmacy-tech-human.jpg',
      robotImage: '/images/healthcare/pharmacy-tech-robot.jpg',
      annualIncome: 37000,
      robots: [
        {
          name: 'Parata Max',
          company: 'Parata Systems',
          description:
            'An automated pharmacy dispensing system that fills, caps, and labels prescription bottles with near-zero error rates.',
          price: '$80,000 – $200,000',
          image: '/images/robots/parata-max.jpg',
        },
      ],
    },
    {
      title: 'Medical Lab Technician',
      humanImage: '/images/healthcare/lab-tech-human.jpg',
      robotImage: '/images/healthcare/lab-tech-robot.jpg',
      annualIncome: 55000,
      robots: [
        {
          name: 'Cobas 8000',
          company: 'Roche',
          description:
            'A modular automated analyzer platform that processes thousands of blood and urine samples per hour for routine diagnostics.',
          price: '$500,000+',
          image: '/images/robots/cobas-8000.jpg',
        },
      ],
    },
  ],
}
