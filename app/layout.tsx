import Script from "next/script"
import type React from "react"
import { Inter } from "next/font/google"
// Ignore missing type declarations for global CSS import
// @ts-ignore
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "3SPACE - Leading Space Exploration",
  description:
    "Making India a global leader in space exploration through cost-effective satellite launches and reusable rockets.",
  icons: {
    // icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

  <Script
    id="organization-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Anjanisutah 3Space Pvt. Ltd.",
        alternateName: "3Space",
        url: "https://a3spacetech.com",
        logo: "https://a3spacetech.com/logo.png",
        email: "contactus@a3spacetech.com",
        sameAs: [
          "https://www.linkedin.com/company/3space-aerospace-and-space-technologies-company/",
          "https://www.instagram.com/anjanisutah_3space",
          "https://x.com/3Space_tech",
          "https://youtube.com/@anjanisutah_3space"
        ]
      })
    }}
  />

  {children}

</body>
    </html>
  )
}