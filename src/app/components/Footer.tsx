"use client"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-white">Our Story</Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-white">Mission & Vision</Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-white">Leadership</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Activities</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/activities" className="text-base text-gray-300 hover:text-white">Sports</Link>
                  </li>
                  <li>
                    <Link href="/activities" className="text-base text-gray-300 hover:text-white">Cultural Events</Link>
                  </li>
                  <li>
                    <Link href="/activities" className="text-base text-gray-300 hover:text-white">Academic Clubs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Gallery</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/gallery" className="text-base text-gray-300 hover:text-white">Campus Life</Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="text-base text-gray-300 hover:text-white">Events</Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="text-base text-gray-300 hover:text-white">Achievements</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-white">Get in Touch</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-white">Location</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-white">Admissions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
            <p className="mt-4 text-base text-gray-300">Stay updated with the latest news and events from St. Thomas.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" className="w-full bg-yellow-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2024 St. Thomas Hr. Sec. School, Rozibeg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}