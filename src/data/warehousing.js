// WAREHOUSING — edit only this file for warehousing content
// Image paths are relative to /public. Drop images in /public/images/warehousing/

/** @type {import('./index.js').Field} */
export default {
  field: 'Warehousing',
  jobs: [
    {
      title: 'Order Picker',
      humanImage: 'https://picsum.photos/seed/w1h/600/600',
      robotImage: 'https://picsum.photos/seed/w1r/600/600',
      annualIncome: 34000,
      robots: [
        {
          name: 'Sparrow',
          company: 'Amazon Robotics',
          description:
            'Sparrow is a robotic arm that detects, selects, and handles individual products across Amazon\'s inventory of hundreds of millions of items.',
          price: 'Unlisted (est. $1M+)',
          image: 'https://picsum.photos/seed/w1rb/400/400',
        },
      ],
    },
    {
      title: 'Forklift Operator',
      humanImage: 'https://picsum.photos/seed/w2h/600/600',
      robotImage: 'https://picsum.photos/seed/w2r/600/600',
      annualIncome: 39000,
      robots: [
        {
          name: 'Quicktron AMR',
          company: 'Quicktron',
          description:
            'Autonomous mobile robots that navigate warehouse floors without fixed infrastructure, transporting pallets and shelving units.',
          price: '$30,000 – $80,000',
          image: 'https://picsum.photos/seed/w2rb/400/400',
        },
      ],
    },
  ],
}
