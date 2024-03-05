import Link from 'next/link'
import React from 'react'
import { SlideInFromBottom } from './animate/animation'

export default function Footer() {
  return (
    <section className="p-2 lg:px-[40px] lg:py-[50px] sm:p-3">
        <SlideInFromBottom>
          <h1 className="kalnia text-[9.3vw]">MATTHEW ATKINS</h1>
        </SlideInFromBottom>
        <SlideInFromBottom>
          <ul className="text-lg lg:text-3xl font-semibold flex items-center justify-evenly">
            <li><Link href="/">ABOUT</Link></li>
            <li><a href="contact-section">CONTACT</a></li>
          </ul>
        </SlideInFromBottom>
      </section>
  )
}
