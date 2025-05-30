import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to build a web application?',
      answer:
        'Timeline varies based on complexity. Simple landing pages take 1-2 weeks, while full-stack applications typically require 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
      color: '#5DDFDE',
    },
    {
      id: 2,
      question: 'Do you provide ongoing support after launch?',
      answer:
        'Absolutely! All our packages include post-launch support. We offer bug fixes, performance monitoring, security updates, and feature enhancements. Our support periods range from 1-6 months depending on your chosen package.',
      color: '#5479E0',
    },
    {
      id: 3,
      question: 'Can you work with our existing design team?',
      answer:
        'Yes, we love collaborating! We can work with your designers, follow your brand guidelines, or provide complete design services. Our development team is experienced in translating designs from Figma, Sketch, Adobe XD, and other design tools.',
      color: '#F74460',
    },
    {
      id: 4,
      question: 'What technologies do you use?',
      answer:
        'We use modern, scalable technologies including React, Next.js, Node.js, Python, TypeScript, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. We choose the tech stack based on your specific needs and requirements.',
      color: '#FB7F34',
    },
    {
      id: 5,
      question: 'Do you handle mobile app development?',
      answer:
        'Yes! We develop both native (iOS/Android) and cross-platform mobile apps using React Native, Flutter, and Swift/Kotlin. We can also create Progressive Web Apps (PWAs) that work seamlessly across all devices.',
      color: '#5DDFDE',
    },
    {
      id: 6,
      question: 'How do you handle project communication?',
      answer:
        'We believe in transparent communication. You get access to a dedicated project manager, weekly progress updates, a shared Slack channel, and regular demo sessions. We use modern project management tools to keep everything organized.',
      color: '#5479E0',
    },
    {
      id: 7,
      question: 'What if I need changes during development?',
      answer:
        'Change requests are normal! We include a reasonable number of revisions in our packages. For larger scope changes, we discuss the impact on timeline and budget upfront, ensuring complete transparency.',
      color: '#F74460',
    },
    {
      id: 8,
      question: 'Do you help with deployment and hosting?',
      answer:
        'Absolutely! We handle the entire deployment process, set up hosting on reliable platforms, configure domains, SSL certificates, and provide ongoing infrastructure support. Your app goes live hassle-free.',
      color: '#FB7F34',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="min-h-screen lg:px-28 md:px-16 px-6 flex flex-col items-center py-10 md:py-18"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col items-center gap-4 mb-16 text-center"
      >
        <h1 className="text-2xl md:text-4xl lg:text-[64px] font-semibold">
          Frequently asked <i className="underline">questions</i>
        </h1>
        <p className="opacity-70 text-sm md:text-base lg:text-lg max-w-2xl">
          Got questions? We've got answers. If you don't find what you're
          looking for, feel free to reach out to us directly.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full max-w-4xl space-y-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="border border-foreground/10 rounded-xl overflow-hidden backdrop-blur-sm"
            style={{
              background:
                openIndex === index
                  ? `linear-gradient(135deg, ${faq.color}08, ${faq.color}15)`
                  : hoveredIndex === index
                    ? `linear-gradient(135deg, ${faq.color}05, ${faq.color}10)`
                    : 'rgba(255, 255, 255, 0.02)',
            }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-foreground/5 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    backgroundColor:
                      openIndex === index || hoveredIndex === index
                        ? faq.color
                        : '#6B7280',
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-3 h-3 rounded-full flex-shrink-0"
                />
                <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
              </div>

              <motion.div
                animate={{
                  rotate: openIndex === index ? 45 : 0,
                  backgroundColor:
                    openIndex === index || hoveredIndex === index
                      ? faq.color
                      : 'rgba(107, 114, 128, 0.3)',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    color: openIndex === index ? 'white' : '#6B7280',
                  }}
                >
                  <path d="M12 5v14M5 12h14" />
                </motion.svg>
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-6 pb-6"
                  >
                    <div className="flex gap-4">
                      <div className="w-3 h-3 flex-shrink-0" />
                      <p className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      
    </section>
  )
}

export default FAQ
