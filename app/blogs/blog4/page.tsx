"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import styles from "./blog4.module.css";

export default function Blog4() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.blogContainer}>
      <Navbar />
      
      <main className={styles.blogMain}>
        <div className={styles.blogContent}>
          {/* Back Button */}
          <Link href="/blogs" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>

          {/* Blog Header */}
          <header className={styles.blogHeader}>
            <h1 className={styles.blogTitle}>
              What If Gen Z Ran Space Missions?
            </h1>
            
            
            {/* Featured Image */}
            <div className={styles.featuredImageContainer}>
              <Image
                src="/images/Blogs/blog4.jpg"
                alt="Gen Z Space Mission Concept"
                width={800}
                height={400}
                className={styles.featuredImage}
                priority
              />
            </div>
          </header>

          {/* Blog Content */}
          <article className={styles.blogArticle}>
            <div className={styles.articleContent}>
              <p className={styles.leadParagraph}>
                Imagine you're hurtling toward Mars, your favorite playlist still pumping through the cabin. 
                At 3space, we believe the next generation's take on space exploration would look—and feel—completely different. 
                Here's our vision:
              </p>

              <h2 className={styles.sectionTitle}>Mission Control on Discord</h2>
              <p>
                No more hushed control rooms and endless button-pushing. Picture a vibrant Discord server—channels 
                like <code>#pls-no-meteors</code>, <code>#space-snacks</code>, and a chill Lo-fi bot in the background. 
                Want to launch? Type <code>/go-brr</code> and watch your rocket light up the sky.
              </p>

              <h2 className={styles.sectionTitle}>First Contact via TikTok</h2>
              <p>
                Formal press release? Nah. We'd drop a TikTok:
              </p>
              <blockquote className={styles.quote}>
                "Landed on Mars. No Wi-Fi. Miss my oat milk. "
              </blockquote>
              <p>
                It's authentic, it's viral—and it captures the moment.
              </p>

              <h2 className={styles.sectionTitle}>AI Copilot With Attitude</h2>
              <div className={styles.dialogueBox}>
                <p><strong>You:</strong> "Hey, how's the air?"</p>
                <p><strong>AI:</strong> "Breathable. Your vibe? Mid—but improving."</p>
              </div>
              <p>
                An AI that's helpful and hilarious keeps the crew sharp and entertained.
              </p>

              <h2 className={styles.sectionTitle}>Eco-First Exploration</h2>
              <p>
                Recycled spacecraft. Zero-waste habitats. And no moon camps without a proper alien welcome party. 
                Sustainability isn't a buzzword—it's mission critical.
              </p>

              <h2 className={styles.sectionTitle}>Meme Diplomacy</h2>
              <p>
                First contact protocol? A zipped folder of cat memes, a dancing frog GIF, and a heartfelt 
                Google Doc apology for Earth's past antics. Because friendship starts with a laugh.
              </p>

              <h2 className={styles.sectionTitle}> Launch Day = Festival Day</h2>
              <p>
                Drone light shows. Zero-G TikToks. Holograms belting "Welcome to the Galaxy." 
                And a countdown that ends with <strong>3…2…1… SLAY.</strong>
              </p>

              <div className={styles.conclusion}>
                <p>
                  At 3space, we're all about mixing cutting-edge tech with the human touch. 
                  Because exploring the universe should be as fun as it is groundbreaking.
                </p>
                <p className={styles.callToAction}>
                  <strong>Join us—and let's make cosmic history.</strong>
                </p>
              </div>
            </div>
          </article>

          
        </div>
      </main>

      <Footer />
    </div>
  );
}
