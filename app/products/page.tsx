"use client";

import ParallaxBackground from "@/components/ParallaxBackground";
import Navbar from "@/components/Navbar";

import styles from "@/styles/components/RocketModel.module.css";

export default function Rockets() {
  return (
    <div className={styles.container}>
      <Navbar />

      {/* Hero with â€œLaunching Soonâ€ */}
      <section className={styles.hero}>
        <ParallaxBackground />
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Coming Soon</h1>
          <p className={styles.subtitle}>
            Explore our fleet of advanced model rockets and launch kits
          </p>
        </div>
      </section>

      {/* Coming Soon callout */}
      <section className={styles.callout}>
        <div className={styles.calloutInner}>
          <p className={styles.calloutText}>
             Exciting Products in Development!
          </p>
        </div>
      </section>

          </div>
  );
}
