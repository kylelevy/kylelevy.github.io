import sixdofThumbnail from "/public/images/6dof_thumbnail.jpeg";
import neatThumbnail from "/public/images/neatThumbnail.png";
import pongDemo from "/public/images/pong_demo.gif";
import templateMakerThumbnail from "/public/images/templateMakerThumbnail.png";
import templateMaker2 from "/public/images/templateMaker2.png";
import homelabThumbnail from "/public/images/homelabThumbnail.jpg";
import CO2RobotThumbnail from "/public/images/CO2RobotThumbnail.png";
import CO2Robot2 from "/public/images/CO2Robot2.jpeg";
import CO2Robot3 from "/public/images/CO2Robot3.jpeg";
import SaRRobotThumbnail from "/public/images/SarRobotThumbnail.jpeg";
import SaRRobot2 from "/public/images/SaRRobot2.jpg";

export const products = [
  {
    href: "",
    title: "HomeLab",
    description:
      "A personal server for self hosting various apps and services.",
    thumbnail: homelabThumbnail,
    images: [homelabThumbnail],
    stack: ["Ubuntu", "Bash", "Docker"],
    slug: "homelab",
    content: (
      <div>
        <p>
          I am currently expanding my homelab server to allow me to host various
          apps and services myself including Network Attatched Storage, website hosting, 
          home automation, backup and recovery services, and more.{" "}
        </p>
      </div>      
    ),
  },
  {
    href: "",
    title: "6-DOF Robotic Manipulator",
    description:
      "A low level firmware to control a 6-DOF manipulator using an ESP32 microcontroller.",
    thumbnail: sixdofThumbnail,
    images: [sixdofThumbnail],
    stack: ["C", "C++"],
    slug: "6dof_robot",
    content: (
      <div>
        <p>
          I am currently developing a library for my six-degree-of-freedom robotic
          manipulator, which controls the robot, calculates its forward, inverse, 
          and differential kinematics, the dynamics of the system, and handles 
          trajectory planning. In the future, I would like to incorporate ROS 
          and upgrade the hardware to include force sensors to allow  
          impedence control.{" "}
        </p>
      </div>
    ),
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
    content: (
      <div>
        <p>
        Worked in a pair to develop a semi-autonomous mobile robot 
        which would be used to navigate an environment autonomously 
        and then be manually piloted to manipulate objects remotely. 
        I specialized in the mechanical design of manipulators, 
        electrical systems, wireless communication systems, control 
        systems, and navigation algorithms.{" "}
        </p>
      </div>
    ),
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
    content: (
      <div>
        <p>
        Worked with a team to develop an autonomous mobile robot 
        which detected the CO2 levels in a room for air quality 
        safety purposes. I specialized in using ROS to connect the 
        Raspberry Pi with the Arduino and sensors and the navigation 
        algorithm based on the LiDAR data.{" "}
        </p>
      </div>
    ),
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
    content: (
      <div>
        <p>
          This program uses NeuroEvolution of Augmenting Topologies (NEAT), 
          a genetic algorithm which has a neural network play pong and uses 
          renforcement learning to train it how to get better at the game. 
          Upon testing, the program was able to best its human counterpart 
          98.2% of the time from a sample size of over 100 games. This program 
          is based on the work of Kenneth O. Stanley and {" "}
          <a href="https://neat-python.readthedocs.io/en/latest/neat_overview.html">
          this</a> library made using his research.{" "}
        </p>
      </div>
    ),
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
    content: (
      <div>
        <p>
         In the summer of 2022, I was a teacher of grade 11 physics. When teaching
         this class, my students wanted worksheets faster than I could make them. 
         I decided to automate that process using Python. I created a scipt which 
         can take a word problem and generate variations of the problem which alter 
         the numbers in the question. It then compiles all the answers into a 
         key and prints it on the back of the document. This project leveraged LaTeX 
         to compile the documents and saved me countless hours of copying and pasting 
         the same question and recalculating the new answers by hand.{" "}
        </p>
      </div>
    ),
  },
];
