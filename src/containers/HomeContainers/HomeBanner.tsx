/** @format */
"use client"
import Image from "next/image"
import { useState } from "react"
import BookingForm from "@/components/BookingForm"

export default function HomeBanner() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false)

  return (
    <>
      <section className="relative flex flex-col md:flex-row items-center overflow-hidden pt-4 md:pt-0">
        {/* Background Image */}
        <div className="relative w-full h-[300px] md:h-auto">
          <Image src="/images/BannerTh.png" alt="KarwaoFix Banner" width={1920} height={1080} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

          {/* Mobile Banner Text */}
          <div className="absolute inset-0 z-10 flex items-center md:hidden">
            <div className="px-6 w-1/2">
              <h1 className="text-2xl font-bold text-white mb-3 leading-tight">Your Home's Best Friend</h1>
              <button
                onClick={() => setIsBookingFormOpen(true)}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Content */}
        <div className="relative md:absolute inset-0 z-10 hidden md:flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">Your Home's Best Friend</h1>
              <p className="text-xl text-gray-100 mb-8 animate-fade-in-up animation-delay-200">
                Professional home services at your doorstep. From repairs to renovations, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <button
                  onClick={() => setIsBookingFormOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Book a Service
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content Below Banner */}
        <div className="w-full bg-white md:hidden py-8 px-6">
          <p className="text-gray-600 mb-6">Professional home services at your doorstep. From repairs to renovations, we've got you covered.</p>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-6 py-2 border-2 border-primary-600 text-base font-medium rounded-lg text-primary-600 hover:bg-primary-50 transition-all duration-300"
          >
            View Services
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent hidden md:block" />

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* Booking Form Modal */}
      <BookingForm isOpen={isBookingFormOpen} onClose={() => setIsBookingFormOpen(false)} />
    </>
  )
}
