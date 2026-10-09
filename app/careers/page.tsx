"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "@/styles/Careers.module.css"
import { MapPin, Briefcase, Clock, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useJobs } from "@/hooks/useJobs"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const { jobs, loading, error } = useJobs()

  const filteredJobs = jobs.filter((job) => {
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
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.careersSection}`}>
        <div className="container">
          <div className={styles.careersIntro}>
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
              <p>Loading open positions...</p>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <p>{error}</p>
            </div>
          )}

          <div className={styles.jobGrid}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Link href={`/careers/${job.slug}`} key={job.id} className={styles.jobCardLink}>
                  <motion.div
                    className={styles.jobCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  >
                    <div className={styles.jobHeader}>
                      <h3>{job.title}</h3>
                      {job.numberOfOpenings && (
                        <span className={styles.jobOpenings}>{job.numberOfOpenings} Opening{job.numberOfOpenings > 1 ? 's' : ''}</span>
                      )}
                    </div>
                    
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
                    
                    <p className={styles.jobSummary}>
                      {job.description && job.description.length > 150 
                        ? `${job.description.substring(0, 150)}...` 
                        : job.description}
                    </p>
                    
                    <div className={styles.jobFooter}>
                      <span className={styles.readMoreText}>Read More <ArrowRight size={16} className={styles.readMoreIcon} /></span>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : !loading && (
              <div className={styles.noJobs}>
                <h3>No Current Openings</h3>
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
            <motion.div className={styles.perkCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <h3>Cutting-Edge Technology</h3>
              <p>Work with the latest aerospace innovations shaping the future of space exploration.</p>
            </motion.div>
            <motion.div className={styles.perkCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <h3>Growth Opportunities</h3>
              <p>Learn, grow, and progress with mentorship and clear career paths.</p>
            </motion.div>
            <motion.div className={styles.perkCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <h3>Meaningful Work</h3>
              <p>Join a mission advancing India’s role in global space and shaping humanity’s future.</p>
            </motion.div>
            <motion.div className={styles.perkCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
              <h3>Great Benefits</h3>
              <p>Enjoy competitive pay, insurance, retirement plans, and wellness perks.</p>
            </motion.div>
            <motion.div className={styles.perkCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
              <h3>Team Culture</h3>
              <p>Collaborate with brilliant minds in a culture of innovation and openness.</p>
            </motion.div>
            <motion.div className={styles.perkCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
              <h3>Flexible Work</h3>
              <p>Balance life and work with supportive, flexible scheduling.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
