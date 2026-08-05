import './privacy.css'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <Navbar />
     
    <div className="privacy-container">
      <div className="privacy-wrapper">
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy Policy – Anjanisutah 3SPACE Pvt. Ltd.</h1>
        </div>
        <div className="privacy-content">
          <p className="privacy-updated">At Anjanisutah 3SPACE Pvt. Ltd., we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, <a href="https://www.3spacecorp.com/" target="_blank" rel="noopener noreferrer">https://www.3spacecorp.com/</a></p>
          <div className="privacy-section">
            <h2>1. Information We Collect</h2>
            <ul>
              <li><b>Personal Information:</b> Name, email address, phone number, company name (if provided).</li>
              <li><b>Technical Data:</b> IP address, browser type, device type, operating system.</li>
              <li><b>Usage Data:</b> Pages visited, time spent, clicks, and other website interaction data.</li>
              <li><b>Cookies and Tracking Technologies:</b> To improve user experience.</li>
            </ul>
          </div>
          <div className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Respond to inquiries or requests.</li>
              <li>Improve our website and services.</li>
              <li>Send updates, newsletters, or promotional content (with your consent).</li>
              <li>Analyze website traffic and user behavior.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>
          <div className="privacy-section">
            <h2>3. Sharing Your Information</h2>
            <p>We do not sell or rent your personal information. We may share data with:</p>
            <ul>
              <li><b>Service providers:</b> Web hosting, analytics</li>
              <li><b>Legal authorities:</b> If required by law.</li>
              <li><b>Business transfers:</b> In case of mergers or acquisitions.</li>
            </ul>
          </div>
          <div className="privacy-section">
            <h2>4. Cookies and Tracking</h2>
            <ul>
              <li>Website functionality</li>
              <li>Analytics</li>
              <li>Performance optimization</li>
            </ul>
            <p>You can control cookies through your browser settings.</p>
          </div>
          <div className="privacy-section">
            <h2>5. Data Security</h2>
            <p>We implement security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>
          <div className="privacy-section">
            <h2>6. Your Rights</h2>
            <ul>
              <li>Request access to the personal data we hold.</li>
              <li>Request correction or deletion.</li>
              <li>Opt-out of marketing communications at any time.</li>
            </ul>
          </div>
          <div className="privacy-section">
            <h2>7. Contact Us</h2>
            <p>For questions regarding this policy or your data:<br />
            Email: <a href="mailto:contactus@3spacecorp.com">contactus@3spacecorp.com</a></p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    
    </div>
    
    
  )
}