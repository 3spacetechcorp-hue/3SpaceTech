"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import styles from "@/styles/components/LaunchTimeline.module.css"

interface LaunchData {
  id: number
  name: string
  date: string
  rocket: string
  mission: string
  payload: string
  success: boolean
  description: string
  videoUrl: string
}

export default function LaunchTimeline({ onSelectLaunch }: { onSelectLaunch: (launch: LaunchData) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const scale = useTransform(scrollXProgress, [0, 1], [0, 100])

  const launches: LaunchData[] = [
    {
      id: 1,
      name: "Orbital Test Flight 1",
      date: "March 15, 2021",
      rocket: "Falcon 1",
      mission: "Technology Demonstration",
      payload: "Test Satellite (50kg)",
      success: true,
      description:
        "Our first orbital test flight successfully demonstrated our rocket's capability to reach low Earth orbit and deploy a small test satellite. This mission validated our propulsion systems, guidance algorithms, and overall vehicle design.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "CommSat-1",
      date: "June 22, 2021",
      rocket: "Falcon 1",
      mission: "Commercial Satellite Deployment",
      payload: "Communication Satellite (120kg)",
      success: true,
      description:
        "Our first commercial mission successfully deployed a communication satellite for a private telecommunications company. The satellite is now providing broadband services to remote areas across South Asia.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      name: "EarthView-1",
      date: "September 10, 2021",
      rocket: "Falcon 1",
      mission: "Earth Observation",
      payload: "Imaging Satellite (180kg)",
      success: false,
      description:
        "This mission experienced an anomaly during second stage separation, resulting in failure to reach the intended orbit. The Earth observation satellite was lost, but valuable data was gathered to improve future missions.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      name: "Falcon 9 Inaugural Flight",
      date: "January 15, 2022",
      rocket: "Falcon 9",
      mission: "Technology Demonstration",
      payload: "Multiple Test Satellites (800kg total)",
      success: true,
      description:
        "The first flight of our Falcon 9 rocket successfully demonstrated its increased payload capacity by deploying multiple test satellites into various orbits. This mission also tested our new stage separation mechanisms and upgraded propulsion systems.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      name: "ISROSat Rideshare",
      date: "April 5, 2022",
      rocket: "Falcon 9",
      mission: "Multi-payload Deployment",
      payload: "5 Satellites (1200kg total)",
      success: true,
      description:
        "This rideshare mission deployed five satellites for the Indian Space Research Organisation (ISRO), including communication, weather monitoring, and scientific research satellites. All payloads were successfully delivered to their intended orbits.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      name: "Reusability Test",
      date: "July 28, 2022",
      rocket: "Falcon 9",
      mission: "Technology Demonstration",
      payload: "Test Satellite (300kg)",
      success: true,
      description:
        "This mission marked our first successful recovery of a first stage booster, which landed precisely on our autonomous drone ship in the Bay of Bengal. This achievement significantly reduces the cost of future launches and marks a major milestone in our reusability program.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 7,
      name: "Lunar Orbiter Mission",
      date: "November 12, 2022",
      rocket: "Falcon 9",
      mission: "Lunar Exploration",
      payload: "Lunar Orbiter (550kg)",
      success: true,
      description:
        "Our first mission beyond Earth orbit successfully placed a lunar orbiter satellite that is now mapping the lunar surface in unprecedented detail. This mission demonstrates our capability to deliver payloads to cislunar space.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 8,
      name: "Heavy Lift Demonstration",
      date: "February 6, 2023",
      rocket: "Falcon Heavy",
      mission: "Technology Demonstration",
      payload: "Simulated Payload (8000kg)",
      success: true,
      description:
        "The inaugural flight of our Falcon Heavy rocket successfully demonstrated its heavy lift capability by launching a simulated payload equivalent to a large communications satellite. All three boosters were recovered successfully.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 9,
      name: "GeoSat-1",
      date: "May 20, 2023",
      rocket: "Falcon Heavy",
      mission: "Geostationary Satellite Deployment",
      payload: "Communication Satellite (5500kg)",
      success: false,
      description:
        "This mission aimed to place a large communication satellite in geostationary orbit. While the launch and initial orbital insertion were successful, an anomaly in the upper stage prevented the satellite from reaching its final orbit. Recovery operations are ongoing.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 10,
      name: "Mars Orbiter",
      date: "October 4, 2023",
      rocket: "Falcon Heavy",
      mission: "Interplanetary",
      payload: "Mars Orbiter (1200kg)",
      success: true,
      description:
        "Our most ambitious mission to date successfully launched a Mars orbiter that is now on its journey to the red planet. Expected to arrive in September 2024, this spacecraft will study the Martian atmosphere and surface to prepare for future missions.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  return (
    <div className={styles.timelineWrapper}>
      <motion.div className={styles.progressBar} style={{ scaleX: scrollXProgress }} />

      <div className={styles.timeline} ref={containerRef}>
        {launches.map((launch) => (
          <div
            key={launch.id}
            className={`${styles.timelineItem} ${launch.success ? styles.success : styles.failure}`}
            onClick={() => onSelectLaunch(launch)}
          >
            <div className={styles.timelineDate}>{launch.date}</div>
            <div className={styles.timelineContent}>
              <h3>{launch.name}</h3>
              <div className={styles.timelineMeta}>
                <span>{launch.rocket}</span>
                <span className={styles.dot}>•</span>
                <span>{launch.mission}</span>
              </div>
              <div className={styles.timelineStatus}>{launch.success ? "Success" : "Failure"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
