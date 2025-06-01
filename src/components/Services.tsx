import React from 'react'
import { Card, Carousel } from './ui/AppleCards'

const data = [
  {
    src: '/mockups/web.png',
    title: 'Web Development',
    category: 'Web Development',
    content:
      'Custom websites, landing pages, dashboards, and SaaS platforms. Built to perform.',
  },
  {
    src: '/mockups/app.png',
    title: 'App Development',
    category: 'Services',
    content:
      'Cross-platform mobile apps using Flutter and React Native — fast, clean, and user-first.',
  },
  {
    src: '/mockups/design.png',
    title: 'UI Designing',
    category: 'Services',
    content:
      'Research-driven design with pixel-perfect execution. We design for real users, not just Dribbble likes.',
  },
  {
    src: '/mockups/branding.png',
    title: 'Branding',
    category: 'Services',
    content: "From logos and typography to entire identity systems — we help you look the part and stand out.",
  },
  {
    src: '/mockups/branding.png',
    title: 'MVP Builds',
    category: 'Services',
    content: "Validate fast with clickable prototypes or V1 builds that get your idea into the hands of early users.",
  },
  {
    src: '/mockups/branding.png',
    title: 'AI Integration',
    category: 'Services',
    content: "Add smart features to your product using LLMs, embeddings, chatbots, or task automation.",
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
        Everything you need to launch and grow a digital product — in one studio.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  )
}
