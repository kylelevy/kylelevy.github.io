import sixdofThumbnail from "/public/images/6dof_thumbnail.jpg";
import neatThumbnail from "/public/images/neatThumbnail.png";
import pongDemo from "/public/images/pong_demo.gif";
import templateMakerThumbnail from "/public/images/templateMakerThumbnail.png";
import templateMaker2 from "/public/images/templateMaker2.png";
import homelabThumbnail from "/public/images/homelabThumbnail.jpg";
import CO2RobotThumbnail from "/public/images/CO2RobotThumbnail.png";
import CO2Robot2 from "/public/images/CO2Robot2.jpg";
import CO2Robot3 from "/public/images/CO2Robot3.jpg";
import SaRRobotThumbnail from "/public/images/SarRobotThumbnail.jpeg";
import SaRRobot2 from "/public/images/SaRRobot2.jpg";
import AutoGPRThumbnail from "/public/images/AutoGPRThumbnail.jpg";
import AutoGPR1 from "/public/images/AutoGPR1.jpg";
import AutoGPR2 from "/public/images/AutoGPR2.jpg";
import AutoGPR3 from "/public/images/AutoGPR3.jpg";
import AutoGPR4 from "/public/images/AutoGPR4.jpg";
import AutoGPR5 from "/public/images/AutoGPR5.jpg";
import AutoGPR6 from "/public/images/AutoGPR6.jpg";
import AutoGPR7 from "/public/images/AutoGPR7.jpg";
import AutoGPR8 from "/public/images/AutoGPR8.jpg";


export const products = [
  {
    href: "",
    title: "AutoGPR: Autonomous Subsurface Surveying AMR",
    description:
      `A fully autonomous rover which uses ground penetrating radar to detect 
      and classify subsurface features using an unsupervised machine learning
      model. The robot is controlled and monitored using a web dashboard 
      simplified for use by someone with no technical background in robotics.`,
    thumbnail: AutoGPRThumbnail,
    images: [
      AutoGPRThumbnail, AutoGPR1, AutoGPR2, AutoGPR3, AutoGPR4, AutoGPR5, 
      AutoGPR6, AutoGPR7, AutoGPR8,
    ],
    stack: ["ROS2", "Ubuntu", "C++", "NextJS", "React", "REST API"],
    slug: "autogpr",
    content: 
`

**Mechatronics Capstone Project | Queen's University**

## System Architecture & Overview
The **AutoGPR System** is an Autonomous Mobile Robot (AMR) engineered to map, 
survey, and detect subsurface anomalies across a designated region of interest. 
The system integrates a Ground Penetrating Radar (GPR) payload with custom 
autonomy, navigation, and network-connected telemetry pipelines. Under the 
academic supervision of Dr. Joshua Marshall and Dr. Alexander Braun, the
multidisciplinary team successfully designed, assembled, and validated a 
physical prototype that fully met all stakeholder requirements.

---

## Key Technical Contributions

### Firmware & ROS 2 Hardware Abstraction

* **Microcontroller Firmware:** Authored native C++ firmware for ESP32 
microcontrollers to handle low-level sensor interfaces and hardware-level 
communication.

* **ROS 2 Humble Driver Development:** Developed custom ROS 2 driver nodes to 
interface directly with the GPR hardware, establishing low-latency data 
acquisition pipelines and reliable hardware-in-the-loop (HIL) communication.

### State Estimation, Fusion & Custom Navigation

* **Robust State Estimation:** Implemented the \`robot_localization\` package 
utilizing an Unscented Kalman Filter (UKF) to fuse high-frequency 
proprioceptive data (wheel odometry, IMU) and low-frequency extroceptive (GPS) 
data for accurate, drift-reduced robot pose estimation.

* **Custom Coverage Path Planning (CPP):** Designed and deployed a custom 
grid-search coverage algorithm optimized with rounded turns (spline/clothoid 
based trajectory smoothing) to maintain constant velocity and prevent wheel 
slippage during GPR scanning passes.

### ML Data Pipelines & Unsupervised Anomaly Detection

* **Deep Feature Extraction:** Engineered an end-to-end signal processing 
pipeline featuring a Convolutional Autoencoder neural network to compress raw, 
high-dimensional GPR B-scans into dense, low-dimensional latent space 
representations.

* **Dimensionality Reduction & Anomaly Scoring:** Applied Principal Component 
Analysis (PCA) to the encoded latent representations to isolate the dimensions 
with the highest variance. This allowed the system to perform unsupervised, 
real-time anomaly detection and flag subsurface structural deviations without 
requiring pre-labeled environmental data.

### Full-Stack Telemetry & Human-Robot Interface (HRI)

* **Bidirectional Web Communication:** Built a dual-channel communication 
architecture using REST APIs for configuration, state changes, and command 
execution, alongside WebSockets for high-frequency, real-time telemetry 
streaming and map updates.

* **Modern Frontend Control Panel:** Developed a responsive web interface using 
Next.js and React to display real-time 2D/3D visualizations of GPR scans, 
spatial telemetry, and system diagnostics to the end user.
`,
  },
  {
    href: "",
    title: "HomeLab",
    description:
      "A personal server for self hosting various apps and services.",
    thumbnail: homelabThumbnail,
    images: [homelabThumbnail],
    stack: ["Ubuntu", "Bash", "Docker", "VPN", "NAS", "NGINX"],
    slug: "homelab",
    content: 
`
# Geo-Distributed Home Lab & DevOps Sandbox
**Personal Infrastructure & Systems Engineering Project**

## System Architecture & Overview

This project is a high-availability, geo-distributed home lab environment 
designed as an active sandbox for exploring DevOps methodologies, systems 
administration, and network architecture. Spanning multiple hardware nodes 
across geographically distinct locations in Toronto, the infrastructure utilizes 
high-density storage arrays, redundant storage methods, secure overlay mesh 
networks, and containerized application delivery. The environment serves as a 
resilient playground for testing enterprise-grade configuration management, 
secure reverse-proxy routing, and secure storage replication.

---

## Key Technical Contributions

### Hybrid Storage & Node Virtualization

* **TrueNAS SCALE Deployment:** Provisioned and maintained a multi-node storage 
network utilizing TrueNAS SCALE as the base operating system, leveraging ZFS 
file systems for data integrity, dataset pool management, and redundant 
snapshots.

* **Bare-Metal & Hypervisor Administration:** Configured local hardware nodes to 
optimize resource allocation, memory caching, and storage utilization across 
physically separated environments.

### Geo-Distributed Networking & Access Security

* **Mesh VPN Overlay:** Implemented a secure, peer-to-peer mesh VPN network to 
bridge geographically isolated nodes, establishing a unified, low-latency 
private local network (LAN) accessible from any external client.

* **Edge Routing & Ingress Management:** Architected secure, public-facing entry 
points utilizing Cloudflare Tunnels to bypass CGNAT (Carrier-Grade NAT) and 
establish encrypted, port-forwardless web routing for self-hosted apps.

### Containerization & Application Delivery

* **Containerized Microservices:** Deployed and managed a suite of web 
applications and infrastructure services using Docker containers, optimizing 
resource footprints and ensuring isolated environments.

* **Reverse Proxy & Traffic Shaping:** Structured traffic routing, SSL/TLS 
certificate automation, and local DNS resolution within the container network 
to ensure seamless internal and external application access.

### DevOps Workflows & Continuous Testing
* **Infrastructure as Play:** Leveraged the sandbox to manually simulate 
hardware failures, test network routing recovery, evaluate backup orchestration 
strategies, and validate new service rollouts prior to production deployment.
`,
  },
  {
    href: "",
    title: "6-DOF Robotic Manipulator",
    description:
      "A low level firmware to control a 6-DOF manipulator using an ESP32 microcontroller.",
    thumbnail: sixdofThumbnail,
    images: [sixdofThumbnail],
    stack: ["C", "C++", "Python", "ROS2"],
    slug: "6dof_robot",
    content: 
`
I am currently developing a library for my six-degree-of-freedom robotic
manipulator, which controls the robot, calculates its forward and inverse, 
kinematics, and runs using ROS for high level controls and path planning.
`
   ,
  },
  {
    href: "",
    title: "Search and Rescue Rover",
    description:
      "An semi-autonomous search and rescue rover used to complete an obstacle course and maneuver a payload.",
    thumbnail: SaRRobotThumbnail,
    images: [SaRRobotThumbnail, SaRRobot2],
    stack: ["C", "C++", "Python"],
    slug: "sarRover",
    content: 
`
# Semi-Autonomous Mobile Robot & Remote Manipulator Platform
**Robotics Systems Engineering Project**

## System Architecture & Overview

This project involved the co-development of a mobile robotic platform designed 
for hybrid autonomous navigation and remote manual manipulation. The system 
was engineered to traverse complex environments independently and switch to a 
teleoperated control scheme for high-precision object manipulation.

---

## Key Technical Contributions

### Mechanical Design & Manipulation

* **Manipulator Engineering:** Designed the mechanical linkages and end-effector 
mechanisms for the robot manipulator, selecting appropriate materials and 
actuators to meet specific payload lifting and kinematic reach requirements.

### Electrical Systems & Power Distribution

* **Electrical Integration:** Developed the complete electrical distribution 
system, implementing custom power regulation, signal isolation, and circuit 
protection to ensure reliable operation of all onboard logic and actuators.

### Wireless Communication Protocols

* **Teleoperation Links:** Established robust wireless communication channels 
between the remote base station and the mobile robot to support bidirectional 
control inputs and low-latency feedback streaming.

### Control Systems & Navigation Algorithms

* **Motion Control:** Authored control loops for precise motor actuation and 
implemented navigation algorithms to enable autonomous trajectory tracking 
and situational obstacle avoidance during the untethered mapping phase.
`,
  },
  {
    href: "",
    title: "Autonomous CO2 Monitoring System",
    description:
      "A mobile robot used to map, navigate, and report on CO2 levels in an indoor environment.",
    thumbnail: CO2RobotThumbnail,
    images: [CO2RobotThumbnail, CO2Robot2, CO2Robot3],
    stack: ["C", "C++", "Python", "ROS"],
    slug: "CO2Robot",
    content: 
`
# Autonomous Air Quality Monitoring Mobile Robot
**Collaborative Robotics Systems Engineering Project**

## System Architecture & Overview
This project involved the collaborative development of an autonomous mobile 
robot designed to map indoor air quality and detect environmental carbon dioxide 
thresholds. The system was engineered to monitor and localize spatial gas 
concentrations in real-time to ensure municipal and occupational safety.

---

## Key Technical Contributions

### Embedded Middleware & Hardware Integration

* **ROS Integration:** Utilized the Robot Operating System framework to establish 
robust communication pipelines between a Raspberry Pi single-board computer and 
an Arduino microcontroller.

* **Sensor Abstraction:** Wrote custom nodes to read, process, and publish raw 
air quality data from the onboard carbon dioxide sensors to the primary robot 
coordinate frames.

### Autonomous Navigation & Laser Mapping

* **LiDAR Navigation:** Designed and implemented autonomous path planning and 
obstacle avoidance algorithms utilizing high-frequency laser scan data from the 
onboard LiDAR sensor.

* **Spatial Localization:** Integrated distance readings to map the environment, 
ensuring complete coverage of the target area while correlating carbon dioxide 
points with specific spatial coordinates.
`,
  },
  {
    href: "",
    title: "N.E.A.T. PONG",
    description:
      "A demonstration of the use of the NEAT genetic algorithm in the application of playing pong.",
    thumbnail: neatThumbnail,
    images: [pongDemo],
    stack: ["Python"],
    slug: "neatPong",
    content: 
`
This program uses NeuroEvolution of Augmenting Topologies (NEAT), 
a genetic algorithm which has a neural network play pong and uses 
renforcement learning to train it how to get better at the game. 
Upon testing, the program was able to best its human counterpart 
98.2% of the time from a sample size of over 100 games. This program 
is based on the work of Kenneth O. Stanley and 
[this]("https://neat-python.readthedocs.io/en/latest/neat_overview.html")
library made using his research.
`,
  },
  {
    href: "",
    title: "Template Maker",
    description:
      "A program which automates the process of making worksheets.",
    thumbnail: templateMakerThumbnail,
    images: [templateMakerThumbnail, templateMaker2],
    stack: ["Python", "Latex"],
    slug: "templateMaker",
    content: 
`
In the summer of 2022, I was a teacher of grade 11 physics. When teaching
this class, my students wanted worksheets faster than I could make them. 
I decided to automate that process using Python. I created a scipt which 
can take a word problem and generate variations of the problem which alter 
the numbers in the question. It then compiles all the answers into a 
key and prints it on the back of the document. This project leveraged LaTeX 
to compile the documents and saved me countless hours of copying and pasting 
the same question and recalculating the new answers by hand.
`,
  },
];
