import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
// import CustomCursor from "@/components/CustomCursor"

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
        
        {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  )
}