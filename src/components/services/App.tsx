import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion as m } from 'motion/react'

const SimplyDJS: React.FC = () => {
  const numRef = useRef<HTMLDivElement>(null)
  return (
    <div
      className={
        'bg-background mx-auto flex items-start gap-2 justify-end flex-col rounded-3xl aspect-[16/10] p-4 sm:p-8 md:p-16 lg:p-24 py-12 sm:py-24 md:py-36 lg:py-32'
      }
      style={{
        width: '100vw',
        backgroundImage: 'url(/mockups/app.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        borderRadius: '0px',
      }}
    >
      <div
        className={
          'flex flex-col gap-4 lg:flex-row items-start lg:gap-4 justify-between w-full'
        }
      >
        <div>
          <m.h1
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
            App Development
          </m.h1>
          <m.p
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
            Cross-platform mobile apps using Flutter and React Native — fast, clean, and user-first.
          </m.p>
        </div>
        <div
          ref={numRef}
          className={
            'flex gap-8 items-center border-t border-color/40 w-full pt-3 md:!w-fit lg:!border-t-0 lg:border-l lg:!pt-0 lg:pl-6 justify-between'
          }
        ></div>
      </div>
    </div>
  )
}

export default SimplyDJS
