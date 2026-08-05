"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, animate, useMotionValue } from "framer-motion"
import styles from "../styles/components/EarthToOrbit.module.css"

export default function SolarSystem() {
  const containerRef = useRef(null)
  const [hasLoaded, setHasLoaded] = useState(false)

  // Motion values for continuous rotation
  const sunRotation = useMotionValue(0)
  const mercuryOrbit = useMotionValue(0)
  const venusOrbit = useMotionValue(0)
  const earthOrbit = useMotionValue(0)
  const marsOrbit = useMotionValue(0)
  const jupiterOrbit = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Animation values based on scroll position
  const systemScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const systemRotation = useTransform(scrollYProgress, [0, 1], [0, 15])
  const starsScale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  // Start continuous animations
  useEffect(() => {
    const sunControls = animate(sunRotation, 360, {
      duration: 60,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    })

    const mercuryControls = animate(mercuryOrbit, 360, {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    })

    const venusControls = animate(venusOrbit, 360, {
      duration: 30,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    })

    const earthControls = animate(earthOrbit, 360, {
      duration: 40,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    })

    const marsControls = animate(marsOrbit, 360, {
      duration: 50,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    })

    const jupiterControls = animate(jupiterOrbit, 360, {
      duration: 70,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    })

    setHasLoaded(true)

    return () => {
      sunControls.stop()
      mercuryControls.stop()
      venusControls.stop()
      earthControls.stop()
      marsControls.stop()
      jupiterControls.stop()
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Parallax stars background */}
      <motion.div className={styles.starsBackground} style={{ scale: starsScale }} />

      {/* Solar System */}
      <motion.div
        className={styles.solarSystem}
        style={{
          scale: systemScale,
          rotateX: systemRotation,
        }}
      >
        {/* Sun */}
        <motion.div className={styles.sun} style={{ rotate: sunRotation }}>
          <div className={styles.sunGlow}></div>
        </motion.div>

        {/* Mercury Orbit and Planet */}
        <div className={styles.orbitPath} style={{ width: "120px", height: "120px" }}>
          <motion.div className={styles.planetContainer} style={{ rotate: mercuryOrbit }}>
            <div
              className={styles.planet}
              style={{
                width: "12px",
                height: "12px",
                background: "#a6a6a6",
              }}
            />
          </motion.div>
        </div>

        {/* Venus Orbit and Planet */}
        <div className={styles.orbitPath} style={{ width: "180px", height: "180px" }}>
          <motion.div className={styles.planetContainer} style={{ rotate: venusOrbit }}>
            <div
              className={styles.planet}
              style={{
                width: "18px",
                height: "18px",
                background: "#e39e54",
              }}
            />
          </motion.div>
        </div>

        {/* Earth Orbit and Planet */}
        <div className={styles.orbitPath} style={{ width: "240px", height: "240px" }}>
          <motion.div className={styles.planetContainer} style={{ rotate: earthOrbit }}>
            <div
              className={styles.planet}
              style={{
                width: "20px",
                height: "20px",
              }}
            >
              <div className={styles.earth}></div>
              {/* Moon */}
              <motion.div
                className={styles.moon}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Mars Orbit and Planet */}
        <div className={styles.orbitPath} style={{ width: "300px", height: "300px" }}>
          <motion.div className={styles.planetContainer} style={{ rotate: marsOrbit }}>
            <div
              className={styles.planet}
              style={{
                width: "16px",
                height: "16px",
                background: "#c1440e",
              }}
            />
          </motion.div>
        </div>

        {/* Jupiter Orbit and Planet */}
        <div className={styles.orbitPath} style={{ width: "400px", height: "400px" }}>
          <motion.div className={styles.planetContainer} style={{ rotate: jupiterOrbit }}>
            <div
              className={styles.planet}
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #e0c9a6, #b3995d, #e0c9a6)",
              }}
            >
              <div className={styles.jupiterStripe}></div>
              <div className={styles.jupiterStripe}></div>
              <div className={styles.jupiterStripe}></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content text */}
      <motion.div className={styles.contentWrapper} style={{ opacity: contentOpacity }}>
        <div className={styles.content}>
          <h2>Explore Our Solar System</h2>
          <p>
            Journey through the cosmos and discover the wonders of our planetary neighborhood. From the scorching heat
            of Mercury to the gas giants beyond the asteroid belt.
          </p>
          <motion.button className={styles.ctaButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Start Your Journey
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
