import { Link } from '@tanstack/react-router'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { motion } from 'motion/react'

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const footerImageVariants = {
    hidden: { opacity: 0, scale: 1.1, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const copyrightVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const siteByVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <footer className="z-30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-2 items-center  justify-center bg-foreground py-32 text-background overflow-hidden"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-medium">
          Wanna build somethin&apos;?
        </motion.h2>

        <motion.h1
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="lg:text-[64px] text-4xl font-semibold underline hover:decoration-wavy hover:text-red mt-2 cursor-pointer"
        >
          Let&apos;s connect!
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap lg:px-24 max-lg:px-8 gap-4 mt-24 max-lg:mt-12 items-center justify-center"
        >
          {[
            {
              text: 'hello@prodlabs.io',
              icon: MdOutlineAlternateEmail,
            },
            { text: 'Linkedin', icon: FiArrowUpRight },
            { text: 'Instagram', icon: FiArrowUpRight },
            { text: 'Twitter', icon: FiArrowUpRight },
          ].map((item, index) => {
            const IconComponent = item.icon
            const rotations = [1, -1, 0.5, -2]

            return (
              <motion.div key={item.text} variants={linkVariants}>
                <Link
                  className="px-6 py-3 rounded-full border-2 border-background hover:bg-background hover:text-foreground transition-colors duration-300 max-lg:text-sm font-semibold block"
                  to="mailto:hello@prodlabs.io"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.95,
                      rotate: rotations[index],
                      transition: { duration: 0.1 },
                    }}
                    className="flex items-center"
                  >
                    {item.text}{' '}
                    <IconComponent className="inline-block text-xl mb-0.5 ml-2" />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col lg:px-28 max-lg:px-12 items-center justify-center w-screen bg-black py-12 overflow-hidden"
      >
        <div className="max-w-screen-2xl mx-auto text-center relative">
          <motion.img
            variants={footerImageVariants}
            src="/footr.svg"
            alt="Prodlabs.io"
            className="w-screen max-lg:mb-12"
          />

          <motion.div
            variants={copyrightVariants}
            className="absolute bottom-2 left-4 text-xs text-gray-400 font-mono"
          >
            © 2025 Prodlabs.io
          </motion.div>

          <motion.div
            variants={siteByVariants}
            className="absolute bottom-2 right-4 text-xs text-gray-400 font-mono"
          >
            SITE BY PRODLABS.IO
          </motion.div>
        </div>
      </motion.footer>
    </footer>
  )
}

export default Footer
