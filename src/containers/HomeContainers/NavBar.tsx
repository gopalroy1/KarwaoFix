/** @format */

"use client"
/** @format */
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import BookingForm from "@/components/BookingForm"
import { COMPANY_NAME } from "@/utils/constants"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false)

  const handleBookNow = () => {
    setIsBookingFormOpen(true)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="hidden md:block fixed top-8 left-0 right-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt={`${COMPANY_NAME} Logo`} width={63} height={63} className="rounded-full" />
              <span className="ml-2 text-xl font-bold text-gray-800">{COMPANY_NAME}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                Contact Us
              </Link>
              <button onClick={handleBookNow} className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Form Modal */}
      <BookingForm isOpen={isBookingFormOpen} onClose={() => setIsBookingFormOpen(false)} />
    </>
  )
}
