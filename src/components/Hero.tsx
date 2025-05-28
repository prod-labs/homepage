import { motion, useAnimationControls } from 'motion/react'
import React, { useEffect } from 'react'

function Hero() {
  const controls = useAnimationControls()

  useEffect(() => {
    let rotation = -90

    const rotateNext = () => {
      rotation = rotation + 90
      controls
        .start({
          rotate: rotation,
          transition: {
            duration: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
          },
        })
        .then(() => {
          setTimeout(rotateNext, 2000)
        })
    }

    rotateNext()

    return () => {}
  }, [controls])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true, margin: '-100px' }}
      className="min-h-screen flex max-lg:flex-col lg:px-28 max-lg:px-12 items-center max-lg:items-start max-lg:justify-end lg:justify-start overflow-hidden"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl lg:text-[64px] font-semibold lg:leading-20">
          We make your ideas
          <br />
          into <i className="underline">reality</i>
        </h1>
        <p className="opacity-70">
          We build full-stack web and mobile apps that go live fast.
          <br className="hidden lg:block" />
          You can test, earn, and grow before anyone catches up.
        </p>

        <div className="overflow-hidden whitespace-nowrap relative lg:max-w-[65vw] max-lg:max-w-[90vw] lg:mt-24 max-lg:mt-12">
          <motion.div
            className="inline-flex gap-12 items-center"
            animate={{ x: [0, '-50.6%'] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="inline-flex gap-12 items-center">
                <span className="text-xl font-medium opacity-40">Brand</span>
                <span className="text-xl font-medium opacity-40">Logos</span>
                <span className="text-xl font-medium opacity-40">Supposed</span>
                <span className="text-xl font-medium opacity-40">To</span>
                <span className="text-xl font-medium opacity-40">Be</span>
                <span className="text-xl font-medium opacity-40">Here</span>
                <span className="text-xl font-medium opacity-40">So</span>
                <span className="text-xl font-medium opacity-40">We win</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="lg:absolute max-lg:relative lg:-right-72 lg:top-0 flex items-center justify-center">
        <motion.img
          animate={controls}
          src="diamond.svg"
          alt="diamond"
          className="lg:h-[100vh] max-lg:h-[50vh] relative z-0"
        />
        <motion.button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-foreground text-2xl text-background border-12 border-background font-semibold cursor-pointer lg:px-12 lg:py-8 max-lg:px-8 max-lg:py-6 rounded-full whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a call
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Hero
