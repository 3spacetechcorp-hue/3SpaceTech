"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import LaunchTimeline from "@/components/LaunchTimeline"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "@/styles/Launches.module.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LaunchesPage() {
  const [selectedLaunch, setSelectedLaunch] = useState(null)
  const timelineRef = useRef(null)

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <section className={styles.launchesHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>Launch History</h1>
            <p>Explore our journey to the stars through our past missions</p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <h2 className="section-title">Our Launch Timeline</h2>
          <p className="section-subtitle">
            Scroll through our history of launches and achievements in space exploration
          </p>

          <div className={styles.timelineContainer} ref={timelineRef}>
            <LaunchTimeline onSelectLaunch={setSelectedLaunch} />
          </div>
        </div>
      </section>

      {selectedLaunch && (
        <section className={`section ${styles.launchDetailSection}`}>
          <div className="container">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.launchDetail}>
              <div className={styles.launchHeader}>
                <h2>{selectedLaunch.name}</h2>
                <span className={`${styles.launchStatus} ${selectedLaunch.success ? styles.success : styles.failure}`}>
                  {selectedLaunch.success ? "Success" : "Failure"}
                </span>
              </div>

              <div className={styles.launchInfo}>
                <div className={styles.infoItem}>
                  <h3>Date</h3>
                  <p>{selectedLaunch.date}</p>
                </div>
                <div className={styles.infoItem}>
                  <h3>Rocket</h3>
                  <p>{selectedLaunch.rocket}</p>
                </div>
                <div className={styles.infoItem}>
                  <h3>Mission</h3>
                  <p>{selectedLaunch.mission}</p>
                </div>
                <div className={styles.infoItem}>
                  <h3>Payload</h3>
                  <p>{selectedLaunch.payload}</p>
                </div>
              </div>

              <div className={styles.launchDescription}>
                <h3>Mission Details</h3>
                <p>{selectedLaunch.description}</p>
              </div>

              <div className={styles.launchVideo}>
                <h3>Launch Footage</h3>
                <div className={styles.videoContainer}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedLaunch.videoUrl}
                    title={`${selectedLaunch.name} Launch Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      <Footer/>
    </>
  )
}
