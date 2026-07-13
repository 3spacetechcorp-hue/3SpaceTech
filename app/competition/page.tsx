import React from 'react';
import Image from 'next/image';
import styles from './competition.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CompetitionPage = () => {
  return (
    <>
    <Navbar />
    
  
    <div className={styles.competitionContainer}>
        
      <main className={styles.competitionMain}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.posterWrapper}>
            {/* Poster image, replace src with actual poster if available */}
            <Image
              src="/images/poster.jpg"
              alt="3Space Tech Competition Poster"
              width={420}
              height={520}
              className={styles.competitionPoster}
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <h1>3Space Tech – National Aerospace Innovation Challenge</h1>
            <p className={styles.tagline}>
              Compete with Purpose. Innovate with Passion. Launch Your Aerospace Journey.
            </p>
            <p>
              Are you ready to turn your curiosity into creation?
            </p>
            <p>
              <strong>3Space Tech</strong> invites India's brightest young minds to a prestigious national-level competition aimed at discovering and nurturing next-generation talent in aerospace technology.
            </p>
            <p>
              This isn't just another contest—<br />
              <strong>It's your launchpad to real innovation, industry exposure, and career acceleration.</strong>
            </p>
          </div>
        </section>

        {/* Competition Image Section */}
        <section className={styles.competitionImageSection}>
        <h2 className={styles.sectionTitle}>Stages of the Ideathon</h2>
          <div className={styles.competitionImageWrapper}>
            <Image
              src="/compitition.jpg"
              alt="3Space Tech Competition"
              width={1200}
              height={675}
              className={styles.competitionImage}
              priority
            />
          </div>
          {/* <div className={styles.competitionInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Registration Fee:</span>
              <span className={styles.infoValue}>₹1000 per team</span>
            </div>
          </div> */}
        </section>

        {/* Benefits Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why You Should Participate</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Top 3 Teams Will Gain:</h3>
              <ul>
                <li>Hands-on Experience in aerospace design</li>
                <li>Direct Industry Exposure with real engineers</li>
                <li>Boost Your Resume with a national-level project</li>
              </ul>
            </div>
            <div className={styles.benefitCard}>
              <h3>Other Qualified Teams Will Receive:</h3>
              <ul>
                <li>Internship opportunities based on interview performance</li>
                <li>Certificate of Participation</li>
                <li>Industry-level learning and skill-building exposure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Beyond Competition Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Beyond the Competition</h2>
          <p>       
            While the challenge is primarily conducted online to ensure nationwide accessibility, the journey doesn’t end there for the top-performing teams:
          </p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Collaborate closely with the 3Space Tech team through hybrid (online + offline) formats</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Get an exclusive on-site experience at the launch facility</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Assist in real-time payload integration and potentially witness the live launch of your designed payload.</span></li>
          </ul>
        </section>

        {/* Eligibility Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Can Apply</h2>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}><span className={styles.featureIcon}>👥</span><span className={styles.featureText}>Open for all: Aerospace Engineering or related branches preferred</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>👥</span><span className={styles.featureText}>Individuals with a strong drive for innovation and problem-solving</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>👥</span><span className={styles.featureText}>Teams seeking real-world project experience and national recognition.</span></li>
          </ul>
        </section>

        {/* Important Notes Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Important Notes</h2>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>Design a 1kg / 2kg / 3kg suborbital payload for a sounding launch mission reaching 10km altitude</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>Participants must follow the schedule strictly—delays in submission or attendance during key phases may lead to disqualification</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>All updates, results, and instructions will be shared via official communication channels—stay alert and responsive.</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>Last date for registration: 10 July 2025</span></li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Make Your Mark</h2>
        <p className={styles.ctaDescription}>
            This is more than just a challenge—it's an invitation to build, learn, and lead.<br />
            Whether you're an aspiring engineer, innovator, or changemaker—this is your chance to be part of something bigger.
        </p>
        <div className={styles.ctaBox}>
            <span className={styles.ctaStatus}>Registration fees: ₹1000/- per team</span>
            <p>Registration deadline: 10 July 2025</p>
            <div className={styles.buttonContainer}>
                <a href="https://forms.gle/EjfsFQG2Fdt1kcvr7" className={styles.ctaButton}>
                    <span className={styles.buttonIcon}>🚀</span>
                    Register Now
                </a>
                <a href="./rulebook.pdf" className={styles.rulebookButton}>
                    <span className={styles.buttonIcon}>📋</span>
                    Rulebook
                </a>
            </div>
        </div>
        <p className={styles.ctaFooter}>
            Take the leap. Compete with the best. Build the future with 3Space Tech.
        </p>
        <div className={styles.contactBox}>
            <b>For any queries, contact us at:</b> <span>contactus@3spacecorp.com</span>
        </div>
    </section>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default CompetitionPage;