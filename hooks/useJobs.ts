"use client";

import { useState, useEffect } from "react";

export interface ResponsibilityGroup {
  heading?: string;
  items: string[];
}

export interface Job {
  id: string | number;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  numberOfOpenings?: number;
  description: string;
  responsibilities: string[] | ResponsibilityGroup[];
  requirements: string[];
  preferredSkills?: string[];
  softSkills?: string[];
  additionalInfo?: { heading: string; content: string[] }[];
  isCurrentOpening: boolean;
  applicationUrl?: string;
  isFromAPI?: boolean;
}

// Generate a slug from a string (e.g. "Software Engineer" -> "software-engineer")
export const generateSlug = (title: string, id: string | number) => {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`;
};

export const constantJobs: Job[] = [
  // ==========================================
  // Engineering Division (Technical Internships)
  // Shared Application Form: https://forms.gle/1tsZou9NBeY7rAir5
  // ==========================================

  // 1. Combustion and Thermal Management System
  {
    id: 'combustion-thermal-management-system',
    slug: 'combustion-thermal-management-system',
    title: "Combustion and Thermal Management System",
    department: "Engineering",
    location: "Ahmedabad, Gujarat",
    type: "Technical Intern",
    numberOfOpenings: 2,
    description: "In this role, you will work across the full hardware lifecycle from early concepts and CAD models through manufacturing, test execution, and design iteration. The ideal candidate has a strong foundation in heat transfer, thermodynamics, and numerical analysis and can solve complex engineering problems from initial concept.\n\nYou should be comfortable working independently, contributing to design decisions, and communicating results clearly to the rest of the team.",
    responsibilities: [
      {
        heading: "Combustion devices",
        items: [
          "Design and develop a variety of combustion devices of liquid rocket engines, combustion chambers, injectors, and igniters. Create models and drawings of parts and assemblies. Perform calculations and analyses with team support.",
          "Own requirements definition, architecture trades, and system-level integration for assigned subsystems.",
          "Work with the manufacturing team to create finished engine parts. Support parts through 3D printing, machining, post-processing, and inspection. Incorporate feedback to improve design for manufacturing."
        ]
      },
      {
        heading: "Thermal systems",
        items: [
          "Perform detailed thermal analysis of the rocket engine, including design trade studies, component sizing, and design verification.",
          "Develop advanced regenerative cooling architectures using high-fidelity CFD simulations and relevant tools.",
          "Build detailed numerical models to model heat transfer, pressure losses, and combustion stabilities."
        ]
      },
      {
        heading: "Propulsion Performance",
        items: [
          "Conduct performance trade studies and optimization across operating conditions, throttle levels, nozzle geometry, and propellant/feed-system parameters to maximize efficiency while satisfying engine constraints.",
          "Correlate analytical predictions with hot-fire/test data, identify performance deviations, and refine models and engine design parameters for improved thrust, efficiency, and reliability.",
          "Develop and maintain analytical and computational performance models and validate those models against component and hot-fire test data."
        ]
      },
      {
        heading: "Testing, instrumentation, validation",
        items: [
          "Plan and execute propulsion-component and engine-level test campaigns, defining test objectives, procedures, operating limits, instrumentation requirements, and acceptance criteria.",
          "Support the integration and installation of instrumentation on engine hardware, including pressure, temperature, flow, thrust, vibration, and other critical sensors.",
          "Process and analyze test data to evaluate engine performance, transient behavior, thermal margins, and system response, while identifying anomalies and potential failure modes.",
          "Correlate test results with analytical and simulation models, validate engineering predictions, and drive design improvements through iterative testing and hardware validation."
        ]
      }
    ],
    requirements: [
      "In-depth knowledge of combustion and fluid dynamics, heat transfer, and structural mechanics.",
      "Good understanding of design principles and manufacturing methods.",
      "Prior experience developing parts, assemblies, or systems from concept to production.",
      "Prior experience developing and maintaining engineering design best practices."
    ],
    preferredSkills: [
      "Experience in designing complex parts and assemblies in professional CAD packages like SolidWorks.",
      "Scientific programming experience (Python, MATLAB, C/C++).",
      "Proficiency in advanced CFD platforms (Ansys, OpenFOAM) and FEA software (Ansys Mechanical, SolidWorks).",
      "Demonstrated history of building and testing physical hardware."
    ],
    softSkills: [
      "Self-motivated to solve complex problems and ability to motivate others to achieve a common goal.",
      "Demonstrated ability to act with good engineering judgement and execute high-quality technical work on tight timelines.",
      "Demonstrated strong cross-functional collaboration and technical communication skills."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://forms.gle/1tsZou9NBeY7rAir5'
  },

  // 2. Propulsion Avionics and System Design
  {
    id: 'propulsion-avionics-system-design',
    slug: 'propulsion-avionics-system-design',
    title: "Propulsion Avionics and System Design",
    department: "Engineering",
    location: "Ahmedabad, Gujarat / Remote",
    type: "Technical Intern",
    numberOfOpenings: 2,
    description: "We are looking for candidates to join our Propulsion Avionics and System Design team. The role involves designing, developing, integrating, and testing electronic systems for aerospace and propulsion applications.\n\nThe selected candidates will work on electronic circuit design, embedded systems, PCB development, communication interfaces, avionics integration, and system-level troubleshooting.",
    responsibilities: [
      "Design and analyze electronic circuits for avionics and propulsion systems.",
      "Develop and integrate embedded systems based on ARM-based microcontrollers.",
      "Design, test, and debug analog and digital electronic circuits.",
      "Develop schematics and PCB layouts while following good EMC/EMI design practices.",
      "Simulate and verify electronic circuits before hardware implementation.",
      "Integrate and troubleshoot different communication interfaces and peripherals.",
      "Perform hardware bring-up, testing, debugging, and validation of electronic systems.",
      "Support integration of avionics, sensors, actuators, communication systems, and other subsystems.",
      "Analyze hardware failures and implement appropriate design improvements.",
      "Prepare technical documentation including schematics, test procedures, and system-level documentation."
    ],
    requirements: [
      "Strong fundamentals in analog and digital circuits.",
      "Experience with ARM-based microcontrollers.",
      "Ability to design, analyze, and troubleshoot electronic circuits.",
      "Experience with PCB design, including knowledge of EMC/EMI design practices and rules.",
      "Experience with circuit simulation tools such as Proteus and Multisim.",
      "Good understanding of various communication protocols such as CAN, UART, I²C, SPI, RS-232, Ethernet, and EtherCAT.",
      "Strong debugging, analytical, and problem-solving skills."
    ],
    softSkills: [
      "Strong analytical and critical-thinking skills.",
      "Good problem-solving and troubleshooting abilities.",
      "Ability to work effectively in a multidisciplinary engineering team.",
      "Good communication and technical documentation skills.",
      "Strong attention to detail and accuracy.",
      "Willingness to learn new technologies and engineering tools."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://forms.gle/1tsZou9NBeY7rAir5'
  },

  // 3. Propulsion Control System
  {
    id: 'propulsion-control-system',
    slug: 'propulsion-control-system',
    title: "Propulsion Control System",
    department: "Engineering",
    location: "Ahmedabad, Gujarat / Remote",
    type: "Technical Intern",
    numberOfOpenings: 2,
    description: "We are looking for candidates to join our Propulsion Control System team. The role involves developing, simulating, tuning, and validating control algorithms for aerospace vehicles and propulsion systems, with a focus on vehicle stability and guidance.\n\nThe selected candidates will be responsible for developing control strategies and validating their performance through simulation before hardware and flight testing.",
    responsibilities: [
      "Develop and simulate control algorithms for vehicle stability and guidance.",
      "Design, tune, and validate controllers for different operating conditions.",
      "Perform control-system simulations and evaluate controller performance.",
      "Analyze system response and identify stability and performance issues.",
      "Implement and evaluate filtering and state-estimation algorithms.",
      "Validate controllers in simulation before hardware and flight testing.",
      "Analyze simulation results and optimize controller performance.",
      "Work closely with avionics, propulsion, embedded systems, and other engineering teams."
    ],
    requirements: [
      "Strong foundation in C/C++ and Python.",
      "Good understanding of control-system fundamentals, including open-loop and closed-loop control.",
      "Ability to perform state-space analysis and stability analysis.",
      "Familiarity with stability-analysis techniques such as Bode plots, Nyquist plots, root locus, and pole-zero analysis.",
      "Experience with control algorithms such as PID, LQR, and other control techniques.",
      "Good knowledge of different filtering techniques, including Kalman Filter and Extended Kalman Filter (EKF).",
      "Strong analytical and problem-solving skills with a logical and systematic approach to engineering problems.",
      "Ability to understand system dynamics and analyze simulation results.",
      "Knowledge of MATLAB/Simulink or similar simulation tools is an advantage.",
      "Basic understanding of aerospace vehicle dynamics and propulsion systems is preferred."
    ],
    softSkills: [
      "Strong analytical and critical-thinking skills.",
      "Good problem-solving and decision-making abilities.",
      "Ability to work effectively in a multidisciplinary team.",
      "Good communication and technical documentation skills.",
      "Proactive attitude with a willingness to learn and explore new technologies."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://forms.gle/1tsZou9NBeY7rAir5'
  },

  // 4. Structural & Cryogenic Propellant Systems
  {
    id: 'structural-cryogenic-propellant-systems',
    slug: 'structural-cryogenic-propellant-systems',
    title: "Structural & Cryogenic Propellant Systems",
    department: "Engineering",
    location: "Ahmedabad, Gujarat / Remote",
    type: "Technical Intern",
    numberOfOpenings: 2,
    description: "Structural & Manufacturing Systems Intern: We're looking for an intern to support structural design, thermal analysis, and manufacturing of engine components, with a focus on regenerative cooling and feed system hardware for a liquid rocket engine.\n\nFluid Systems Intern: We're looking for a fluid systems intern to design and manage storage, handling, and delivery systems for cryogenic and high-pressure fluids used in a liquid rocket engine.",
    responsibilities: [
      {
        heading: "Structural Design & Analysis",
        items: [
          "Design structural components, including combustion chambers, injector housings, tanks, and support structures.",
          "Perform stress, deformation, fatigue, and fracture analysis.",
          "Analyze vibration, acoustic loads, and combustion-induced instabilities.",
          "Evaluate structural response to turbomachinery-induced dynamic loads.",
          "Design and analyze high-pressure vessels used in liquid propulsion systems.",
          "Assess structural response during startup, shutdown, and throttling."
        ]
      },
      {
        heading: "Material Selection & Optimization",
        items: [
          "Select materials considering strength, weight, thermal resistance, and compatibility with cryogenic propellants.",
          "Evaluate material behavior under cyclic loads and extreme temperatures.",
          "Address cryogenic embrittlement and thermal fatigue."
        ]
      },
      {
        heading: "Manufacturing & Assembly Support",
        items: [
          "Ensure designs are manufacturable using CNC, welding, and additive manufacturing.",
          "Define tolerances, joining methods, and assembly procedures.",
          "Support fabrication and structural validation testing.",
          "Correlate simulation models with test data and update design margins."
        ]
      },
      {
        heading: "Storage & Tank Systems",
        items: [
          "Design cryogenic storage systems, including insulated tanks and feed lines.",
          "Evaluate boil-off rates and thermal losses.",
          "Ensure safe containment under varying operating conditions."
        ]
      },
      {
        heading: "Safety & Handling",
        items: [
          "Define safe handling procedures for cryogenic and reactive propellants.",
          "Mitigate risks related to leakage, overpressure, and rapid phase changes.",
          "Address material compatibility and environmental risks."
        ]
      }
    ],
    requirements: [
      "Mechanical behavior of materials, High-temperature materials, fluid mechanics fundamentals, Thermodynamics.",
      "Experience with high-pressure or cryogenic systems.",
      "CAD (SolidWorks/Fusion 360) and FEA/CFD tools (ANSYS or similar).",
      "Python/MATLAB for calculations.",
      "Familiarity with metal additive manufacturing / design-for-AM.",
      "Understanding of valve types and feed system basics.",
      "Knowledge of cryogenic insulation systems and specialized piping.",
      "Experience with transient flow modelling."
    ],
    softSkills: [
      "Presence of mind.",
      "Creativity coupled with curiosity.",
      "Strong analytical thinking.",
      "Attention to detail.",
      "Ownership and self-driven problem-solving.",
      "Ability to work through ambiguity.",
      "Clear technical communication."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://forms.gle/1tsZou9NBeY7rAir5'
  },

  // ==========================================
  // Finance Division
  // Application Form: https://docs.google.com/forms/d/e/1FAIpQLSeDSRKHgqadyhTV_auQyWfc39vcfz5on-9ZZpNQ2CtF5Nyduw/viewform?usp=dialog
  // ==========================================
  {
    id: 'finance-intern',
    slug: 'finance-intern',
    title: "Finance Intern",
    department: "Finance",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 1,
    description: "The Finance Division is responsible for building and supporting 3SPACE's finance function by maintaining financial records, assisting with budgeting and financial planning, conducting finance-related research, and helping establish efficient financial processes for the organization.",
    responsibilities: [
      "Assist in developing and organizing the startup's finance processes.",
      "Maintain records of expenses, budgets, reimbursements, and financial transactions.",
      "Research accounting, taxation, compliance, financial regulations, and startup finance topics.",
      "Prepare financial reports, spreadsheets, and summaries for the leadership team.",
      "Help create financial documentation, policies, and Standard Operating Procedures (SOPs).",
      "Support budgeting, financial planning, and expense tracking activities.",
      "Coordinate with different teams to collect financial information.",
      "Identify process improvements and recommend practical solutions.",
      "Present research findings and financial insights to the founders.",
      "Take ownership of assigned finance-related tasks and complete them accurately and on time."
    ],
    requirements: [
      "Students or recent graduates pursuing or holding a degree in Finance, Accounting, Commerce, Economics, Business Administration, or related fields.",
      "Comfortable working with Microsoft Excel or Google Sheets.",
      "Strong analytical, organizational, communication, and documentation skills.",
      "Basic understanding of finance, accounting, commerce, or business concepts is preferred.",
      "Self-motivated, proactive, and willing to learn and take ownership of responsibilities."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeDSRKHgqadyhTV_auQyWfc39vcfz5on-9ZZpNQ2CtF5Nyduw/viewform?usp=dialog'
  },

  // ==========================================
  // Legal Division
  // Application Form: https://docs.google.com/forms/d/e/1FAIpQLSeufBwma08SQfHj3L47qRbsx1Mdv1UNuRlWItnRUQ2n6FuErg/viewform?usp=dialog
  // ==========================================
  {
    id: 'legal-intern',
    slug: 'legal-intern',
    title: "Legal Intern",
    department: "Legal",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 2,
    description: "The Legal Division is responsible for supporting the organization’s legal operations by managing legal documentation, reviewing agreements, ensuring regulatory compliance, safeguarding intellectual property, and minimizing legal risks across the organization.",
    responsibilities: [
      "Conduct legal research on applicable laws, regulations, and compliance requirements.",
      "Draft, review, and organize legal documents such as NDAs, MoUs, agreements, and internal policies.",
      "Assist in maintaining legal records and documentation.",
      "Support compliance and governance-related activities.",
      "Review documents for legal accuracy and consistency.",
      "Assist in identifying potential legal risks and recommending appropriate actions.",
      "Maintain confidentiality while handling legal and organizational information."
    ],
    requirements: [
      "Final year (preferred) LL.B., B.A. LL.B., B.B.A. LL.B., LL.M., or an equivalent law program.",
      "Strong legal research and analytical skills.",
      "Excellent drafting and written communication skills.",
      "Good understanding of contracts and legal documentation.",
      "High attention to detail, professionalism, and ethical conduct.",
      "Ability to maintain confidentiality and work independently."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeufBwma08SQfHj3L47qRbsx1Mdv1UNuRlWItnRUQ2n6FuErg/viewform?usp=dialog'
  },

  // ==========================================
  // Marketing Division
  // Application Form: https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog
  // ==========================================
  {
    id: 'marketing-intern',
    slug: 'marketing-intern',
    title: "Marketing Intern",
    department: "Marketing",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 1,
    description: "The Marketing Division is responsible for identifying and executing marketing strategies, tracking the latest market and social media trends, securing sponsorship opportunities, and exploring self-funding and business growth opportunities for 3SPACE.",
    responsibilities: [
      "Research and propose new marketing strategies and campaigns.",
      "Track the latest trends across social media platforms and the market.",
      "Identify and approach potential sponsors and partners.",
      "Develop ideas for self-funding and business growth strategies.",
      "Assist in campaign execution and performance tracking."
    ],
    requirements: [
      "Final year BBA student, preferably with a Marketing major, or B.Tech + MBA student.",
      "Familiarity with social media analytics tools and market research platforms.",
      "Strong research, communication, and networking skills.",
      "Basic understanding of LinkedIn outreach."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog'
  },

  // ==========================================
  // Public Relations Division
  // Application Form: https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog
  // ==========================================
  {
    id: 'public-relations-intern',
    slug: 'public-relations-intern',
    title: "Public Relations Intern",
    department: "Public Relations",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 1,
    description: "The Public Relations Division is responsible for strengthening 3SPACE's public presence, brand identity, communications, and stakeholder relationships through public relations, content creation, creative design, media outreach, community engagement, and professional communication.",
    responsibilities: [
      "Coordinate and communicate with investors, potential investors, partners, and other key stakeholders.",
      "Build and maintain relationships with media houses, journalists, publications, and relevant industry communities.",
      "Identify and approach potential partners, institutions, colleges, incubators, and organizations for collaborations.",
      "Assist in drafting professional emails, press releases, media pitches, announcements, and other external communications.",
      "Organize and coordinate events, workshops, webinars, networking sessions, and other PR activities.",
      "Manage stakeholder follow-ups, meetings, and communication records.",
      "Support media outreach and identify opportunities for 3SPACE to gain relevant media coverage.",
      "Represent 3SPACE professionally while communicating with external stakeholders.",
      "Assist in building and expanding 3SPACE's professional and industry network.",
      "Research relevant aerospace, startup, technology, and business communities for potential outreach and collaboration opportunities."
    ],
    requirements: [
      "Strong communication and interpersonal skills.",
      "Excellent written and verbal communication.",
      "Strong networking and relationship-building abilities.",
      "Comfortable communicating with investors, professionals, institutions, media, and external organizations.",
      "Good organizational and follow-up skills.",
      "Proactive approach with the ability to take ownership of tasks.",
      "Basic understanding of professional email and LinkedIn outreach.",
      "Prior experience in PR, event management, community building, outreach, or communications is preferred but not mandatory.",
      "Interest in startups, aerospace, technology, or entrepreneurship is an added advantage."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog'
  },
  {
    id: 'graphic-design-intern',
    slug: 'graphic-design-intern',
    title: "Graphic Design Intern",
    department: "Public Relations",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 1,
    description: "The Public Relations Division is responsible for strengthening 3SPACE's public presence, brand identity, communications, and stakeholder relationships through public relations, content creation, creative design, media outreach, community engagement, and professional communication.",
    responsibilities: [
      "Create graphics for Instagram, LinkedIn, YouTube, and other platforms.",
      "Design creatives for campaigns, events, workshops, announcements, and recruitment.",
      "Develop presentations, posters, banners, and other brand assets.",
      "Work with the Marketing, PR, and Content teams on visual requirements.",
      "Maintain consistency in 3SPACE's branding, typography, colors, and visual style.",
      "Research current design trends and develop fresh creative concepts."
    ],
    requirements: [
      "Proficiency in Canva, Figma, Photoshop, Illustrator, or similar tools.",
      "Strong understanding of basic design principles.",
      "Creative mindset and attention to detail.",
      "Understanding of social media design and current trends.",
      "Ability to work with design briefs and meet deadlines.",
      "Portfolio of previous work preferred."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog'
  },
  {
    id: 'content-writing-intern',
    slug: 'content-writing-intern',
    title: "Content Writing Intern",
    department: "Public Relations",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 1,
    description: "The Public Relations Division is responsible for strengthening 3SPACE's public presence, brand identity, communications, and stakeholder relationships through public relations, content creation, creative design, media outreach, community engagement, and professional communication.",
    responsibilities: [
      "Write content for social media posts, blogs, website sections, and events.",
      "Develop clear and engaging content aligned with the company’s communication and brand requirements.",
      "Support brand storytelling, campaigns, and internal communication.",
      "Research relevant topics and convert information into structured, audience-focused content.",
      "Collaborate with the design, video, and marketing teams for content execution."
    ],
    requirements: [
      "Currently in 3rd year of any course.",
      "Strong content writing and written communication skills.",
      "Ability to research, structure, and simplify information effectively.",
      "Basic understanding of social media and digital content.",
      "Creativity and attention to detail."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog'
  },
  {
    id: 'motion-animation-design-intern',
    slug: 'motion-animation-design-intern',
    title: "Motion & Animation Design Intern",
    department: "Public Relations",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 1,
    description: "The Public Relations Division is responsible for strengthening 3SPACE's public presence, brand identity, communications, and stakeholder relationships through public relations, content creation, creative design, media outreach, community engagement, and professional communication.",
    responsibilities: [
      "Create motion graphics and animations for social media, events, presentations, and company communication.",
      "Convert concepts and technical ideas into engaging animated visual content.",
      "Develop animated creatives and short-form motion content.",
      "Create basic graphics, social media creatives, banners, and supporting visual assets when required.",
      "Collaborate with content and video teams to execute visual storytelling concepts.",
      "Take creative concepts from initial idea to final animation output."
    ],
    requirements: [
      "Currently in 3rd year of any course.",
      "Knowledge of motion graphics and animation creation.",
      "Basic graphic design skills with proficiency in Canva or similar tools.",
      "Ability to create clean and visually consistent designs.",
      "Familiarity with After Effects, Blender, Figma, Photoshop, or similar creative tools is an added advantage.",
      "Creativity and a strong visual sense."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog'
  },
  {
    id: 'video-editing-intern',
    slug: 'video-editing-intern',
    title: "Video Editing Intern",
    department: "Public Relations",
    location: "Remote / Hybrid",
    type: "Internship",
    numberOfOpenings: 1,
    description: "The Public Relations Division is responsible for strengthening 3SPACE's public presence, brand identity, communications, and stakeholder relationships through public relations, content creation, creative design, media outreach, community engagement, and professional communication.",
    responsibilities: [
      "Edit reels, short-form videos, event content, and company videos.",
      "Assemble raw footage, graphics, audio, and text into structured video content.",
      "Add transitions, subtitles, basic effects, and audio elements as required.",
      "Adapt video content for different social media and digital platforms.",
      "Collaborate with the content and motion design teams for video execution.",
      "Maintain visual and brand consistency across edited content."
    ],
    requirements: [
      "Currently in 3rd year of any course.",
      "Proficiency in CapCut, Adobe Premiere Pro, DaVinci Resolve, or similar video editing software.",
      "Understanding of video pacing, transitions, audio, and basic visual storytelling.",
      "Ability to edit short-form social media and promotional content.",
      "Basic knowledge of motion graphics is an added advantage.",
      "Creativity and attention to detail."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf-ZsptYWAQMBe-xc36BgeQbNlv5Mz2qj4RGeMNNiwmt8dY6g/viewform?usp=dialog'
  },

  // ==========================================
  // Additional Engineering Roles
  // ==========================================
  {
    id: 'ttc-software-engineer',
    slug: 'telemetry-telecommand-software-engineer',
    title: "Telemetry and Telecommand Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    numberOfOpenings: 1,
    description: "We are looking for a highly motivated TTC Software Intern to join our Space Systems team and contribute to the development of telemetry and telecommand protocols for launch vehicles or satellite platforms. This internship offers a unique opportunity to work on real-world space communication systems and gain hands-on experience in the aerospace domain.",
    responsibilities: [
      "Assist in the development and simulation of TTC software modules.",
      "Contribute to protocol design for reliable uplink/downlink communication.",
      "Work with engineering teams to integrate TTC software with onboard systems.",
      "Test and debug communication flows using tools and simulators.",
      "Document technical processes, code, and system behavior."
    ],
    requirements: [
      "Bachelor’s or Master’s in Electronics, Electrical, or a related electronics field.",
      "Basic understanding of wireless communication protocols.",
      "Strong grasp of error detection/correction techniques like CRC, ARQ, and Sliding Window Protocol.",
      "Familiar with microcontroller protocols such as SPI, I2C, and UART.",
      "Knowledge of embedded C/C++ and low-level programming is a plus.",
      "Comfortable using IDEs, debuggers, and hardware tools (e.g., oscilloscope, logic analyzer).",
      "Experience with version control systems like Git."
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://forms.gle/1tsZou9NBeY7rAir5'
  },
  {
    id: 'avionics-hardware-engineer',
    slug: 'avionics-hardware-engineer',
    title: "Avionics Hardware Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Design, develop, and test electronic hardware for aerospace systems, including PCBs, sensor interfaces, power systems, and flight avionics. Ensure reliability under extreme conditions.",
    responsibilities: [
      "Design flight-ready PCBs and electronic assemblies.",
      "Select components for radiation, thermal, and vibration tolerance.",
      "Support integration and environmental testing (EMI/EMC, TVAC).",
      "Collaborate with systems, software, and mechanical teams.",
      "Document schematics, layouts, and test procedures."
    ],
    requirements: [
      "Bachelor's or Masters in Electronics, Electrical, or related field.",
      "Experience with PCB design tools (e.g., Altium, KiCAD).",
      "Understanding of signal integrity, power electronics, and embedded systems.",
      "Familiar with aerospace standards and testing."
    ],
    isCurrentOpening: false
  },
  {
    id: 'embedded-system-programming-engineer',
    slug: 'embedded-system-programming-engineer',
    title: "Embedded System Programming Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Develop and implement firmware/software for embedded systems in real-time and resource-constrained environments. Work on microcontroller-based applications across aerospace, automotive, or IoT domains.",
    responsibilities: [
      "Write and debug embedded C/C++ code for MCUs (ARM, AVR, etc.).",
      "Develop drivers, middleware, and application logic.",
      "Interface with sensors, actuators, and communication protocols (UART, SPI, I2C, CAN).",
      "Optimize for performance, memory, and power.",
      "Collaborate with hardware and systems teams for integration and testing."
    ],
    requirements: [
      "Bachelor's or Masters in Electronics, Electrical, or related field.",
      "Familiar with microcontroller protocols such as SPI, I2C, and UART.",
      "Strong in embedded C/C++, RTOS, and low-level programming.",
      "Experience with IDEs, debuggers, and hardware tools (oscilloscope, logic analyzer).",
      "Familiar with version control (Git) and real-time systems."
    ],
    isCurrentOpening: false
  },
  {
    id: 'guidance-navigation-control-engineer',
    slug: 'guidance-navigation-control-engineer',
    title: "Guidance Navigation and Control Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    description: "Design, model, and implement control systems for dynamic systems for rockets. Ensure system stability, accuracy, and performance under varying conditions.",
    responsibilities: [
      "Develop control algorithms (PID, state-space, adaptive, etc.).",
      "Model and simulate systems using MATLAB/Simulink or equivalent tools.",
      "Implement controllers on embedded platforms or real-time systems.",
      "Analyze system response, tune parameters, and validate performance.",
      "Collaborate with mechanical, electronics, and software teams."
    ],
    requirements: [
      "Bachelor's in Electronics, Electrical, Mechatronics, Aerospace, Mechanical or related fields.",
      "Strong foundation in control theory and system dynamics.",
      "Experience with MATLAB/Simulink and real-time implementation.",
      "Familiar with sensors, actuators, and embedded control systems."
    ],
    isCurrentOpening: false
  }
];

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setLoading(true);
        // Fetch through our Next.js API proxy to bypass CORS restrictions
        const response = await fetch('/api/careers');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform API data if any
        if (Array.isArray(data) && data.length > 0) {
          const transformedApiJobs: Job[] = data.map((job: any, index: number) => {
            const id = index + 1;
            return {
              id,
              slug: generateSlug(job.JobTitle || 'job', id),
              title: job.JobTitle,
              department: job.Field,
              location: job.workType,
              type: job.employmentType,
              description: job.description,
              responsibilities: job.responsibilities || [],
              requirements: job.requirements || [],
              isFromAPI: true,
              isCurrentOpening: job.Field === "Current Openings",
              numberOfOpenings: job.numberOfOpenings,
              preferredSkills: job.preferredSkills,
              softSkills: job.softSkills,
              applicationUrl: job.applicationUrl || 'https://forms.gle/1tsZou9NBeY7rAir5'
            };
          });

          setJobs([...constantJobs, ...transformedApiJobs]);
        } else {
          setJobs(constantJobs);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching careers:', err);
        // Fallback to showing our configured jobs if backend is unavailable
        setJobs(constantJobs);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return { jobs, loading, error };
}
