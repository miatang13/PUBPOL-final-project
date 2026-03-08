// MANUFACTURING — edit only this file for manufacturing content
// Image paths are relative to /public. Drop images in /public/images/manufacturing/

/** @type {import('./index.js').Field} */
export default {
  field: 'Manufacturing',
  jobs: [
    {
      title: 'Welding Technician',
      humanImage: '/images/manufacturing/welder-human.jpg',
      robotImage: '/images/manufacturing/welder-robot.jpg',
      annualIncome: 47000,
      robots: [
        {
          name: 'FANUC Arc Mate',
          company: 'FANUC',
          description:
            'High-speed arc welding robot with a slim arm design, capable of accessing tight spaces on complex assemblies.',
          price: '$75,000 – $150,000',
          image: '/images/robots/fanuc-arcmate.jpg',
        },
      ],
    },
    {
      title: 'Assembly Line Worker',
      humanImage: '/images/manufacturing/assembly-human.jpg',
      robotImage: '/images/manufacturing/assembly-robot.jpg',
      annualIncome: 37000,
      robots: [
        {
          name: 'YuMi',
          company: 'ABB',
          description:
            'A dual-arm collaborative robot designed for small-parts assembly, working safely alongside humans without safety caging.',
          price: '$40,000 – $80,000',
          image: '/images/robots/yumi.jpg',
        },
      ],
    },
  ],
}
