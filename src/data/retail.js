// RETAIL — edit only this file for retail content
// Image paths are relative to /public. Drop images in /public/images/retail/

/** @type {import('./index.js').Field} */
export default {
  field: 'Retail',
  jobs: [
    {
      title: 'Cashier',
      humanImage: '/images/retail/cashier-human.jpg',
      robotImage: '/images/retail/cashier-robot.jpg',
      annualIncome: 28000,
      robots: [
        {
          name: 'Dash',
          company: 'Standard AI',
          description:
            'An autonomous checkout system using computer vision to identify items and process payments without human cashiers.',
          price: 'SaaS model, ~$2,500/month',
          image: '/images/robots/dash.jpg',
        },
      ],
    },
    {
      title: 'Shelf Stocker',
      humanImage: '/images/retail/stocker-human.jpg',
      robotImage: '/images/retail/stocker-robot.jpg',
      annualIncome: 29000,
      robots: [
        {
          name: 'Tally',
          company: 'Simbe Robotics',
          description:
            'An autonomous inventory robot that roams store aisles to audit shelf stock levels, pricing accuracy, and product placement.',
          price: '$35,000/year (lease)',
          image: '/images/robots/tally.jpg',
        },
      ],
    },
  ],
}
