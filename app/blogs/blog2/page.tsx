"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "./blog2.module.css"
import { Calendar, User, Clock, ArrowLeft, Rocket, Users, Target, Lightbulb } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function BlogPost() {
  return (
    <>
      <Navbar />
      
      <div className={styles.readingProgress}></div>

      <div className={styles.blogContainer}>
        <header className={styles.blogHeader}>
          <h1>Women in Indian Space: A Journey of Excellence and Empowerment</h1>
          <p className={styles.subtitle}>How India carved out its space in the stars - from ancient dreams to modern missions</p>
          <div className={styles.blogImageWrapper}>
            <img
              src="/images/Blogs/blog2.jpg"
              alt="Women in Indian Space"
              className={styles.blogMainImage}
            />
            <span className={styles.imageCaption}>
              Celebrating the women behind India's space success
            </span>
          </div>
        </header>

        <main className={styles.blogMainContent}>
          <section className={`${styles.contentCard} ${styles.introCard}`}>
            <p>India's rise in space exploration is not only a triumph of science and engineering but also a celebration of the women who have redefined possibilities in one of the most challenging fields. From mission control rooms to spacecraft design labs, women have played a crucial role in shaping India's space legacy — a story not just of scientific progress but also of resilience and transformation.</p>
          </section>

          <section className={styles.contentCard}>
            <h2><Rocket size={20} /> The Trailblazers</h2>
            <p>Trailblazers like Dr. Ritu Karidhal, fondly known as the Rocket Woman of India, and Nandini Harinath, both central to the success of the Mars Orbiter Mission (Mangalyaan), proved that intellect and ambition know no gender. The mission itself made global headlines for its precision and cost-effectiveness, but the presence of women in leadership roles made it a moment of national pride. Chandrayaan-2 pushed the envelope further with Muthayya Vanitha as Project Director and Dr. Karidhal as Mission Director — marking the first time two women led such a major ISRO mission.</p>
          </section>

          <section className={styles.contentCard}>
            <h2><Target size={20} /> Breaking Barriers</h2>
            <p>Despite their achievements, women in India's space sector have often had to navigate cultural expectations, gender biases, and lack of representation. Their ability to balance high-pressure roles with personal responsibilities speaks volumes about their dedication and strength. It is not just about being part of the mission — they've led it, designed it, and made it soar.</p>
          </section>

          <section className={styles.contentCard}>
            <h2><Lightbulb size={20} /> Inspiring the Next Generation</h2>
            <p>These women have not only advanced India's scientific capabilities but have also inspired a generation. Popular culture, through films like Mission Mangal, has amplified their contributions and encouraged young girls to envision themselves as scientists, engineers, and leaders in space technology. When young minds see women breaking barriers in labs and launchpads, they begin to believe in the power of their own potential.</p>
          </section>

          <section className={styles.contentCard}>
            <h2><Users size={20} /> Building the Future</h2>
            <p>At 3SPACE, we don't just build spacecraft — we build a future inspired by these pioneering women. Their journeys fuel our mission to create an ecosystem where innovation thrives on merit, not limited by stereotypes. From propulsion engineers to system designers, we believe every young girl deserves to see herself in these roles, not as exceptions, but as equals.</p>
          </section>

          <section className={styles.contentCard}>
            <h2><Rocket size={20} /> Continuing the Legacy</h2>
            <p>We are committed to continuing this legacy — not just by remembering the women who made history, but by empowering those who will make the future. For us, the cosmos is not just a destination — it's a canvas where everyone, regardless of gender, can leave a mark.</p>
          </section>

          <section className={`${styles.contentCard} ${styles.conclusionCard}`}>
            <h2>Looking to the Stars</h2>
            <p>As India reaches for the stars with upcoming missions like Aditya-L1 and Venus exploration, one thing is certain: when Indian women enter the control room, the universe listens. At 3SPACE, we are proud to walk in their footsteps — and launch forward, one mission at a time.</p>
          </section>
        </main>

        <aside className={styles.blogSidebar}>
          {/* <div className={styles.authorInfo}>
            <div className={styles.authorAvatar}>3S</div>
            <div className={styles.authorDetails}>
              <h4>3SPACE Team</h4>
              <p>Space Technology & Innovation</p>
            </div>
          </div> */}

          <div className={styles.sidebarCard}>
            <h3> Mission Stats</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Women Scientists</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Major Missions</span>
              </div>
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h3>Key Highlights</h3>
            <ul className={styles.keyHighlights}>
              <li>Dr. Ritu Karidhal - "Rocket Woman of India"</li>
              <li>Mangalyaan mission success</li>
              <li>Chandrayaan-2 dual leadership</li>
              <li>Breaking cultural barriers</li>
              <li>Inspiring next generation</li>
              <li>3SPACE's commitment to equality</li>
            </ul>
          </div>

          <div className={styles.sidebarCard}>
            <h3>Featured Missions</h3>
            <ul className={styles.keyHighlights}>
              <li>Mars Orbiter Mission (Mangalyaan)</li>
              <li>Chandrayaan-2 Lunar Mission</li>
              <li>Upcoming Aditya-L1</li>
              <li>Venus Exploration Program</li>
            </ul>
          </div>

          <div className={styles.sidebarCard}>
            <h3> Did You Know?</h3>
            <p style={{color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6'}}>
              India's Mars mission cost less than the Hollywood movie "Gravity" and was completed in the first attempt - a testament to the brilliant minds, including many women, behind ISRO's success.
            </p>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  )
}