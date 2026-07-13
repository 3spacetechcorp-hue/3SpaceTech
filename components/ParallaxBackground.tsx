"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import styles from "@/styles/components/ParallaxBackground.module.css"

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <div className={styles.parallaxContainer} ref={containerRef}>
      <motion.div className={`${styles.parallaxLayer} ${styles.stars1}`} style={{ y: y1, opacity }} />
      <motion.div className={`${styles.parallaxLayer} ${styles.stars2}`} style={{ y: y2, opacity }} />
      <motion.div className={`${styles.parallaxLayer} ${styles.stars3}`} style={{ y: y3, opacity }} />
    </div>
  )
}
