"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import Navbar from "@/components/Navbar"
import styles from "@/styles/Careers.module.css"
import Footer from "@/components/Footer"
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Search } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [apiJobs, setApiJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const toggleJob = (id: number) => {
    if (expandedJob === id) {
      setExpandedJob(null)
    } else {
      setExpandedJob(id)
    }
  }

  // Constant jobs (existing 3 careers)
  const constantJobs = [
    {
      id: 1,
      title: "Avionics Hardware Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Design, develop, and test electronic hardware for aerospace systems, including PCBs, sensor interfaces, power systems, and flight avionics. Ensure reliability under extreme conditions.",
      responsibilities: [
        "Design flight-ready PCBs and electronic assemblies.",
        "Select components for radiation, thermal, and vibration tolerance.",
        "Support integration and environmental testing (EMI/EMC, TVAC).",
        "Collaborate with systems, software, and mechanical teams.",
        "Document schematics, layouts, and test procedures.",
      ],
      requirements: [
        "Bachelor's or Masters in Electronics, Electrical, or related field.",
        "Experience with PCB design tools (e.g., Altium, KiCAD).",
        "Understanding of signal integrity, power electronics, and embedded systems.",
        "Familiar with aerospace standards and testing."
      ],
      isCurrentOpening: false,
    },
    {
      id: 2,
      title: "Embedded System Programming Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Develop and implement firmware/software for embedded systems in real-time and resource-constrained environments. Work on microcontroller-based applications across aerospace, automotive, or IoT domains.",
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
        "Familiar with version control (Git) and real-time systems.",
      ],
      isCurrentOpening: false,
    },
    {
      id: 3,
      title: "Guidance Navigation and Control Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Design, model, and implement control systems for dynamic systems for rockets. Ensure system stability, accuracy, and performance under varying conditions.",
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
      isCurrentOpening: false,
    },
    {
      id: 4,
      title: "Telemetry and Telecommand Software Engineer",
      department: "Current Openings",
      location: "Remote",
      type: "Full-time",
      description:
      "We are looking for a highly motivated TTC Software Intern to join our Space Systems team and contribute to the development of telemetry and telecommand protocols for launch vehicles or satellite platforms. This internship offers a unique opportunity to work on real-world space communication systems and gain hands-on experience in the aerospace domain.",
      responsibilities: [
        " Assist in the development and simulation of TTC software modules.",
        "Contribute to protocol design for reliable uplink/downlink communication.",
        "Work with engineering teams to integrate TTC software with onboard systems.",
        " Test and debug communication flows using tools and simulators.",
        "Document technical processes, code, and system behavior."
      ],
      requirements: [
        " Bachelor’s or Master’s in Electronics, Electrical, or a related electronics field",
        "Basic understanding of wireless communication protocols.",
        "Strong grasp of error detection/correction techniques like CRC, ARQ, and Sliding Window Protocol.",
        "Familiar with microcontroller protocols such as SPI, I2C, and UART.",
        "Knowledge of embedded C/C++ and low-level programming is a plus.",
        "Comfortable using IDEs, debuggers, and hardware tools (e.g., oscilloscope, logic analyzer).",
        "Experience with version control systems like Git.",
        "Familiar with version control (Git) and real-time systems."
      ],
      isCurrentOpening: true,
    }
  ]

  // Fetch careers from API
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://threespacebackend.onrender.com/api/careers/all')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Transform API data to match the frontend structure
        const transformedJobs = data.map((job, index) => ({
          id: constantJobs.length + index + 1, // Ensure unique IDs
          title: job.JobTitle,
          department: job.Field,
          location: job.workType,
          type: job.employmentType,
          description: job.description,
          responsibilities: job.responsibilities || [],
          requirements: job.requirements || [],
          isFromAPI: true, // Flag to identify API jobs
          isCurrentOpening: job.Field === "Current Openings" // Mark as current opening if department matches
        }))
        
        setApiJobs(transformedJobs)
        setError(null)
      } catch (err) {
        console.error('Error fetching careers:', err)
        setError('')
        setApiJobs([])
      } finally {
        setLoading(false)
      }
    }

    fetchCareers()
  }, [])

  // Combine constant jobs with API jobs
  const allJobs = [...constantJobs, ...apiJobs]

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "Current Openings") return job.isCurrentOpening && matchesSearch
    return job.department.toLowerCase() === activeTab.toLowerCase() && matchesSearch
  })

  return (
    <>
      <ParallaxBackground />
      <Navbar/>

      <section className={styles.careersHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>Join Our Mission</h1>
            {/* <p>
              At 3SPACE, we're on a mission to make India a global leader in space exploration. We're looking for
              passionate individuals who share our vision and want to be part of this exciting journey. Join our team of
              innovators, engineers, and dreamers as we push the boundaries of what's possible in space technology.
            </p> */}
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.careersSection}`}>
        <div className="container">
          <div className={styles.careersIntro}>
            {/* <h2>Careers at 3SPACE</h2> */}
            <p>
              At 3SPACE, we're on a mission to make India a global leader in space exploration. We're looking for
              passionate individuals who share our vision and want to be part of this exciting journey. Join our team of
              innovators, engineers, and dreamers as we push the boundaries of what's possible in space technology.
            </p>
          </div>

          <div className={styles.searchFilter}>
            <div className={styles.searchBar}>
              <Search size={18} />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === "all" ? styles.active : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`${styles.tab} ${activeTab === "Current Openings" ? styles.active : ""}`}
                onClick={() => setActiveTab("Current Openings")}
              >
                Current Openings

              </button>
              <button
                className={`${styles.tab} ${activeTab === "engineering" ? styles.active : ""}`}
                onClick={() => setActiveTab("engineering")}
              >
                Engineering
              </button>
              <button
                className={`${styles.tab} ${activeTab === "software" ? styles.active : ""}`}
                onClick={() => setActiveTab("software")}
              >
                Software
              </button>
              <button
                className={`${styles.tab} ${activeTab === "production" ? styles.active : ""}`}
                onClick={() => setActiveTab("production")}
              >
                Production
              </button>
              <button
                className={`${styles.tab} ${activeTab === "operations" ? styles.active : ""}`}
                onClick={() => setActiveTab("operations")}
              >
                Operations
              </button>
            </div>
          </div>

          {loading && (
            <div className={styles.loading}>
              <p></p>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <p>{error}</p>
            </div>
          )}

          <div className={styles.jobsList}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className={styles.jobCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.jobHeader} onClick={() => toggleJob(job.id)}>
                    <div className={styles.jobInfo}>
                      <h3>{job.title}</h3>
                      <div className={styles.jobMeta}>
                        <div className={styles.metaItem}>
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.expandIcon}>
                      {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <motion.div
                      className={styles.jobDetails}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={styles.jobDescription}>{job.description}</p>

                      <div className={styles.jobSection}>
                        <h4>Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.jobSection}>
                        <h4>Requirements</h4>
                        <ul>
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.applySection}>
                        {job.isCurrentOpening ? (
                          <Link href={`https://forms.zohopublic.in/3space/form/Jobapplication/formperma/SK8629fXnU96aYIryG-GWZRdAgcJJz7wd3fqufv4qfw`} className={styles.applyButton} target="_blank" rel="noopener noreferrer">
                            Apply Now
                          </Link>
                        ) : (
                          <button className={styles.applyButton} disabled>
                            Apply Now
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className={styles.noJobs}>
                <h3>No Current Openings </h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={`section ${styles.perksSection}`}>
        <div className="container">
          <h2 className="section-title">Why Work With Us</h2>
          <p className="section-subtitle">
            At 3SPACE, we offer more than just a job. Join us and be part of a team that's making history.
          </p>

          <div className="grid grid-3">
            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Cutting-Edge Technology</h3>
              <p>
              Work with the latest aerospace innovations shaping the future of space exploration.

              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Growth Opportunities</h3>
              <p>
              Learn, grow, and progress with mentorship and clear career paths.

              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Meaningful Work</h3>
              <p>
              Join a mission advancing India’s role in global space and shaping humanity’s future.

              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Great Benefits</h3>
              <p>
              Enjoy competitive pay, insurance, retirement plans, and wellness perks.

              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Team Culture</h3>
              <p>
              Collaborate with brilliant minds in a culture of innovation and openness.
              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Flexible Work</h3>
              <p>
              Balance life and work with supportive, flexible scheduling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      
    </>
  )
}