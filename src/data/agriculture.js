// AGRICULTURE — edit only this file for agriculture content
// Image paths are relative to /public. Drop images in /public/images/agriculture/

/** @type {import('./index.js').Field} */
export default {
  field: 'Agriculture',
  jobs: [
    {
      title: 'Crop Harvester',
      humanImage: 'https://picsum.photos/seed/a1h/600/600',
      robotImage: 'https://picsum.photos/seed/a1r/600/600',
      annualIncome: 32000,
      robots: [
        {
          name: 'Agrobot E-Series',
          company: 'Agrobot',
          description:
            'An autonomous strawberry harvesting robot with 24 robotic arms and computer vision to identify ripe fruit, picking up to 4,000 strawberries per hour.',
          price: '$100,000 – $150,000',
          image: 'https://picsum.photos/seed/a1rb/400/400',
        },
      ],
    },
    {
      title: 'Fruit Picker',
      humanImage: 'https://picsum.photos/seed/a2h/600/600',
      robotImage: 'https://picsum.photos/seed/a2r/600/600',
      annualIncome: 30000,
      robots: [
        {
          name: 'Tortuga AgTech Rover',
          company: 'Tortuga AgTech',
          description:
            'An AI-powered harvesting robot for berry crops that navigates autonomously between rows and picks only ripe fruit.',
          price: 'Lease-based, undisclosed',
          image: 'https://picsum.photos/seed/a2rb/400/400',
        },
      ],
    },
  ],
}
