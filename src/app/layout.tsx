/** @format */

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TopHeader from "@/containers/HomeContainers/TopHeader"
import NavBar from "@/containers/HomeContainers/NavBar"
import MobileHeader from "@/components/MobileHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KarwaoFix - Your Trusted Home Service Partner",
  description: "Professional home services including plumbing, electrical, carpentry, and more."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <NavBar />
        <MobileHeader />
        <main className="pt-8 md:pt-24">{children}</main>
      </body>
    </html>
  )
}
