// RETAIL — edit only this file for retail content
// Image paths are relative to /public. Drop images in /public/images/retail/

/** @type {import('./index.js').Field} */

const tallyDescription = `## **Simbe Robotics | Tally 4.0**

**The Goal:** To serve as the "foundational data layer" for retail, transforming manual, error-prone shelf audits into a stream of real-time, actionable store intelligence.

**The Tech:** Tally 4.0 features a major leap in edge computing, utilizing the full-stack **NVIDIA AI infrastructure** (including CUDA and TensorRT) to process data directly on the robot. This model introduces an ultra-high-resolution imaging system and dual fisheye cameras for **360-degree panoramic capture**, enabling it to identify small labels and recessed items in complex fixtures like coolers and "bunkers." Supported by an extended **12-hour runtime**, it operates autonomously alongside shoppers with the industry's first **UL 3300** safety certification.

**The Impact:** By automating the tedious work of inventory management, Tally 4.0 eliminates up to 30 hours of manual labor per store each week. It provides retailers with 99% shelf-scan accuracy, allowing store associates to shift their focus from "searching for problems" to solving them and assisting customers.

### **Quick Specs**
* **Primary Function:** Autonomous shelf-scanning & inventory auditing.
* **Runtime:** Up to 12 hours (with fast-charging cycles).
* **Vision Suite:** Ultra-high-resolution 2D/3D sensors + 360° fisheye cameras.
* **Onboard Intelligence:** NVIDIA Edge AI platform.
* **Safety Standards:** UL 3300 Certified (First in the retail industry).`;

const deroxyDescription = `## **Dexory | Next-Generation Autonomous Robot**

**The Goal:** To eliminate the "data gap" in massive logistics hubs by digitizing every pallet and rack space in real-time, creating a 1:1 digital twin of the entire warehouse.

**The Tech:** Launched in early 2026, Dexory's latest robot features a record-breaking extendable tower that reaches up to **14 meters (45 feet)**, allowing it to scan the full height of modern high-bay racking. It utilizes a Formula 1-inspired sensor array, including multiple **LiDARs and 3D depth cameras**, to capture 36 TB of visual and spatial data per shift. This data feeds into the **DexoryView** platform, which uses AI to perform "Storage Health" checks—automatically identifying damaged racking, unstable pallets, or fire hazards like hanging shrink wrap.

**The Impact:** The system transforms inventory audits from a week-long manual process into a 2-hour autonomous scan, achieving **99.9% stock accuracy**. By providing a live digital twin, it allows warehouse managers to move from reactive "firefighting" to proactive optimization, reducing audit downtime by 80% and reclaiming lost revenue from misplaced assets within the first few weeks of deployment.

### **Quick Specs**
* **Primary Function:** Full-height warehouse scanning & digital twin generation.
* **Scanning Speed:** Up to 10,000 pallet locations per hour.
* **Reach:** Extendable tower up to 14m (45ft) with dynamic safety scaling.
* **Onboard Intelligence:** Computer vision & AI-powered "Storage Health" monitoring.
* **Integration:** Zero-disruption deployment with WMS/ERP syncing.`;

const stockbotDescription = `## **PAL Robotics | StockBot**

**The Goal:** To provide a turnkey "plug-and-play" solution for automated inventory tracking in retail and warehouse environments without requiring any changes to the existing store layout.

**The Tech:** StockBot is a versatile autonomous mobile robot (AMR) that combines **RFID technology** with high-resolution vision systems. While it navigates using LiDAR-based SLAM to safely maneuver around customers and obstacles, its primary power lies in its ability to read thousands of RFID tags per second with near-perfect accuracy. It creates a three-dimensional map of every tagged item’s location, allowing for precise **3D localization** of stock. The robot is designed for overnight or periodic "dark store" operations, featuring an autonomous charging dock that ensures it is ready for daily audits without human intervention.

**The Impact:** By replacing manual barcode scanning with automated RFID sweeping, StockBot reduces the time required for a full-store inventory audit from several days to just a few hours. This real-time visibility allows retailers to maintain 98%+ stock accuracy, significantly reducing out-of-stock occurrences and ensuring that "buy online, pick up in-store" (BOPIS) systems are always synchronized with actual shelf availability.

### **Quick Specs**
* **Primary Function:** Autonomous RFID inventory auditing and 3D stock localization.
* **Technology:** Integrated RFID reader (multi-regional) + Depth cameras & LiDAR.
* **Navigation:** Autonomous SLAM (Simultaneous Localization and Mapping).
* **Battery:** Up to 12 hours of continuous operation with autonomous docking.
* **Safety:** Certified for operation in dynamic environments with human obstacle detection.`;

const corvusOneDescription = `## **Corvus Robotics | Corvus One**

**The Goal:** To achieve total inventory visibility in high-density warehouses using fully autonomous flight, removing the need for manual cycle counts and heavy machinery access.

**The Tech:** The Corvus One is a fully unmanned inventory drone powered by proprietary "Embodied AI." Unlike traditional drones that require GPS or external infrastructure, it navigates complex warehouse environments without the need for WiFi, beacons, or reflectors. It features a **360-degree obstacle avoidance system** powered by 14 onboard cameras, allowing it to fly safely at walking speeds (2-3 mph) during active shifts. The system utilizes advanced OCR and barcode scanning to reconcile physical stock with the Warehouse Management System (WMS) in real-time, even in "lights-out" environments.

**The Impact:** By taking inventory management into the air, Corvus One scans up to 400 pallet positions in just 20 minutes—roughly **10x faster** than manual methods. It eliminates the safety risks associated with employees working at heights and the operational downtime caused by blocking aisles with lift trucks. With its autonomous charging dock and scheduled flight capabilities, it provides a "hands-free" audit cycle that typically reaches full ROI within six months.

### **Quick Specs**
* **Primary Function:** Fully autonomous aerial inventory auditing and WMS reconciliation.
* **Scanning Capacity:** 200–400 pallet positions per 20-minute flight.
* **Navigation:** Infrastructure-free (no WiFi or beacons required) with 14-camera vision.
* **Vision Suite:** Long-range barcode scanning and Optical Character Recognition (OCR).
* **Safety:** 360° obstacle detection; UL-compliant for operation during business hours.`;

const chefRoboticsDescription = `## **Chef Robotics | AI-Enabled Food Production System**

**The Goal:** To solve the chronic labor shortages and high turnover in commercial kitchens by automating the high-volume, repetitive task of portioning and plating prepared foods.

**The Tech:** The Chef AI-enabled system is a flexible robotic workstation designed to integrate seamlessly into existing production lines. It leverages **proprietary computer vision and imitation learning** to handle a vast diversity of ingredients—from viscous sauces and sticky grains to delicate proteins—without requiring constant re-programming. The robot utilizes a "universal" approach to food handling, featuring quick-change utensils and real-time weight monitoring to ensure every tray or bowl meets exact portion specifications. Unlike traditional automation, it is designed for rapid deployment, often going live in as little as 30 minutes for new menu items.

**The Impact:** By taking over the most repetitive assembly tasks, Chef Robotics allows food manufacturers and ghost kitchens to increase their output by up to 2x while significantly reducing food waste through precise portion control. It transitions the human role from "manual scooping" to "system supervision," improving workplace ergonomics and allowing facilities to maintain 24/7 operations without the volatility of manual labor availability.

### **Quick Specs**
* **Primary Function:** Autonomous food portioning and assembly for high-volume kitchens.
* **Ingredient Versatility:** Handles thousands of SKUs including proteins, grains, and liquids.
* **Onboard Intelligence:** Computer vision-based portioning with real-time weight adjustment.
* **Hygiene Standards:** Food-grade construction with wash-down compatible components.
* **Deployment:** Mobile, small-footprint design that fits into existing linear or circular lines.`;


const bellaBotProDescription = `## **Pudu Robotics | BellaBot Pro**

**The Goal:** To elevate the hospitality and retail experience by blending high-capacity autonomous delivery with bionic, "human-like" personality and AI-driven marketing.

**The Tech:** The BellaBot Pro is a significant evolution of the industry-leading bionic delivery robot, featuring the upgraded **PUDU VSLAM+** technology for marker-less deployment in massive, high-ceiling venues (up to 200,000 m²). It utilizes a sophisticated sensor fusion of 2 front-view cameras, 3 RGBD depth sensors, and LiDAR for 360-degree omnidirectional obstacle avoidance. This "Pro" model introduces an integrated **18.5-inch advertising screen** and AI-powered dish recognition, which allows the robot to identify and broadcast specific menu items to guests. With its automotive-grade adaptive suspension and "Crosswalk Caution" ground projectors, it maintains high stability and safety even in the most crowded restaurant and retail aisles.

**The Impact:** Beyond simple food delivery, BellaBot Pro acts as a mobile marketing platform and customer service agent, capable of personalized greetings and interactive "ear-touch" responses. It reduces the physical strain on staff by handling up to 40kg of payload per trip, effectively replacing the "heavy lifting" of service. This allows human servers to focus on tableside hospitality, while the robot's multimodal interactions—ranging from over 60 facial expressions to AI voice prompts—drive higher customer engagement and advertisement conversion rates.

### **Quick Specs**
* **Primary Function:** Autonomous bionic delivery, customer greeting, and mobile advertising.
* **Payload Capacity:** 40kg total (10kg per tray across 4 adjustable levels).
* **Agility:** Specialized for tight spaces with a minimum path clearance of just 65cm.
* **Interaction:** 10.1" interactive touch screen + 18.5" advertising display + AI Voice.
* **Safety:** 360° Omni-Sense perception with intersection ground-projection alerts.`;

const toniDescription = `## **Makr Shakr | Toni**

**The Goal:** To transform the traditional bar experience into a high-tech social spectacle by combining precision mixology with the graceful, synchronized movements of a professional choreographer.

**The Tech:** Toni is a sophisticated robotic bartending system featuring two high-performance **KUKA KR AGILUS arms** that mimic human gestures. Modeled on the movements of Italian dancer Marco Pelle, the arms divide labor: one shakes and stirs while the other pours and muddles. The system manages up to **158 bottles of spirits** suspended from the ceiling and includes an integrated lemon cutter, mint dispenser, and ice crusher. For safety, it utilizes an "invisible fence" system with motion sensors that instantly halt the robots' fast-moving arms if a guest or object enters the work zone, allowing for a barrier-free, open-counter experience.

**The Impact:** Toni moves bartending from a service task to an interactive performance, capable of crafting up to **80 complex cocktails per hour** with 100% consistency. By allowing customers to customize their own recipes via a mobile app, it shifts the role of "bartender" to the user, who can experiment with millions of drink combinations. This data-driven approach allows venue owners to monitor alcohol consumption in real-time, optimize inventory, and drive massive social media engagement through the robot's "viral" acrobatic mixing sequences.

### **Quick Specs**
* **Primary Function:** Autonomous robotic mixology and beverage service.
* **Robotic Hardware:** Dual KUKA KR AGILUS industrial arms.
* **Capacity:** 158 spirit bottles + 10 syrup dispensers + integrated beer taps.
* **Performance:** Up to 80 drinks/hour (Toni) or 250 drinks/hour (Toni Veloce).
* **Safety Features:** Laser fences and motion sensors for human-robot proximity.`;

export default {
  field: 'Retail',
  
  jobs: [
    {
      title: 'Stock Clerk',
      humanImage: 'images/retail/stock_clerk.png',
      robotImage: 'images/retail/simbe.png',
      annualIncome: 34000,
      robots: [
        {
          name: 'Tally',
          company: 'Simbe Robotics',
          description: tallyDescription,
          price: 'RaaS: ~$2,000/month',
          image: 'images/retail/simbe.png',
        },
      ],
    },
    {
      title: 'Inventory Control Coordinator',
      humanImage: 'images/retail/inventory_control_coordinator.png',
      robotImage: 'images/retail/dexory.png',
      annualIncome: 45000,
      robots: [
        {
          name: 'DexoryView',
          company: 'Dexory',
          description: deroxyDescription,
          price: '$35,000/year (lease)',
          image: 'images/retail/dexory.png',
        },
      ],
    },
    {
      title: 'Inventory Associate',
      humanImage: 'images/retail/inventory_associate.png',
      robotImage: 'images/retail/stockbot.png',
      annualIncome: 38000,
      robots: [
        {
          name: 'StockBot',
          company: 'PAL Robotics',
          description: stockbotDescription,
          price: '$50,000/year (lease)',
          image: 'images/retail/stockbot.png',
        },
      ],
    },
    {
      title: 'Reach Truck Driver + Inventory Auditor',
      humanImage: 'images/retail/reach_truck_driver.png',
      robotImage: 'images/retail/corvus_one.png',
      annualIncome: 46000,
      robots: [
        {
          name: 'Corvus One',
          company: 'Corvus Robotics',
          description: corvusOneDescription,
          price: '$50,000/year (lease)',
          image: 'images/retail/corvus_one.png',
        },
      ],
    },
     {
      title: 'Food Production Workers',
      humanImage: 'images/retail/prep_cook.png',
      robotImage: 'images/retail/chef_robotics.png',
      annualIncome: 46000,
      robots: [
        {
          name: 'Chef Robotics',
          company: 'Chef Robotics',
          description: chefRoboticsDescription,
          price: '$50,000/year (lease)',
          image: 'images/retail/chef_robotics.png',
        },
      ],
    },
         {
      title: 'Food Server',
      humanImage: 'images/retail/server.png',
      robotImage: 'images/retail/bellabot.png',
      annualIncome: 46000,
      robots: [
        {
          name: 'BellaBot',
          company: 'PuDu Robotics',
          description: bellaBotProDescription,
          price: '$50,000/year (lease)',
          image: 'images/retail/bellabot.png',
        },
      ],
    },
    {
      title: 'Bartender',
      humanImage: 'images/retail/bartender.png',
      robotImage: 'images/retail/makrshakr.png',
      annualIncome: 46000,
      robots: [
        {
          name: 'MakrShakr',
          company: 'MakrShakr',
          description: toniDescription,
          price: '$50,000/year (lease)',
          image: 'images/retail/makrshakr.png',
        },
      ],
    },
  ],
}
