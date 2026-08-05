import React from 'react'
import './terms.css' // Corrected import for the CSS file
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="terms-page">
      <Navbar />
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Terms &amp; Conditions – Anjanisutah 3SPACE Pvt. Ltd.</h1>
      <div className="prose prose-invert max-w-none">
        <p>Welcome to <a href="https://www.3spacecorp.com" target="_blank" rel="noopener noreferrer">https://www.3spacecorp.com</a>. By using our website, you agree to comply with the following terms and conditions.</p>
        <hr className="my-6" />
        <h2>1. Intellectual Property</h2>
        <p>All content, including text, graphics, logos, and images, is the property of 3Space Corp unless otherwise stated. Unauthorized use is prohibited.</p>
        <hr className="my-6" />
        <h2>2. Use of Website</h2>
        <ul>
          <li>Use this website legally.</li>
          <li>Not attempt to disrupt its functionality.</li>
          <li>Not engage in data scraping, hacking, or harmful activities.</li>
        </ul>
        <hr className="my-6" />
        <h2>3. Disclaimers</h2>
        <ul>
          <li>The website is provided "as is" without warranties of any kind.</li>
          <li>We do not guarantee that the information is accurate, complete, or current.</li>
        </ul>
        <hr className="my-6" />
        <h2>4. Limitation of Liability</h2>
        <p>3Space Corp will not be liable for any damages arising from the use or inability to use the website.</p>
        <hr className="my-6" />
        <h2>5. External Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
        <hr className="my-6" />
        <h2>6. Governing Law</h2>
        <p>These terms are governed by the laws of India, and any disputes will be handled under its jurisdiction.</p>
        <hr className="my-6" />
        <h2>7. Termination</h2>
        <p>We reserve the right to restrict or terminate access to our website if these terms are violated.</p>
        <hr className="my-6" />
        <h2>8. Contact Us</h2>
        <p>For questions regarding this policy or your data:<br />
        Email: <a href="mailto:contactus@3spacecorp.com">contactus@3spacecorp.com</a></p>
      </div>
    </div>

      <Footer />
    </div>
  )
}