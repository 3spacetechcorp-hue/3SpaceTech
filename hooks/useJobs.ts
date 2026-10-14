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
  // 1. Finance Division
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

  // 2. Legal Division
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

  // 3. Marketing Division
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

  // 4. Public Relations Division - Public Relations Intern
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

  // 5. Public Relations Division - Graphic Design Intern
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

  // 6. Public Relations Division - Content Writing Intern
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

  // 7. Public Relations Division - Motion & Animation Design Intern
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

  // 8. Public Relations Division - Video Editing Intern
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

  // 9. Engineering Division - Combustion and Thermal Management System Engineer
  {
    id: 'combustion-thermal-management-system',
    slug: 'combustion-thermal-management-system',
    title: "Combustion and Thermal Management System Engineer",
    department: "Engineering",
    location: "Ahmedabad, Gujarat",
    type: "Full-Time",
    numberOfOpenings: 1,
    description: "We are seeking a highly motivated and skilled Combustion and Thermal Management System Engineer to join our team. In this role, you will be responsible for the design, analysis, and optimization of combustion devices and thermal systems critical to our aerospace applications. You will play a pivotal role in ensuring the performance, reliability, and safety of our propulsion systems.",
    responsibilities: [
      {
        heading: "Combustion devices",
        items: [
          "Design and analyze combustion chambers, injectors, and ignition systems for aerospace propulsion applications.",
          "Perform thermodynamic and reacting flow simulations to optimize combustion efficiency, stability, and emissions.",
          "Develop and validate combustion models using experimental data.",
          "Collaborate with manufacturing and test teams to ensure manufacturability and testability of combustion hardware."
        ]
      },
      {
        heading: "Thermal systems",
        items: [
          "Design and analyze thermal management systems for aerospace vehicles, including heat exchangers, active and passive cooling systems, and thermal protection systems.",
          "Perform transient and steady-state thermal simulations of vehicle components and systems.",
          "Develop and validate thermal models using experimental data.",
          "Select and evaluate materials and coatings for high-temperature applications."
        ]
      },
      {
        heading: "Propulsion Performance",
        items: [
          "Perform cycle analysis and performance prediction of propulsion systems.",
          "Develop and maintain performance models.",
          "Analyze test data to evaluate propulsion system performance."
        ]
      },
      {
        heading: "Testing, instrumentation, validation",
        items: [
          "Develop and execute test plans for combustion and thermal systems.",
          "Select and specify instrumentation for measuring temperature, pressure, flow, and other relevant parameters.",
          "Analyze test data to validate models and verify system performance."
        ]
      }
    ],
    requirements: [
      "Bachelor's or Master's degree in Mechanical Engineering, Aerospace Engineering, or a related field.",
      "Strong understanding of thermodynamics, heat transfer, fluid mechanics, and combustion principles.",
      "Experience with CFD and thermal analysis software (e.g., Ansys, Fluent, CFX, Star-CCM+, Thermal Desktop).",
      "Experience with CAD software (e.g., SolidWorks, NX, CATIA).",
      "Experience with testing and instrumentation of thermal and fluid systems.",
      "Excellent problem-solving and analytical skills.",
      "Strong communication and teamwork skills."
    ],
    preferredSkills: [
      "Experience with rocket propulsion systems.",
      "Experience with high-temperature materials and coatings.",
      "Experience with reacting flow simulations."
    ],
    softSkills: [
      "Engineering judgment",
      "Collaboration",
      "Technical communication",
      "Ability to work independently"
    ],
    isCurrentOpening: true,
    applicationUrl: 'https://forms.zohopublic.in/3space/form/Jobapplication/formperma/SK8629fXnU96aYIryG-GWZRdAgcJJz7wd3fqufv4qfw'
  },

  // 10. Engineering Division - Telemetry and Telecommand Software Engineer
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
    applicationUrl: 'https://forms.zohopublic.in/3space/form/Jobapplication/formperma/SK8629fXnU96aYIryG-GWZRdAgcJJz7wd3fqufv4qfw'
  },

  // 11. Engineering Division - Avionics Hardware Engineer
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

  // 12. Engineering Division - Embedded System Programming Engineer
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

  // 13. Engineering Division - Guidance Navigation and Control Engineer
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
              applicationUrl: job.applicationUrl || 'https://forms.zohopublic.in/3space/form/Jobapplication/formperma/SK8629fXnU96aYIryG-GWZRdAgcJJz7wd3fqufv4qfw'
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
