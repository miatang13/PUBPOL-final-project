// WAREHOUSING — edit only this file for warehousing content
// Image paths are relative to /public. Drop images in /public/images/warehousing/

/** @type {import('./index.js').Field} */

const stretchDescription = `
## Description
Stretch is a mobile manipulator robot designed for warehouse automation, specializing in container unloading. It is designed to maneuver inside a truck or shipping container, and features a robotic arm with a gripper that can pick up and move cases.

## Quick Specs
* **Primary Function:** Case Unloading.
* **Operating Time:** 8 hours. Optional upgrade to 16 hours.
* **Payload Capacity:** 23 kg (50 lbs).
`;

const thorDescription = `
## Description
Placeholder

## Quick Specs
Placeholder
`;


export default {
  field: 'Warehousing',
  jobs: [
    {
      title: 'Container Unloading',
      humanImage: 'public/images/warehousing/container_unloader.png',
      robotImage: 'public/images/warehousing/stretch.jpg',
      // annualIncome: 34000,
      robots: [
        {
          name: 'Stretch',
          company: 'Boston Dynamics',
          description: stretchDescription,
          price: '$300K - $500K',
          image: 'public/images/warehousing/stretch.jpg',
        },
      ],
    },
    {
      title: 'Palletization',
      humanImage: 'public/images/warehousing/palletization.png',
      robotImage: 'public/images/warehousing/thor.jpg',
      annualIncome: 39000,
      robots: [
        {
          name: 'Thor',
          company: 'Standard Bots',
          description: thorDescription,
          price: '$49K+',
          image: 'public/images/warehousing/thor.jpg',
        },
      ],
    },
  ],
}
