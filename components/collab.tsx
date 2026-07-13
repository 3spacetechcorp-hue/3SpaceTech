import React from "react";
import styles from "@/styles/components/CollaborativeNetwork.module.css";

const CollaborativeNetworkSection = () => {
  const partners = [
    {
      name: 'SWATI',
      logo: 'SWATI',
      type: 'text'
    },
    {
      name: 'Pomegranate',
      logo: 'Pomegranate',
      type: 'text'
    },
    {
      name: 'Gargoosh',
      logo: 'Gar◊oosh',
      type: 'text'
    },
    {
      name: 'Velocity',
      logo: 'VELO.CITY',
      type: 'text'
    }
  ];

  return (
    <section className={styles.collaborativeNetwork}>
      <div className={styles.networkContainer}>
        <div className={styles.networkHeader}>
          <h2 className={styles.networkTitle}>
            Our<br />
            Collaborative<br />
            Network
          </h2>
        </div>
        
        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <div className={styles.partnerLogo}>
                {partner.name === 'SWATI' && (
                  <div className={styles.swatiLogo}>
                    <span className={styles.swatiText}>SWATI</span>
                  </div>
                )}
                {partner.name === 'Pomegranate' && (
                  <div className={styles.pomegranateLogo}>
                    <div className={styles.pomeText}>Pome</div>
                    <div className={styles.granateText}>granate</div>
                  </div>
                )}
                {partner.name === 'Gargoosh' && (
                  <div className={styles.gargooshLogo}>
                    <span className={styles.gargooshText}>Gar◊oosh</span>
                  </div>
                )}
                {partner.name === 'Velocity' && (
                  <div className={styles.velocityLogo}>
                    <div className={styles.veloIcon}>⚡</div>
                    <div className={styles.veloText}>VELO.<br />CITY</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborativeNetworkSection;
