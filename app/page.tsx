"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchCountdown from "@/components/LaunchCountdown";
// import CollaborativeNetworkSection from "@/components/collab";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { FaFlask, FaChevronDown } from "react-icons/fa";
import { Rocket, Satellite, Trophy } from "lucide-react";
import Image from "next/image";


export default function Home() {
  const iconStyle = {
    color: "white",
    strokeWidth: 1.5,
  };

  interface FAQItem {
    id: number;
    title: string;
    question: string;
    answer: string;
    difficulty: string;
  }

  const faqs: FAQItem[] = [
    {
      id: 1,
      title: "What are our main products and services?",
      question: "What are our main products and services?",
      answer: "We offer reusable rockets, satellite launch services, payload deployment, simulation-based design, 3D-printed components, and educational rocketry kits—providing scalable, cost-effective solutions for commercial clients, researchers, and space enthusiasts.",
      difficulty: "General",
    },
    {
      id: 2,
      title: "How can startups or research institutions or any organization collaborate with us?",
      question: "How can startups or research institutions or any organization collaborate with us?",
      answer: "Organizations can collaborate through payload partnerships, joint research, sponsorships, or co-development. We're open to teaming up with startups, institutions, and engineers to drive innovation and launch missions together.",
      difficulty: "Partnerships",
    },
    {
      id: 3,
      title: "Does our company offer internship or career opportunities?",
      question: "Does our company offer internship or career opportunities?",
      answer: "Yes, we offer various career opportunities. You can visit our Careers page for more information and to explore current openings or internship programs.",
      difficulty: "Careers",
    },
    {
      id: 4,
      title: "How can you contact our team for business or technical inquiries?",
      question: "How can you contact our team for business or technical inquiries?",
      answer: "You can contact us using the email addresses provided below, or simply fill out the contact form with your query—we’ll get back to you as soon as possible.",
      difficulty: "Contact",
    },
  ];

  // competion popup
  const [activePyq, setActivePyq] = useState<number | null>(null);
  // const [showCompetitionPopup, setShowCompetitionPopup] = useState(true);

  const togglePyq = (id: number) => {
    setActivePyq((prev) => (prev === id ? null : id));
  };



  return (
    <>
      

      
      <Navbar />
      {/* FireworkEffect removed */}
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroFlexContainer}>
            <div className={styles.earthImageContainer}>
              <Image
                src="/image/mars.png"
                alt="Earth from space"
                fill
                className={styles.earthImage}
                priority
              />
            </div>
            <div className={styles.heroContentWrapper}>
              <motion.div
                className={styles.heroContent}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1>Welcome to 3SPACE</h1>
                <p>Building Tomorrow's Launch Technologies, Today — with reusable rockets and next-gen aerospace systems.</p>
                <div className={styles.heroBtns} style={{ position: 'relative', display: 'inline-block' }}>
                  <a href="/about" className="btn btn-primary" style={{ position: 'relative', zIndex: 2 }}>
                    <div className={styles.competitionButtonContent}>
                      <span className={styles.competitionText}>About Us</span>
                     
                        
                    </div>
                  </a>
                  {/* CompetitionFireworkEffect removed */}
                  {/* <a href="/products" className="btn btn-secondary">Explore Rockets</a> */}
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
        </section>

        {/* Star Background */}
        <div className={styles.starfield}>
          <div className={styles.stars}></div>
          <div className={styles.stars}></div>
          <div className={styles.stars}></div>
        </div>

        {/* Countdown */}
        <section id="countdown" className={`section ${styles.countdownSection}`}>
          <div className="container">
            <h2 className="section-title">Next Rocket Launch</h2>
            <p className="section-subtitle">
              Join us for our next mission as we continue to push the boundaries of space exploration
            </p>
            <LaunchCountdown />
          </div>
        </section>

        {/* <CollaborativeNetworkSection /> */}

        {/* Features */}
        <section className={`section ${styles.featuresSection}`}>
          <div className="container">
            <h2 className="section-title">Why Choose 3SPACE?</h2>
            <div className="grid grid-3">
              {[
                {
                  icon: <Rocket size={32} style={iconStyle} />,
                  title: "Reusable Rockets",
                  text: "Slash launch costs by up to 70% with next-gen reusability.",
                },
                {
                  icon: <Satellite size={32} style={iconStyle} />,
                  title: "Sustainable Space",
                  text: "Eco-conscious launches with low emissions and zero space debris.",
                },
                {
                  icon: <FaFlask size={32} style={iconStyle} />,
                  title: "Research & Development",
                  text: "Pioneering advances in propulsion, materials, and space living systems.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                  viewport={{ once: true }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container">
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Join us at 3SPACE and become a part of something bigger.</h2>
              <p>Explore a wide range of career paths that empower you to shape the future of sustainable and inclusive space exploration.</p>
              <div className={styles.ctaBtns}>
                <a href="/careers" className="btn btn-primary">Explore</a>
                {/* <a href="/about" className="btn btn-secondary">Learn More</a> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PYQs */}
        <section className={`section ${styles.pyqsSection}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.pyqsHeader}
            >
              <h2 className={styles.pyqsTitle}>Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find answers to common queries below. Still have questions? Reach out to us!
              </p>
            </motion.div>

            <div className={styles.pyqsList}>
              {faqs.map((faq: FAQItem) => (
                <motion.div
                  key={faq.id}
                  className={`${styles.pyqItem} ${activePyq === faq.id ? styles.pyqOpen : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={styles.pyqQuestion}
                    onClick={() => togglePyq(faq.id)}
                  >
                    <h3>{faq.title}</h3>
                    <FaChevronDown
                      className={`${styles.pyqChevron} ${
                        activePyq === faq.id ? styles.rotateChevron : ""
                      }`}
                    />
                  </div>
                  <div className={styles.pyqAnswer}>
                    <p className={styles.pyqAnswerText}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.pyqsViewMore}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="/FAQ" className="btn btn-secondary">View All Questions</a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
