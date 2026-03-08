// HEALTHCARE — edit only this file for healthcare content
// Image paths are relative to /public. Drop images in /public/images/healthcare/

const moxiDescription = `## **Diligent Robotics | Moxi**

**The Goal:** To alleviate the clinical burden on nurses and pharmacy staff by automating non-patient-facing logistical tasks, allowing healthcare professionals to focus on high-value patient care.

**The Tech:** Moxi is a sophisticated mobile manipulation robot (MMR) that recently upgraded to its **2.0 platform** in early 2026. Powered by the **NVIDIA IGX Thor** platform (built on Blackwell architecture), Moxi 2.0 features 10x the computing power of its predecessor. This "Physical AI" system uses a robot foundation model and a suite of LiDAR and vision sensors to perform complex tasks like navigating crowded hospital corridors, opening heavy fire doors, and even calling elevators autonomously. Its signature compliant robotic arm and gripper allow it to securely handle lab samples, medication bins, and PPE, while its expressive, "heart-eyes" LED face ensures a socially intelligent and friendly presence in high-stress clinical environments.

**The Impact:** Moxi successfully addresses the "chicken-and-egg" data problem in robotics by leveraging over **1.25 million real-world deliveries** to refine its autonomy. In active hospital deployments, Moxi saves nurses and clinical staff over 575,000 hours of labor annually, returning up to **30% of a nurse's shift** that would otherwise be spent on "hunting and gathering" supplies. This reduction in physical strain and cognitive load directly combats clinician burnout and improves hospital-wide operational efficiency, with most facilities seeing a return on investment within the first year.

### **Quick Specs**
* **Primary Function:** Autonomous hospital logistics and mobile manipulation.
* **Onboard Intelligence:** NVIDIA IGX Thor / Blackwell-powered AI Foundation Model.
* **Payload Handling:** Integrated storage drawers with a 7-DOF compliant robotic arm.
* **Navigation:** Socially intelligent SLAM; infrastructure-free (uses existing Wi-Fi).
* **Social Features:** Expressive LED head/face with AI-driven human-robot interaction (HRI).`;

const t3Description = `## **Aethon | T3 / T3XL**

**The Goal:** To automate the heavy-duty transport of carts and supplies in bustling healthcare and hospitality environments, eliminating the physical strain of manual hauling.

**The Tech:** The T3 is a smart autonomous mobile robot (AMR) distinguished by its **4-wheel drive omnidirectional locomotion**, which allows it to turn within its own footprint and navigate through tight corridors with ease. Unlike traditional AGVs, it requires no infrastructure—no magnets, tape, or beacons—using a sophisticated suite of multi-LiDAR, sonar, and infrared sensors for real-time SLAM (Simultaneous Localization and Mapping). The system is designed for **full autonomy**, including the ability to call elevators, open fire doors, and automatically pick up and drop off standard-sized carts by driving underneath and securing them with a mechanical lift.

**The Impact:** By handling payloads of up to **1,000 lbs (T3XL model)**, Aethon's T3 acts as a "muscle multiplier" for hospital staff. It enables 24/7 delivery of linens, meals, and waste, ensuring that clinicians aren't pulled away from patient care to perform logistics tasks. Its ability to perform "milk runs" (multi-stop deliveries) and respond to ad-hoc requests via touchscreen or mobile devices results in a significant increase in operational throughput and a safer, less congested workplace.

### **Quick Specs**
* **Primary Function:** Autonomous cart transport and heavy-load material handling.
* **Payload Capacity:** 750 lbs (T3) or 1,000 lbs (T3XL).
* **Agility:** 4WD Omnidirectional drive; capable of lateral and diagonal travel.
* **Battery:** LiFePO4 technology with ~9-12 hours of runtime and auto-docking.
* **System Integration:** Fully integrates with building security, door, and elevator systems.`;

const lightStrikeDescription = `## **Xenex | LightStrike (Pulsed Xenon UV Robot)**

**The Goal:** To eliminate the "invisible" threat of healthcare-associated infections (HAIs) by providing rapid, broad-spectrum disinfection of high-touch surfaces in clinical environments.

**The Tech:** The LightStrike robot utilizes a patented **pulsed xenon UV-C lamp** that generates high-intensity, broad-spectrum ultraviolet light. Unlike traditional mercury-bulb UV systems that emit a single continuous wavelength, LightStrike produces thousands of intense flashes per minute across the entire germicidal spectrum (200-320nm). This "pulsed" approach allows the robot to deactivate pathogens—including C. diff, MRSA, and SARS-CoV-2—by damaging their DNA and cell walls in as little as two to five minutes per position. It is equipped with 360-degree motion sensors that instantly shut down the lamp if someone enters the room, ensuring a "zero-exposure" safety environment for staff and patients.

**The Impact:** By integrating LightStrike into daily terminal cleaning protocols, hospitals have reported up to a **70% reduction in infection rates** for multi-drug resistant organisms. The robot acts as a critical safety net for Environmental Services (EVS) teams, reaching areas that manual chemical wiping might miss. Its speed allows rooms to be turned over quickly, meaning hospitals can maintain high disinfection standards without slowing down patient admissions or surgical schedules.

### **Quick Specs**
* **Primary Function:** High-intensity, pulsed-xenon UV disinfection.
* **Spectrum:** Broad-spectrum UV (200nm to 320nm).
* **Speed:** 2–5 minute disinfection cycles per room position.
* **Safety:** Triple-sensor motion detection and emergency stop capabilities.
* **Connectivity:** WiFi/Cellular enabled for real-time reporting and usage tracking.`;

/** @type {import('./index.js').Field} */
export default {
  field: 'Healthcare',
  jobs: [
    {
      title: 'Clinical Support Technician',
      humanImage: 'images/healthcare/clinical_support_tech.png',
      robotImage: 'images/healthcare/moxi.png',
      annualIncome: 37000,
      robots: [
        {
          name: 'Moxi',
          company: 'Diligent Robotics',
          description: moxiDescription,
          price: '$80,000 – $200,000',
          image: 'images/healthcare/moxi.png',
        },
      ],
    },
    {
      title: 'Hospital Transporter',
      humanImage: 'images/healthcare/hospital_transport_cart.png',
      robotImage: 'images/healthcare/t3.png',
      annualIncome: 55000,
      robots: [
        {
          name: 'T3',
          company: 'Aethon',
          description: t3Description,
          image: 'images/healthcare/t3.png',
        },
      ],
    },
    {
      title: 'Environmental Services Technician',
      humanImage: 'images/healthcare/environmental_services_tech.png',
      robotImage: 'images/healthcare/lightstrike.png',
      annualIncome: 55000,
      robots: [
        {
          name: 'LightStrike',
          company: 'Xenex',
          description: lightStrikeDescription,
          image: 'images/healthcare/lightstrike.png',
        },
      ],
    },
  ],
}
