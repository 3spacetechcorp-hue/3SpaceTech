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

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://threespacebackend.onrender.com/api/careers/all');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform API data
        const transformedApiJobs: Job[] = data.map((job: any, index: number) => {
          const id = index + 1; // Basic ID strategy since we don't have DB IDs
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

        // Add any hardcoded jobs here (with structure following the PDFs)
        const constantJobs: Job[] = [
          {
            id: 'hardcoded-1',
            slug: 'combustion-thermal-management-system',
            title: "Combustion and Thermal Management System Engineer",
            department: "Current Openings",
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
          {
            id: 'hardcoded-2',
            slug: 'public-relations-intern',
            title: "Public Relations Intern",
            department: "Current Openings",
            location: "Remote/Hybrid",
            type: "Internship",
            description: "Join our vibrant PR and Outreach Team! This team operates dynamically across two distinct wings: Event Management & Social Media, and College Representation. Both wings offer unique opportunities to build skills, connect with industry leaders, and represent 3SPACE on exciting platforms.",
            responsibilities: [
              {
                heading: "Event Management and Social Media Wing",
                items: [
                  "Identify relevant rocketry, space-tech, and engineering events.",
                  "Secure our team's participation through networking and outreach.",
                  "Draft press releases and coordinate media interactions.",
                  "Create engaging content for platforms like LinkedIn, X, and Instagram.",
                  "Run campaigns to boost visibility and engagement."
                ]
              },
              {
                heading: "College Representatives Wing",
                items: [
                  "Act as the official 3SPACE ambassador on your campus.",
                  "Promote our initiatives and organize local events.",
                  "Foster connections between 3SPACE and student communities."
                ]
              }
            ],
            requirements: [
              "Currently enrolled in a university degree program (any discipline).",
              "Strong communication and interpersonal skills.",
              "A passion for space technology, engineering, or public relations.",
              "Familiarity with social media platforms (LinkedIn, Instagram, X).",
              "Proactive, organized, and capable of taking initiative."
            ],
            isCurrentOpening: true,
            applicationUrl: 'https://forms.zohopublic.in/3space/form/Jobapplication/formperma/SK8629fXnU96aYIryG-GWZRdAgcJJz7wd3fqufv4qfw'
          }
        ];

        setJobs([...constantJobs, ...transformedApiJobs]);
        setError(null);
      } catch (err) {
        console.error('Error fetching careers:', err);
        setError('Failed to fetch open positions. Please try again later.');
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return { jobs, loading, error };
}
