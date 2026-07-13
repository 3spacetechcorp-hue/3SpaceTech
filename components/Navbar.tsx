"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import styles from "@/styles/components/Navbar.module.css" // Adjust path as needed

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 50)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      handleScroll()
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  const handleLinkClick = () => {
    setIsDropdownOpen(false)
  }

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Cart Button - Icon Only */}
        <Link 
          href="/products" 
          className={styles.emailIconButton}
          aria-label="View products"
          title="View products"
        >
          <ShoppingCart size={20} />
        </Link>
        
        {/* Centered Logo */}
        <div className={styles.logoCenter}>
          <Link href="/" className={styles.logo} onClick={handleLinkClick}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="3SPACE"
                width={250}
                height={250}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNavWrapper} aria-label="Main Navigation">
          <button
            className={styles.desktopNavToggle}
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-controls="desktop-nav-dropdown"
            aria-label={isDropdownOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isDropdownOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {isDropdownOpen && (
            <div className={styles.desktopNavDropdown} id="desktop-nav-dropdown">
              <Link href="/" className={styles.navLink} onClick={handleLinkClick}>Home</Link>
              <Link href="/about" className={styles.navLink} onClick={handleLinkClick}>About</Link>
              <Link href="/products" className={styles.navLink} onClick={handleLinkClick}>Products</Link>
              <Link href="/blogs" className={styles.navLink} onClick={handleLinkClick}>Blogs</Link>
              <Link href="/careers" className={styles.navLink} onClick={handleLinkClick}>Careers</Link>
              <Link href="/competition" className={styles.navLink} onClick={handleLinkClick}>Competition</Link>              
            </div>
          )}
        </nav>

        {/* Mobile Navigation */}
        <nav className={styles.mobileNavWrapper} aria-label="Main Navigation">
          <button
            className={styles.mobileNavToggle}
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-controls="mobile-nav-dropdown"
            aria-label={isDropdownOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isDropdownOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isDropdownOpen && (
            <div className={styles.mobileNavDropdown} id="mobile-nav-dropdown">
              <Link href="/" className={styles.navLink} onClick={handleLinkClick}>Home</Link>
              <Link href="/about" className={styles.navLink} onClick={handleLinkClick}>About</Link>
              <Link href="/products" className={styles.navLink} onClick={handleLinkClick}>Products</Link>
              <Link href="/blogs" className={styles.navLink} onClick={handleLinkClick}>Blogs</Link>
              <Link href="/careers" className={styles.navLink} onClick={handleLinkClick}>Careers</Link>
              <Link href="/competition" className={styles.navLink} onClick={handleLinkClick}>Competition</Link>
              
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
