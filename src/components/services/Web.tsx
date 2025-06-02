import React, { useLayoutEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'motion/react'
import { motion } from 'framer-motion'

const ClassPro: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [divTop, setDivTop] = useState(0)
  const [divHeight, setDivHeight] = useState(0)
  const numRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        setDivTop(divRef.current.offsetTop)
        setDivHeight(divRef.current.offsetHeight)
      }
    }

    updateDimensions()

    // Update on window resize
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const divCenter = React.useMemo(
    () => divTop + divHeight * 0.5,
    [divTop, divHeight],
  )

  const width = useTransform(
    scrollY,
    divTop > 0
      ? [divTop - window.innerHeight, divTop + divHeight - window.innerHeight]
      : [0, 1],
    ['70vw', '100vw'],
    { clamp: true },
  )
  const height = useTransform(
    scrollY,
    divTop > 0
      ? [divTop - window.innerHeight, divTop + divHeight - window.innerHeight]
      : [0, 1],
    ['70vh', '100vh'],
    { clamp: true },
  )
  const borderRadius = useTransform(
    scrollY,
    divTop > 0
      ? [divTop - window.innerHeight, divTop + divHeight - window.innerHeight]
      : [0, 1],
    ['38px', '0px'],
    { clamp: true },
  )

  return (
    <motion.div
      ref={divRef}
      className={
        'bg-background mx-auto flex items-start gap-2 justify-end flex-col rounded-3xl aspect-[16/10] mt-12 p-4 sm:p-8 md:p-16 lg:p-24 py-12 sm:py-24 md:py-36 lg:py-32'
      }
      style={{
        width,
        backgroundImage: 'url(/mockups/web.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
        borderRadius,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div
        className={
          'flex flex-col gap-4 lg:flex-row items-start lg:gap-4 justify-beeen w-full'
        }
      >
        <div>
          <motion.h1
            className={
              'text-foreground w-fit text-3xl mb-1 md:!mb-2 flex items-center gap-6 md:text-4xl lg:text-5xl font-semibold'
            }
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
          >
            Web Development
          </motion.h1>
          <motion.p
            className={
              'text-foreground text-base sm:text-base md:text-lg lg:text-xl'
            }
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
          >
            Custom websites, landing pages, dashboards, and SaaS platforms.
            Built to perform.
          </motion.p>
        </div>
        <div
          ref={numRef}
          className={
            'flex gap-8 items-center border-t border-color/40 w-full pt-3 md:!w-fit lg:!border-t-0 lg:border-l lg:!pt-0 lg:pl-6 justify-beeen'
          }
        ></div>
      </div>
    </motion.div>
  )
}

export default ClassPro
