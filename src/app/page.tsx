/** @format */

import ContactUs from "@/containers/HomeContainers/ContactUs"
import HomeBanner from "@/containers/HomeContainers/HomeBanner"
import NavBar from "@/containers/HomeContainers/NavBar"
import Services from "@/containers/HomeContainers/Services"
import About from "@/containers/HomeContainers/About"
import Footer from "@/containers/HomeContainers/Footer"
import TopHeader from "@/containers/HomeContainers/TopHeader"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopHeader />
      <NavBar />
      <HomeBanner />
      <Services />
      <ContactUs />
      <About />
      <Footer />
    </main>
  )
}
