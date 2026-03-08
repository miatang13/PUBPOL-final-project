// RETAIL — edit only this file for retail content
// Image paths are relative to /public. Drop images in /public/images/retail/

/** @type {import('./index.js').Field} */
export default {
  field: 'Retail',
  jobs: [
    {
      title: 'Cashier',
      humanImage: 'https://picsum.photos/seed/r1h/600/600',
      robotImage: 'https://picsum.photos/seed/r1r/600/600',
      annualIncome: 28000,
      robots: [
        {
          name: 'Dash',
          company: 'Standard AI',
          description:
            'An autonomous checkout system using computer vision to identify items and process payments without human cashiers.',
          price: 'SaaS model, ~$2,500/month',
          image: 'https://picsum.photos/seed/r1rb/400/400',
        },
      ],
    },
    {
      title: 'Shelf Stocker',
      humanImage: 'https://picsum.photos/seed/r2h/600/600',
      robotImage: 'https://picsum.photos/seed/r2r/600/600',
      annualIncome: 29000,
      robots: [
        {
          name: 'Tally',
          company: 'Simbe Robotics',
          description:
            'An autonomous inventory robot that roams store aisles to audit shelf stock levels, pricing accuracy, and product placement.',
          price: '$35,000/year (lease)',
          image: 'https://picsum.photos/seed/r2rb/400/400',
        },
      ],
    },
  ],
}
