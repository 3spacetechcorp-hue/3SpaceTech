"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "./blog.module.css"

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug

  // For now, we'll just render blog1 content
  if (slug === "blog1") {
    return (
      <>
        <Navbar />
        
        <article className={styles.blogContainer}>
          <header className={styles.blogHeader}>
            <h1>From Fire Arrows to the Moon: India's Rocket Journey Through Time</h1>
            <p className={styles.subtitle}>How India carved out its space in the stars - from ancient dreams to modern missions</p>
          </header>

          <section className={styles.introSection}>
            <p>Ever looked up at the sky and wondered, "How did we get from simple fireworks to rockets landing on the Moon?"</p>
            <p>It's not just the story of science—it's the story of dreamers, warriors, and a nation rising against odds. And yes, India has been part of that story for much longer than most people realize.</p>
            <p>Let's take off and explore the amazing journey of rockets—and how India carved out its space in the stars.</p>
          </section>

          <section className={styles.contentSection}>
            <h2>Chapter 1: The Ancient Spark – When Imagination Took Flight</h2>
            <p>India has always been a land of imagination. Long before we built rockets, our ancient epics like the Ramayana and Mahabharata were already talking about flying chariots (Vimanas) and celestial weapons (Astras) that could chase enemies, explode with energy, and even change directions mid-air.</p>
            <p>Now, sure, they were part of mythology—but doesn't it show how deeply we were thinking about space and flight thousands of years ago? It's like our ancestors were dreaming of missiles and drones way before anyone else!</p>
          </section>

          <section className={styles.contentSection}>
            <h2>Chapter 2: Tipu Sultan – The Real-Life Rocket Warrior</h2>
            <p>Fast forward to the 1700s, and we meet Tipu Sultan, the ruler of Mysore. This man didn't just fight the British—he freaked them out with rockets! Mysorean Rockets were no ordinary firecrackers. They had iron casings, carried explosive payloads, and could travel up to 2 km.</p>  
            <p>Tipu's army would launch hundreds at once, turning the battlefield into a chaotic fireworks show (except... deadlier). And guess what? These rockets were so effective that the British took them back home and used the idea to create their own: the Congreve rockets, which they then used in wars across Europe. So yeah—India inspired European rocketry!</p>
          </section>

          <section className={styles.contentSection}>
            <h2>Chapter 3: A Nation Reborn – From Bullock Carts to Launch Pads</h2>
            <p>After independence in 1947, India had a dream—not just to grow, but to reach for the stars. Enter the space nerds. And at the center of it all was Dr. Vikram Sarabhai, the father of the Indian space program.</p>
            <p>In 1963, something magical happened. India launched its first rocket from Thumba, Kerala. The nose cone was carried on a bicycle, and the rocket parts came in a bullock cart. Seriously. It sounds funny now, but that humble moment launched an era of ambition and genius.</p>
          </section>

          <section className={styles.timelineSection}>
            <h2>Chapter 4: ISRO – India's Ticket to Space</h2>
            <p>In 1969, the same year humans walked on the Moon, India formed ISRO (Indian Space Research Organisation). And boy, has ISRO come a long way since then.</p>
            <div className={styles.milestoneContainer}>
              <div className={styles.milestone}>
                <span className={styles.year}>1980</span>
                <span className={styles.event}>- India launched its first satellite (Rohini-1) using its own rocket (SLV-3) with Dr. APJ Abdul Kalam leading the charge</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.year}>2008</span>
                <span className={styles.event}>- Chandrayaan-1: Our first Moon mission discovered water molecules on the Moon</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.year}>2013</span>
                <span className={styles.event}>- Mangalyaan: First country to reach Mars on first attempt (cost less than Hollywood's Gravity!)</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.year}>2019</span>
                <span className={styles.event}>- Mission Shakti: India joins elite anti-satellite weapon club</span>
              </div>
              <div className={styles.milestone}>
                <span className={styles.year}>2023</span>
                <span className={styles.event}>- Chandrayaan-3: First country to land near Moon's south pole</span>
              </div>
            </div>
          </section>

          <section className={styles.contentSection}>
            <h2>Chapter 5: The Future is Now – What's Next for Indian Rocketry?</h2>
            <p>The story doesn't end here. In fact, it's just getting started.</p>
            <p>ISRO is prepping for Gaganyaan, a mission to send Indian astronauts into space from Indian soil. Private companies like Skyroot Aerospace and Agnikul Cosmos are designing their own rockets like Vikram-S and Agnibaan. We're testing reusable rockets, space tourism ideas, and more! Who knows? The next person on Mars could be an Indian.</p>
          </section>

          <section className={styles.conclusionSection}>
            <h2>Final Thoughts: What Can We Learn from This Journey?</h2>
            <p>India's rocket journey isn't just about tech and science. It's about people who refused to give up. From Tipu Sultan's explosive innovations to scientists working with bicycles and bullock carts, and now to Moon landings and Mars orbits—India's space journey is a masterclass in jugaad, vision, and pure passion.</p>
            <p>So next time you see a rocket launch on TV or hear about a mission to space, remember: Our story started centuries ago. And it's only going up from here.</p>
          </section>
        </article>

        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className={styles.notFound}>
        <h1>Blog post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
      <Footer />
    </>
  )
} 