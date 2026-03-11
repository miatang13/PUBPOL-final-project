// WAREHOUSING — edit only this file for warehousing content
// Image paths are relative to /public. Drop images in /public/images/warehousing/

/** @type {import('./index.js').Field} */


const warehousingDescription = `
Warehousing and logistics jobs involve the physical movement and organization of goods across a distribution center. A basic workflow might involve unloading a truck, palleting goods and moving them to storage, retrieving goods from storage, picking items for individual orders, and packaging and shipping orders. Businesses can maintain their own warehouses, or outsource to third-party logistics (3PL) providers that operate warehouses on their behalf.

As autonomous mobile robots become standard in warehouses, safety is governed by [**ANSI/RIA R15.08-1-2020**](https://webstore.ansi.org/standards/ria/ansiriar15082020) — the first American National Standard written specifically for industrial mobile robots navigating shared workspaces. It classifies robots into three types (mobile platforms, robots with non-manipulator attachments, and mobile manipulators), and prescribes requirements for collision avoidance, emergency stops, and speed limits. While voluntary, OSHA treats R15.08 as the recognized benchmark for safe practice and can cite employers under the [General Duty Clause](https://www.osha.gov/laws-regs/oshact/section5-duties) for failing to follow it — making compliance effectively mandatory for any warehouse deploying AMRs.
`;


const containerUnloadingDescription = `
When a truck or shipping container arrives at a warehouse, workers must unload **cases** of goods, usually using a conveyor belt to transport cases into the facility. Various solutions exists, including robot arms and autonomous forklifts (for palleted cargo). Unloading is one of the more challenging tasks to automate due to irregularity in case size, weight, and placement within the truck.
`;

const palletizationDescription = `
After cases are unloaded from trucks, they are often stacked on pallets for easy transportation and storage. Palletization (and depalletization) is also done as an outbound process, in which cases are stacked on pallets to be loaded onto trucks. Palletization is generally more structured and easier to automate than unloading, but heterogenous cases add challenges.
`;

const materialTransportDescription = `
Material transport is the process of transporting bulk quantities of goods to different parts of the warehouse. This is commonly done with forklifts, **Autonomous Mobile Robots (AMRs)**, and conveyor belts. This process is critical in **Goods-to-Person (G2P)** systems, in which entire shelves or bins are brought to a stationary human worker for further processing like picking tasks. Material transport is largely automated due to the relative ease of the navigation task involved.
`;

const pickingDescription = `
Picking is the process of selecting and grasping objects from a bin and moving them to another bin or conveyor. Different from case handling tasks like palletization, picking focuses on individual items that may be small, deformable, or otherwise difficult to grasp. One example of a picking task is to select the correct item for an order from a bin of many other items and place it on a conveyor to be sent for packaging. Picking is one of the most challenging tasks in warehouse automation due to the wide variety of items that must be handled.
`;


const stretchDescription = `
## Description
Stretch is a mobile manipulator robot designed for warehouse automation, specializing in container unloading. It is designed to maneuver inside a truck or shipping container, and features a robotic arm with a gripper that can pick up and move cases.

## Quick Specs
* **Primary Function:** Case Unloading.
* **Operating Time:** 8 hours. Optional upgrade to 16 hours.
* **Payload Capacity:** 23 kg.
`;

const thorDescription = `
## Description
Thor is a six-axis collaborative robot arm designed for heavy-duty industrial automation. 
It is designed for a variety of industrial tasks, including palletizing, machine tending, welding, and other pick & place tasks. Palletization is one use case among many for Thor.

## Quick Specs
* **Primary Function:** General-purpose industrial automation.
* **Payload Capacity:** 30 kg.
* **Reach:** 2 m.
`;

const spt1000Description = `
## Description
The SPT-1000 is an autonomous pallet truck that moves pallets around a warehouse without
a human operator. It can pick up, transport, and drop off a wide variety of pallet types,
including closed pallets that most autonomous pallet trucks cannot handle.

## Quick Specs
* **Primary Function:** Autonomous pallet transport and handling.
* **Load Capacity:** 1,000 kg. Optional upgrade to 1,500 kg.
* **Vehicle Width:** 1.2 m.
* **Minimum Aisle Width:** 1,300 mm (4.3 ft).
* **Pallet Compatibility:** Open pallets, closed pallets, double-wing pallets, stringer pallets, cages, and racks.
`;

const sparrowDescription = `
## Description
Sparrow is a robotic arm system that detects, picks, and sorts objects from storage bins to totes that are sent for packaging. It fills the human picker's role in a Goods-to-Person (G2P) system. Sparrow is designed to handle a wide variety of items using suction-cup grippers.

## Quick Specs
* **Primary Function:** Individual item picking and sorting (pre-packaging).
* **Items Supported:** ~65% of Amazon's total product inventory.
* **End Effector:** Suction cup-based gripper with seven actuators.
* **Height:** 2.4 m.
`;


export default {
  field: 'Warehousing',
  description: warehousingDescription,
  jobs: [
    {
      title: 'Container Unloading',
      description: containerUnloadingDescription,
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
      description: palletizationDescription,
      humanImage: 'public/images/warehousing/palletization.png',
      robotImage: 'public/images/warehousing/thor.jpg',
      // annualIncome: 39000,
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
    {
      title: 'Material Transport',
      description: materialTransportDescription,
      humanImage: 'public/images/warehousing/material_transport.png',
      robotImage: 'public/images/warehousing/SEER_SPT-1000.jpg',
      // annualIncome: 39000,
      robots: [
        {
          name: 'SPT-1000',
          company: 'SEER Robotics',
          description: spt1000Description,
          price: 'Not disclosed',
          image: 'public/images/warehousing/SEER_SPT-1000.jpg',
        },
      ],
    },
    {
      title: 'Picking',
      description: pickingDescription,
      humanImage: 'public/images/warehousing/picking.png',
      robotImage: 'public/images/warehousing/sparrow.jpg',
      // annualIncome: 39000,
      robots: [
        {
          name: 'Sparrow',
          company: 'Amazon',
          description: sparrowDescription,
          price: 'Not disclosed',
          image: 'public/images/warehousing/sparrow.jpg',
        },
      ],
    },
  ],
}
