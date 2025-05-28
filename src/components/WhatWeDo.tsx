import { BsLightningChargeFill } from 'react-icons/bs'
import React from 'react'
import { motion } from 'motion/react'

function WhatWeDo() {
  return (
    <section className="min-h-screen lg:px-28 max-lg:px-12 flex flex-col items-start py-18">
      <h1 className="text-3xl lg:text-[64px] font-semibold">
        Move at{' '}
        <motion.span
          initial={{ y: -50, opacity: 1, rotate: -5 }}
          whileInView={{
            y: [-50, 20, -10, 5, 0],
            rotate: [0, 2, -1, 0],
          }}
          transition={{
            delay: 0.7,
            duration: 0.5,
            ease: 'easeOut',
            times: [0, 0.2, 0.4, 0.7, 1],
          }}
          className="inline-block"
        >
          <BsLightningChargeFill className="inline-block text-orange" />
        </motion.span>{' '}
        <span className="underline">lightning</span> speed.
      </h1>
      <p className="opacity-70 lg:mt-6 max-lg:mt-4 max-lg:text-sm lg:text-base">
        We move fast, build lean and Validate.
      </p>
    </section>
  )
}

export default WhatWeDo
