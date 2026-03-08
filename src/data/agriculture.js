// AGRICULTURE — edit only this file for agriculture content
// Image paths are relative to /public. Drop images in /public/images/agriculture/

/** @type {import('./index.js').Field} */
export default {
  field: 'Agriculture',
  jobs: [
    {
      title: 'Crop Harvester',
      humanImage: '/images/agriculture/harvester-human.jpg',
      robotImage: '/images/agriculture/harvester-robot.jpg',
      annualIncome: 32000,
      robots: [
        {
          name: 'Agrobot E-Series',
          company: 'Agrobot',
          description:
            'An autonomous strawberry harvesting robot with 24 robotic arms and computer vision to identify ripe fruit, picking up to 4,000 strawberries per hour.',
          price: '$100,000 – $150,000',
          image: '/images/robots/agrobot.jpg',
        },
      ],
    },
    {
      title: 'Fruit Picker',
      humanImage: '/images/agriculture/picker-human.jpg',
      robotImage: '/images/agriculture/picker-robot.jpg',
      annualIncome: 30000,
      robots: [
        {
          name: 'Tortuga AgTech Rover',
          company: 'Tortuga AgTech',
          description:
            'An AI-powered harvesting robot for berry crops that navigates autonomously between rows and picks only ripe fruit.',
          price: 'Lease-based, undisclosed',
          image: '/images/robots/tortuga.jpg',
        },
      ],
    },
  ],
}
