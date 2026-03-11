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

const alettaDescription = `## **Vitestro | Aletta**

**The Goal:** To standardize and automate the process of blood drawing, addressing the global shortage of phlebotomists while improving the accuracy and comfort of the patient experience.

**The Tech:** Aletta is an autonomous venipuncture device that integrates **AI-driven ultrasound** with sophisticated infrared (IR) multi-spectral imaging to create a high-precision map of a patient's veins. This "dual-mode" visualization allows the system to identify the optimal insertion point in 3D space with sub-millimeter accuracy. Once the target is locked, a robotic needle-insertion mechanism—guided by real-time force feedback sensors—performs the draw with consistent pressure and depth. The system is designed as a self-contained kiosk, featuring an automated tourniquet, integrated skin disinfection, and a labeling system that secures the sample immediately to eliminate human labeling errors.

**The Impact:** By automating the most common invasive medical procedure, Aletta reduces the variability inherent in manual blood draws, which often require multiple "sticks" in difficult patients. In clinical trials, the system has demonstrated high success rates on the first attempt, significantly lowering patient anxiety and procedural time. For healthcare facilities, Aletta enables a "high-throughput" phlebotomy model where one technician can oversee multiple autonomous stations, drastically increasing lab efficiency and reducing operational costs.

### **Quick Specs**
* **Primary Function:** Autonomous robotic venipuncture (blood drawing).
* **Imaging Suite:** AI-powered ultrasound + multi-spectral infrared (IR) sensors.
* **Accuracy:** Sub-millimeter robotic needle positioning with real-time tracking.
* **Safety:** Fully automated disinfection and force-sensing needle retraction.
* **Workflow:** Integrated barcode labeling and WMS/LIS (Lab Information System) syncing.`;

const artasDescription = `## **Restoration Robotics | ARTAS iX**

**The Goal:** To eliminate the manual fatigue and variability of hair restoration surgery by automating the identification and extraction of follicular units with robotic precision.

**The Tech:** The ARTAS iX is a sophisticated computer-assisted system that utilizes **high-definition stereoscopic vision** to analyze the scalp at a rate of 60 times per second. Its AI algorithms monitor the characteristics of each hair follicle—including angle, orientation, and density—to select the most viable units for harvesting. The system features a 7-DOF (Degrees of Freedom) robotic arm that performs minimally invasive **Follicular Unit Extraction (FUE)** with sub-millimeter accuracy. This "closed-loop" system also includes a site-making function, which uses the same robotic precision to create recipient sites that avoid damaging existing healthy hair.

**The Impact:** By automating the most tedious and repetitive parts of the procedure, ARTAS iX ensures 100% consistency from the first graft to the last, a feat nearly impossible for a human surgeon during an 8-hour session. For the patient, this results in significantly reduced procedure times, virtually no linear scarring, and a more natural-looking hair distribution. The system transforms hair restoration from a labor-intensive craft into a predictable, data-driven medical procedure that maximizes graft survival rates.

### **Quick Specs**
* **Primary Function:** Autonomous follicular unit extraction (FUE) and site making.
* **Imaging Suite:** High-definition 3D stereoscopic vision with 44-micron resolution.
* **Robotic Hardware:** 7-axis medical-grade robotic arm.
* **Speed:** Capable of harvesting over 1,000 grafts per hour.
* **Safety:** Real-time skin-movement tracking and force-sensing needle retraction.`;

const yomiDescription = `## **Neocis | Yomi**

**The Goal:** To eliminate the manual variability of dental implant surgery by providing robotic guidance that ensures perfectly centered, angled, and deepened implants every time.

**The Tech:** Yomi is the first and only FDA-cleared robotic device for dental implant surgery, utilizing a specialized **haptic guidance system** that acts as a "GPS for the drill." Unlike traditional static surgical guides that block a clinician's view, Yomi provides physical feedback to the surgeon’s hand, preventing the drill from deviating from the pre-planned 3D surgical path. The system integrates high-resolution CT scans with proprietary software to map the patient's anatomy in real-time, allowing for "on-the-fly" plan adjustments if clinical conditions change mid-procedure. Its multi-jointed robotic arm tracks the patient's head movements continuously, ensuring the drill tip remains precisely calibrated to the jaw's position.

**The Impact:** By transitioning dental surgery from freehand execution to robotic assistance, Yomi significantly reduces the risk of nerve damage or sinus complications while enabling more frequent use of minimally invasive, "flapless" techniques. For the patient, this translates to smaller incisions, less postoperative pain, and faster recovery times. For the dental practice, the system provides a level of digital accuracy and procedural predictability that shortens surgery duration and ensures a higher success rate for complex full-arch restorations.

### **Quick Specs**
* **Primary Function:** Robot-assisted dental implant surgery and surgical planning.
* **Guidance Type:** Haptic (physical feedback) + multi-sensory visual/audio alerts.
* **Onboard Intelligence:** Real-time patient tracking and 3D CT-to-patient registration.
* **Clinical Clearance:** FDA-cleared for both partially edentulous and fully edentulous patients.
* **Workflow:** Digital end-to-end integration from CT scan to final crown placement.`;

const healthcareDescription = `
Healthcare is one of the most labor-intensive industries, with clinical staff spending a significant portion of their shifts on non-patient-facing tasks like transporting supplies, disinfecting rooms, and drawing blood. Chronic staffing shortages and clinician burnout have accelerated interest in robotic solutions across the care continuum. Robots in healthcare span a wide range: autonomous mobile robots that handle hospital logistics, UV disinfection systems that eliminate pathogens, precision surgical assistants that guide implant placement, and even autonomous blood-draw devices. Because these systems operate in safety-critical environments alongside vulnerable patients, they face some of the most rigorous regulatory and reliability standards of any industry.

Most medical and surgical robots enter the US market through the FDA's [**510(k) premarket notification**](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k) pathway, which classifies them as Class II medical devices. Under 510(k), manufacturers must demonstrate that their system is "substantially equivalent" in safety and effectiveness to a legally marketed predicate device — a process that requires performance data but generally not full clinical trials. This is the pathway through which nearly all major surgical robots have been cleared, including every generation of the da Vinci system. As of 2024, roughly 86% of FDA-cleared surgical robots operate at Level 1 autonomy (fully controlled by a surgeon), and the FDA has signaled that truly autonomous surgical systems would likely require the more rigorous [Premarket Approval (PMA)](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma) process.
`;

/** @type {import('./index.js').Field} */
export default {
  field: 'Healthcare',
  description: healthcareDescription,
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
      {
      title: 'Phlebotomist',
      humanImage: 'images/healthcare/phlebotomist.png',
      robotImage: 'images/healthcare/aletta.png',
      annualIncome: 55000,
      robots: [
        {
          name: 'Aletta',
          company: 'Vitestro',
          description: alettaDescription,
          image: 'images/healthcare/aletta.png',
        },
      ],
    },

      {
      title: 'Hair Restoration Surgeon',
      humanImage: 'images/healthcare/hair_restoration_surgeon.png',
      robotImage: 'images/healthcare/artas_ix.jpg',
      annualIncome: 55000,
      robots: [
        {
          name: 'ARTAS iX',
          company: 'Restoration Robotics',
          description: artasDescription,
          image: 'images/healthcare/artas_ix.jpg',
        },
      ],
    },
     {
      title: 'Periodontist',
      humanImage: 'images/healthcare/periodontist.png',
      robotImage: 'images/healthcare/yomi.png',
      annualIncome: 55000,
      robots: [
        {
          name: 'Yomi',
          company: 'Neocis',
          description: yomiDescription,
          image: 'images/healthcare/yomi.png',
        },
      ],
    },
  ],
}
