"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Axiom4Mission = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const missionStats = [
    { number: 'June 25', label: 'Launch Date 2025' },
    { number: '4', label: 'Crew Members' },
    { number: '14', label: 'Days in Space' },
    { number: '60+', label: 'Experiments' }
  ];

  const timeline = [
    { date: 'June 25, 2025', event: 'Launch from Kennedy Space Center' },
    { date: 'June 26, 2025', event: 'Docking with ISS' },
    { date: 'June 27 - July 8', event: 'Scientific experiments' },
    { date: 'July 9, 2025', event: 'Return to Earth' }
  ];

  const keyFacts = [
    { label: 'Mission Duration', value: '14 days' },
    { label: 'Crew Size', value: '4 astronauts' },
    { label: 'Countries Involved', value: '31 nations' },
    { label: 'Total Experiments', value: '60+' }
  ];

  return (
    <div style={styles.body}>
      <Navbar />
      <style>{cssStyles}</style>
      
      <div className="scroll-indicator" style={{
        ...styles.scrollIndicator,
        transform: `scaleX(${scrollProgress / 100})`
      }} />
      
      <div className="container" style={styles.container}>
        {/* Hero Section */}
        <section className="hero-section" style={styles.heroSection}>
          <div className="hero-content" style={styles.heroContent}>
            <div className="mission-badge" style={styles.missionBadge}>
              🚀 SPACE MISSION COVERAGE
            </div>
            <h1 className="hero-title" style={styles.heroTitle}>Axiom-4 Mission</h1>
            <p className="hero-subtitle" style={styles.heroSubtitle}>India's Grand Return to Space</p>
            
            <div className="mission-stats" style={styles.missionStats}>
              {missionStats.map((stat, index) => (
                <div key={index} className="stat-card" style={styles.statCard}>
                  <div className="stat-number" style={styles.statNumber}>{stat.number}</div>
                  <div className="stat-label" style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="content-section" style={styles.contentSection}>
          {/* Featured Video */}
          <div className={`fade-in video-container ${visibleElements.has('video') ? 'visible' : ''}`} 
               id="video" 
               style={styles.videoContainer}>
            <video 
              style={{...styles.featuredVideo, height: 600}}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/Blogs/blogvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={styles.videoCaption}>
              Axiom-4 Mission Launch - Historic moment of India's return to space
            </div>
          </div>
          
          <div className={`fade-in opening-quote ${visibleElements.has('quote') ? 'visible' : ''}`} 
               id="quote" 
               style={styles.openingQuote}>
            <p style={styles.quoteText}>
              It was on June 25, 2025, that the world saw one of the most significant moments in space history when Axiom Space sent its fourth private crewed mission, Axiom-4 (Ax-4), to the International Space Station (ISS). This mission not only advanced Axiom's ambitious project of commercializing low-Earth orbit but also bore with it the aspirations of more than a billion Indians.
            </p>
          </div>

          <div className="content-grid" style={styles.contentGrid}>
            <div className="main-content" style={styles.mainContent}>
              <p className={`fade-in ${visibleElements.has('p1') ? 'visible' : ''}`} id="p1" style={styles.paragraph}>
                But Axiom-4 is so much more than a national moment of pride. It was a significant step in the transformation of the global space industry from government-supported missions towards commercial and collaborative efforts. Axiom Space, a private US-based spaceflight company, has been at the forefront of making such missions possible through its vision of establishing the first commercial space station.
              </p>

              <p className={`fade-in ${visibleElements.has('p2') ? 'visible' : ''}`} id="p2" style={styles.paragraph}>
                The crew of the mission is made up of four astronauts from various nations and institutions, carefully chosen for their experience, scientific acumen, and role in international space objectives. India's Shubhanshu Shukla was not chosen by ISRO but through collaboration with Axiom Space. With him came a decade of experience as an Indian Air Force test pilot, extensive training for deep space on the ISRO's Gaganyaan program, and a fervent enthusiasm to take India's footprint further into the universe.
              </p>

              <div className={`fade-in highlight-box ${visibleElements.has('highlight') ? 'visible' : ''}`} 
                   id="highlight" 
                   style={styles.highlightBox}>
                <p style={styles.highlightText}>
                  What is unique about Ax-4 is the magnitude and variance of its research agenda. Over 60 experiments from 31 nations are being performed in this mission, one of the most scientifically demanding private spaceflights ever.
                </p>
              </div>

              <p className={`fade-in ${visibleElements.has('p3') ? 'visible' : ''}`} id="p3" style={styles.paragraph}>
                The Axiom-4 mission is scheduled for a 14-day trip on the ISS, where the astronauts are performing an array of cutting-edge experiments. These include research into muscle atrophy in microgravity, a key topic with missions by space agencies underway to lengthier trips to the Moon and Mars. The team is also researching biological resilience, plant development, and micro-algae cultivation.
              </p>

              <div className={`fade-in image-gallery ${visibleElements.has('gallery') ? 'visible' : ''}`} 
                   id="gallery" 
                   style={styles.imageGallery}>
                <div className="gallery-item" style={styles.galleryItem}>
                  <img 
                    src="/images/Blogs/blog3.jpg"
                    alt="International Space Station" 
                    style={styles.galleryImage}
                  />
                  <div className="gallery-caption" style={styles.galleryCaption}>
                    International Space Station - The destination of Axiom-4 mission
                  </div>
                </div>
                <div className="gallery-item" style={styles.galleryItem}>
                  <img 
                    src="/images/Blogs/3.jpg"
                    alt="Shubhanshu Shukla and crew" 
                    style={styles.galleryImage}
                  />
                  <div className="gallery-caption" style={styles.galleryCaption}>
                    Group Captain Shubhanshu Shukla and the Axiom-4 crew
                  </div>
                </div>
              </div>

              <p className={`fade-in ${visibleElements.has('p4') ? 'visible' : ''}`} id="p4" style={styles.paragraph}>
                The launch itself was a picture-perfect show of SpaceX's now commonplace but still breathtaking technology. The Falcon 9 rocket took off from Kennedy Space Center in Florida, delivering the Crew Dragon capsule into orbit. Within 24 hours of the launch, the capsule docked successfully with the ISS, where the crew was greeted by astronauts who were already on board.
              </p>

              <p className={`fade-in ${visibleElements.has('p5') ? 'visible' : ''}`} id="p5" style={styles.paragraph}>
                For India, Shubhanshu Shukla's place in this mission is symbolically significant. He might not be on board ISRO's Gaganyaan launch yet, but his contribution to an international mission demonstrates the nation's willingness to join the global space community. It also provides ISRO with a rich foresight of how Indian astronauts can work together in multinational environments.
              </p>

              <p className={`fade-in ${visibleElements.has('p6') ? 'visible' : ''}`} id="p6" style={styles.paragraph}>
                The Ax-4 mission also points toward the future of space exploration — one that is commercial, collaborative, and continuous. It is not merely about getting to space; it's about remaining there, working there, and making it a frontier for science, commerce, and diplomacy.
              </p>
            </div>

            <div className="sidebar" style={styles.sidebar}>
              <h3 style={styles.sidebarTitle}>Mission Timeline</h3>
              <ul className="mission-timeline" style={styles.missionTimeline}>
                {timeline.map((item, index) => (
                  <li key={index} style={styles.timelineItem}>
                    <div className="timeline-date" style={styles.timelineDate}>{item.date}</div>
                    <div className="timeline-event" style={styles.timelineEvent}>{item.event}</div>
                  </li>
                ))}
              </ul>

              <h3 style={{...styles.sidebarTitle, marginTop: '2rem'}}>Key Facts</h3>
              <ul style={styles.keyFactsList}>
                {keyFacts.map((fact, index) => (
                  <li key={index} style={styles.keyFactItem}>
                    <strong style={styles.keyFactLabel}>{fact.label}:</strong> {fact.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="conclusion-section" style={styles.conclusionSection}>
          <h2 style={styles.conclusionTitle}>A New Chapter in Space History</h2>
          <p style={styles.conclusionText}>
            As Shukla sent his inaugural message from the ISS, a warm "Namaskar" to planet Earth, it was more than a salutation. It was an indication that India is not on the sidelines observing space missions anymore. It is joining in, giving back, and writing its own script. The success of Axiom-4 provides a window into a future where borders melt away in light years and humanity progresses together among the stars.
          </p>
          
          <p style={styles.conclusionFinalText}>
            India's return to space has started — not with one step, but as one of a multitude of steps into a common cosmic future.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    lineHeight: 1.6,
    color: '#e0e0e0',
    background: '#0a0a0a',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  
  scrollIndicator: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #ffffff, #cccccc)',
    transformOrigin: 'left',
    transition: 'transform 0.1s ease',
    zIndex: 1000
  },
  
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#1a1a1a',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
    overflow: 'hidden',
    marginTop: '2rem',
    marginBottom: '2rem',
    border: '1px solid #333'
  },
  
  heroSection: {
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    color: 'white',
    padding: '4rem 2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid #333'
  },
  
  heroContent: {
    position: 'relative',
    zIndex: 2
  },
  
  missionBadge: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    padding: '0.5rem 1.5rem',
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '2rem',
    display: 'inline-block',
    backdropFilter: 'blur(10px)',
    color: '#ffffff'
  },
  
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 900,
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #ffffff, #cccccc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1
  },
  
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    opacity: 0.9,
    fontWeight: 300
  },
  
  missionStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  },
  
  statCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '15px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '0.5rem'
  },
  
  statLabel: {
    fontSize: '0.9rem',
    opacity: 0.7,
    color: '#cccccc'
  },
  
  contentSection: {
    padding: '4rem 2rem',
    background: '#1a1a1a'
  },
  
  videoContainer: {
    position: 'relative',
    marginBottom: '3rem',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)'
  },
  
  featuredVideo: {
    width: '100%',
    height: 600,
    objectFit: 'cover' as React.CSSProperties['objectFit'],
    borderRadius: 20,
    transition: 'transform 0.3s ease'
  },
  
  videoCaption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))',
    color: 'white',
    padding: '2rem 1.5rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 500
  },
  
  openingQuote: {
    background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
    color: 'white',
    padding: '3rem',
    borderRadius: '20px',
    marginBottom: '3rem',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #333'
  },
  
  quoteText: {
    fontSize: '1.2rem',
    lineHeight: 1.8,
    margin: 0,
    position: 'relative',
    zIndex: 2
  },
  
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: '4rem',
    marginTop: '3rem'
  },
  
  mainContent: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#e0e0e0'
  },
  
  paragraph: {
    marginBottom: '2rem',
    textAlign: 'justify'
  },
  
  highlightBox: {
    background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
    color: 'white',
    padding: '2rem',
    borderRadius: '15px',
    margin: '2rem 0',
    border: '1px solid #444'
  },
  
  highlightText: {
    margin: 0,
    fontWeight: 500,
    textAlign: 'justify'
  },
  
  imageGallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  },
  
  galleryItem: {
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease',
    border: '1px solid #333'
  },
  
  galleryImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  },
  
  galleryCaption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))',
    color: 'white',
    padding: '2rem 1.5rem 1.5rem',
    fontSize: '0.9rem'
  },
  
  sidebar: {
    background: '#222',
    padding: '2rem',
    borderRadius: '20px',
    height: 'fit-content',
    position: 'sticky',
    top: '2rem',
    border: '1px solid #333'
  },
  
  sidebarTitle: {
    color: '#ffffff',
    marginBottom: '1.5rem',
    fontSize: '1.3rem'
  },
  
  missionTimeline: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  
  timelineItem: {
    padding: '1rem 0',
    borderLeft: '3px solid #ffffff',
    paddingLeft: '1.5rem',
    marginBottom: '1rem',
    position: 'relative'
  },
  
  timelineDate: {
    fontSize: '0.9rem',
    color: '#cccccc',
    fontWeight: 600
  },
  
  timelineEvent: {
    fontSize: '1rem',
    color: '#e0e0e0',
    marginTop: '0.5rem'
  },
  
  keyFactsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  
  keyFactItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid #333',
    color: '#e0e0e0'
  },
  
  keyFactLabel: {
    color: '#ffffff'
  },
  
  conclusionSection: {
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    color: 'white',
    padding: '4rem 2rem',
    textAlign: 'center',
    marginTop: '4rem',
    borderTop: '1px solid #333'
  },
  
  conclusionTitle: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    fontWeight: 700
  },
  
  conclusionText: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.8
  },
  
  conclusionFinalText: {
    marginTop: '2rem',
    fontSize: '1.4rem',
    fontWeight: 600,
    maxWidth: '800px',
    margin: '2rem auto 0',
    lineHeight: 1.8
  }
};

const cssStyles = `
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
  }
  
  .gallery-item:hover {
    transform: translateY(-10px);
  }
  
  .featured-video:hover {
    transform: scale(1.02);
  }
  
  .timeline-item::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 1.5rem;
    width: 12px;
    height: 12px;
    background: #ffffff;
    border-radius: 50%;
  }
  
  .opening-quote::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 8rem;
    opacity: 0.2;
    font-family: serif;
    color: #ffffff;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.05)"/></svg>') repeat;
    animation: float 20s infinite linear;
  }
  
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    100% { transform: translateY(-20px) rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    .container {
      margin: 1rem;
      border-radius: 15px;
    }
    
    .hero-title {
      font-size: 2.5rem !important;
    }
    
    .hero-subtitle {
      font-size: 1.2rem !important;
    }
    
    .content-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    
    .sidebar {
      position: static !important;
    }
    
    .mission-stats {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    
    .content-section {
      padding: 2rem 1rem !important;
    }
    
    .hero-section {
      padding: 2rem 1rem !important;
    }
  }
`;

export default Axiom4Mission;