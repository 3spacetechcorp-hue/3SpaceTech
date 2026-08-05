"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "@/styles/About.module.css"
import Footer from "@/components/Footer"
import { Users, Rocket, Globe, Award, Target, Zap } from "lucide-react"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const missionSteps = [
    {
      title: "Our Mission",
      content: "To position India as a global space leader by enabling cost-effective satellite launches and developing reusable rockets—paving the way for a spacefaring humanity."

    },
    {
      title: "What we aim at",
      content: [
        "We make space affordable, accessible, and sustainable through low-cost satellite launches, reusable rockets, and self-landing cryogenic engine technology.",
      ]
    }
  ]

  const visionSteps = [
    {
      title: "Our Vision",
      content: "A sustainable multi-planetary future—advancing deep space travel and space tech for the betterment of humankind."
    },
    {
      title: "What we do",
      content: [
        "We are currently developing a proof-of-concept rocket aimed at a 10 km launch while fostering a space innovation community and building global partnerships for future advancements.",
        
      ]
    }
  ]

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <section className={styles.aboutHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>About 3SPACE</h1>
            <p>Learn why we are called 3SPACE</p>
          </motion.div>
        </div>
      </section>

      {/* <section className={`section ${styles.aboutContent}`}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.aboutText}
          >
            <h2 className={styles.sectionTitle}>More Than a Name — This is 3SPACE</h2>
            <div className={styles.justifiedText}>
              <p>
                The "3" in 3SPACE isn't just a number — it's our identity. It stands for the three frontiers we aim to conquer: 
                Earth and Near-Earth space, where our journey begins; our Solar System, where curiosity leads; and beyond, into 
                the depths of deep space.
              </p>
              <p>
                It's also a tribute to three legends who shaped India's space story — Dr. Vikram Sarabhai, Dr. A.P.J. Abdul Kalam, 
                and Prof. Satish Dhawan — whose vision fuels our mission.
              </p>
              <p>
                Rooted in the timeless cycle of Creation, Preservation, and Transformation, 3SPACE is more than a name — 
                it's a belief that space should be free for ideas, free for innovation, and free for those who dare to dream beyond boundaries.
              </p>
            </div>
            <blockquote className={styles.quote}>
              "3SPACE — because space isn't the final frontier. It's just the beginning."
            </blockquote>
          </motion.div>
        </div>
      </section> */}

      <section className={`section ${styles.timelineSection}`}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ height: `${Math.min((scrollY - 300) / 500 * 100, 100)}%` }}
            />
          </div>
          
          {/* Left Side - Mission */}
          <div className={styles.timelineLeft}>
            {missionSteps.map((step, index) => (
              <motion.div
                key={`mission-${index}`}
                className={styles.timelineStep}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={styles.timelineStepContent}>
                  <h2>{step.title}</h2>
                  {typeof step.content === 'string' ? (
                    <p>{step.content}</p>
                  ) : (
                    <ul>
                      {step.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={styles.timelinePoint}></div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Side - Vision */}
          <div className={styles.timelineRight}>
            {visionSteps.map((step, index) => (
              <motion.div
                key={`vision-${index}`}
                className={styles.timelineStep}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={styles.timelinePoint}></div>
                <div className={styles.timelineStepContent}>
                  <h2>{step.title}</h2>
                  {typeof step.content === 'string' ? (
                    <p>{step.content}</p>
                  ) : (
                    <ul>
                      {step.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.aboutContent}`}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.aboutText}
          >
            <h2 className={styles.sectionTitle}>More Than a Name — This is 3SPACE</h2>
            <div className={styles.justifiedText}>
              <p>
                The "3" in 3SPACE isn't just a number — it's our identity. It stands for the three frontiers we aim to conquer: 
                Earth and Near-Earth space, where our journey begins; our Solar System, where curiosity leads; and beyond, into 
                the depths of deep space.
              </p>
              <p>
                It's also a tribute to three legends who shaped India's space story — Dr. Vikram Sarabhai, Dr. A.P.J. Abdul Kalam, 
                and Prof. Satish Dhawan — whose vision fuels our mission.
              </p>
              <p>
                Rooted in the timeless cycle of Creation, Preservation, and Transformation, 3SPACE is more than a name — 
                it's a belief that space should be free for ideas, free for innovation, and free for those who dare to dream beyond boundaries.
              </p>
            </div>
            <blockquote className={styles.quote}>
              "3SPACE — because space isn't the final frontier. It's just the beginning."
            </blockquote>
          </motion.div>
        </div>
      </section>

      

      <Footer/>
    </>
  )
}