import React from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: {
    id: number
    person: string
    title: string
    size: string
    position: string
    image?: string
  }
  index: number
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className={`relative flex flex-col p-8 rounded-2xl shadow-lg cursor-pointer overflow-hidden
        ${testimonial.size === 'large' ? 'md:col-span-1 md:row-span-2 bg-gradient-to-br from-stone-100/2 to-stone-200/5' : 'bg-white/2'}
      `}
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-medium leading-tight text-foreground opacity-80 italic flex-grow mb-4">
          {testimonial.title}
        </h3>

        <span className="font-semibold text-lg text-foreground mt-8">
          {testimonial.person}
        </span>
        <span className="font-medium text-base text-foreground opacity-40">
          {testimonial.position}
        </span>
      </div>
      {testimonial.image && (
        <div className="absolute max-lg:hidden bottom-0 right-0 flex items-center justify-center">
          <img
            src={testimonial.image}
            alt={testimonial.person}
            className="w-full h-auto max-w-xs object-cover rounded-xl"
          />
        </div>
      )}
    </motion.div>
  )
}

const TestimonialGrid = () => {
  const testimonials = [
    {
      id: 1,
      person: 'Priya Malhotra',
      position: 'Project Manager',
      title:
        'We came in with a vague idea. They turned it into a scalable product that users actually love. I don’t know how they did it, but we’re booking meetings thanks to the tech they built.',
      size: 'large',
    },
    {
      id: 2,
      person: 'Liam Tran',
      position: 'CTO',
      title:
        'Deadlines met. Bugs squashed. Features shipped. That’s all we wanted — and that’s exactly what we got.',
      size: 'normal',
    },
    {
      id: 3,
      person: 'David',
      position: 'Co-Founder',
      title:
        'They felt like part of our in-house team. Super responsive, no fluff, and they just got what we needed — even when we were figuring it out ourselves.',
      size: 'normal',
    },
    {
      id: 4,
      person: 'Ananya Iyer',
      position: 'CEO',
      title:
        'It’s rare to find a tech partner that blends creativity, speed, and pure technical firepower like this. They’ve become our secret weapon',
      size: 'large',
      image: 'testimonials/ananya.png',
    },
    {
      id: 5,
      person: 'Kabhir Sharma',
      position: 'Tech Lead',
      title:
        'Hiring them was the smartest decision we made all year. They took our spaghetti code and turned it into clean, maintainable magic. Absolute legends',
      size: 'normal',
    },
    {
      id: 6,
      person: 'Jatin Mehra',
      position: 'Operations Lead',
      title:
        'Our previous dev team ghosted us. These folks rescued our codebase, optimized everything, and delivered ahead of schedule. Never looking back.',
      size: 'normal',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="testimonials"
      className="min-h-screen lg:px-28 md:px-16 px-6 flex flex-col items-start py-10 md:py-18"
    >
      <div className="flex flex-col items-start gap-2 mb-24">
        <h1 className="text-2xl md:text-4xl lg:text-[64px] font-semibold">
          Hear from our clients
        </h1>
        <p className="opacity-70 text-sm md:text-base lg:text-lg">
          We provide the best services to our clients, we don't just build
          products, we build relationships.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
        <div className="flex items-center justify-center">
          <img
            src="/footr.svg"
            alt="Prodlabs"
            className="w-full h-auto max-w-xs object-cover rounded-xl"
          />
        </div>
      </motion.div>

      <div className="bg-foreground/90 text-background w-full max-lg:flex-col py-6 mt-24 rounded-3xl flex items-center justify-between max-lg:px-6 lg:pl-14 lg:pr-6">
        <div className="flex flex-col gap-2">
          <h1 className="lg:text-4xl text-2xl font-semibold italic">
            Let&apos;s craft something marvelous.
          </h1>
          <p className="lg:text-base text-sm max-w-xl">
            Why waste time and money on a mediocre product when you can have a
            great one with us?
          </p>
          <motion.button
            className="w-fit lg:mt-12 mt-6 bg-foreground lg:text-xl text-base text-background border-6 border-background font-semibold cursor-pointer lg:px-8 lg:py-4 max-lg:px-6 max-lg:py-3 rounded-full whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a call
          </motion.button>
        </div>
        <img
          src="/phone.png"
          alt="Pricing"
          className="max-lg:hidden lg:h-[300px] rounded-2xl"
        />
      </div>

    </section>
  )
}

export default TestimonialGrid
