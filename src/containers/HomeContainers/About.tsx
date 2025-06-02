/** @format */
"use client"

import Image from "next/image"
import { COMPANY_NAME, COMPANY_TAGLINE, SERVICE_LOCATIONS } from "@/utils/constants"
import Stats from "@/components/Stats"

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About {COMPANY_NAME}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{COMPANY_TAGLINE}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/About.png" alt={`${COMPANY_NAME} Professional Team`} fill className="object-cover" priority />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Your Trusted Home Service Partner</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At {COMPANY_NAME}, we understand that your home appliances are essential to your daily life. That's why we've built a team of certified
              professionals dedicated to providing top-notch installation, maintenance, and repair services for all your home appliances.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience and a commitment to excellence, we ensure that every service we provide meets the highest standards of quality
              and reliability. Our technicians are not just experts in their field; they're also trained to deliver exceptional customer service.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-2">Quick Response</h3>
                <p className="text-gray-600">Fast and reliable service when you need it most</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <Stats />

        {/* Service Areas */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Service Areas in Kolkata</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Currently Serving</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {SERVICE_LOCATIONS.PRIMARY.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{location}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Coming Soon</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {SERVICE_LOCATIONS.UPCOMING.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-500">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose {COMPANY_NAME}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality Service</h4>
              <p className="text-gray-600">We use only genuine parts and follow industry best practices for all our services.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Quick Response</h4>
              <p className="text-gray-600">Our team responds promptly to service requests and arrives at your location on time.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Affordable Rates</h4>
              <p className="text-gray-600">We offer competitive pricing without compromising on the quality of our services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
