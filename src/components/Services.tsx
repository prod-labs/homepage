import React from 'react'
import { motion } from 'motion/react'
import { FaTrophy } from 'react-icons/fa'
import { Card, Carousel } from './ui/AppleCards'

const data = [
  {
    src: '/mockups/web.png',
    title: 'Web Development',
    category: 'Services',
    content:
      'We build high-performance, responsive websites that actually convert.',
  },
  {
    src: '/mockups/app.png',
    title: 'App Development',
    category: 'Services',
    content:
      'From idea to App Store. We craft mobile apps users love to tap on.',
  },
  { 
    src: '/mockups/design.png',
    title: 'UI Designing',
    category: 'Services',
    content:
      'Sleek, modern, and user-obsessed — our interfaces feel like magic.',
  },
  {
    src: '/mockups/branding.png',
    title: 'Branding',
    category: 'Services',
    content: "We don't just make logos — we create identities that stick.",
  },
]

const cards = data.map((card, index) => (
  <Card key={card.src} card={card} index={index} layout={true} />
))

export default function Services() {
  return (
    <section
      id="services"
      className="lg:px-28 md:px-16 px-6 flex flex-col items-start py-10 md:py-18"
    >
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl md:text-4xl lg:text-[64px] font-semibold">
          Services
        </h1>
        <p className="opacity-70 text-sm md:text-base lg:text-lg">
          We are a team of developers who are passionate about creating the best
          products for our clients.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  )
}
