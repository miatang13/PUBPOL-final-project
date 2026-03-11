// AGRICULTURE — edit only this file for agriculture content
// Image paths are relative to /public. Drop images in /public/images/agriculture/

/** @type {import('./index.js').Field} */


const agricultureDescription = `
We focus on specialty crop farming, which the USDA defines as: fruits and vegetables, tree nuts, dried fruits, horticulture, and nursery crops (including floriculture). Specialty crops are interesting because they rely heavily on human labor and are a frontier for automation. They are different from "commodity crops", which are standardized and undifferentiated by producer. Examples of commodity crops include wheat, rice, and soybeans. Commodity crops are often grown at mass scale in rows, and are already largely automated, especially at the harvesting stage.

Farming specialty crops involves various stages, including soil preparation and planting, crop monitoring, spraying and weeding, and harvesting.
`;


const cropMonitoringDescription = `
Crop monitoring is the process of using sensors and data analysis to track the health and growth of crops. This can include monitoring soil moisture, nutrient levels, pest infestations, and overall plant health. Drones equipped with sensors are commonly used for crop monitoring, providing farmers with valuable insights to optimize irrigation, fertilization, and pest control.
`;

const harvestingDescription = `
Harvesting requires selecting crops that are ready, and quickly but delicately picking them. This is often done by teams of humans who work very quickly since they are often paid by quantity, not hourly. Harvesting requires long hours in the heat, in stooped or kneeled positions, and exposure to pesticide residue. Harvesting is a very difficult problem to automate. It requires speed, delicate handling, and active perception to look for crops occluded by foliage. Another challenge is that each crop is different, and current automation solutions are usually specialized for specific crops.
`;


const mavic3MDescription = `
## Description
The Mavic 3M is a drone designed for agricultural applications, particularly crop monitoring. It replaces the traditional "crop scout", a worker who physically walks fields to inspect plants for disease, pests, and nutrient deficiencies. DJI is a Chinese manufacturer facing potential US regulatory hurdles. 

## Quick Specs
* **Primary Function:** Crop Monitoring.
* **Max Flight Time:** 43 minutes.
* **Max land coverage per flight:** 200 hectares.
* **Camera System:** RGB and multispectral (G/R/RE/NIR) cameras.
`;

const agrobotESeriesDescription = `
## Description
The E-Series is an autonomous harvesting robot for harvesting strawberries. It is configurable with up to 24 robotics arms on a mobile base that navigates through a greenhouse or field.

## Quick Specs
* **Primary Function:** Strawberry harvesting.
* **Navigation:** Autonomous with LiDAR obstacle detection.
`;


export default {
  field: 'Agriculture',
  description: agricultureDescription,
  jobs: [
    {
      title: 'Crop Monitoring',
      description: cropMonitoringDescription,
      humanImage: 'public/images/agriculture/crop_monitoring.png',
      robotImage: 'public/images/agriculture/DJI_Mavic3M.jpg',
      // annualIncome: 32000,
      robots: [
        {
          name: 'Mavic 3M',
          company: 'DJI',
          description: mavic3MDescription,
          price: '$5K',
          image: 'public/images/agriculture/DJI_Mavic3M.jpg',
        },
      ],
    },
    {
      title: 'Harvesting',
      description: harvestingDescription,
      humanImage: 'public/images/agriculture/harvesting.png',
      robotImage: 'public/images/agriculture/agrobot_E-series.jpg',
      // annualIncome: 30000,
      robots: [
        {
          name: 'E-Series',
          company: 'Agrobot',
          description: agrobotESeriesDescription,
          price: 'Not disclosed, pre-commercial stage',
          image: 'public/images/agriculture/agrobot_E-series.jpg',
        },
      ],
    },
  ],
}
