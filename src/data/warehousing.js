// WAREHOUSING — edit only this file for warehousing content
// Image paths are relative to /public. Drop images in /public/images/warehousing/

/** @type {import('./index.js').Field} */
export default {
  field: 'Warehousing',
  jobs: [
    {
      title: 'Order Picker',
      humanImage: '/images/warehousing/picker-human.jpg',
      robotImage: '/images/warehousing/picker-robot.jpg',
      annualIncome: 34000,
      robots: [
        {
          name: 'Sparrow',
          company: 'Amazon Robotics',
          description:
            'Sparrow is a robotic arm that detects, selects, and handles individual products across Amazon\'s inventory of hundreds of millions of items.',
          price: 'Unlisted (est. $1M+)',
          image: '/images/robots/sparrow.jpg',
        },
      ],
    },
    {
      title: 'Forklift Operator',
      humanImage: '/images/warehousing/forklift-human.jpg',
      robotImage: '/images/warehousing/forklift-robot.jpg',
      annualIncome: 39000,
      robots: [
        {
          name: 'Quicktron AMR',
          company: 'Quicktron',
          description:
            'Autonomous mobile robots that navigate warehouse floors without fixed infrastructure, transporting pallets and shelving units.',
          price: '$30,000 – $80,000',
          image: '/images/robots/quicktron.jpg',
        },
      ],
    },
  ],
}
