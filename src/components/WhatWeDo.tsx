import React from 'react'
import { motion } from 'motion/react'
import { BsLightningChargeFill } from 'react-icons/bs'
import { MdDesignServices } from 'react-icons/md'
import { FaCode, FaFlask } from 'react-icons/fa'
import { RiTestTubeFill } from 'react-icons/ri'

export default function WhatWeDo() {
  return (
    <>
      <div className="absolute w-screen h-[250vh] left-0 pointer-events-none blur-2xl">
        <div
          className="absolute top-0 bottom-0 left-0 w-48 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(90deg, rgba(251, 146, 60, 0.04) 0%, rgba(251, 146, 60, 0.03) 25%, rgba(251, 146, 60, 0.02) 50%, rgba(251, 146, 60, 0.01) 75%, transparent 100%)',
          }}
        />

        <div
          className="absolute top-0 bottom-0 right-0 w-48 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(270deg, rgba(6, 182, 212, 0.04) 0%, rgba(6, 182, 212, 0.03) 25%, rgba(6, 182, 212, 0.02) 50%, rgba(6, 182, 212, 0.01) 75%, transparent 100%)',
          }}
        />
      </div>
      <section
        id="why"
        className="min-h-screen lg:px-28 md:px-16 px-6 flex flex-col items-start py-10 md:py-18 pt-0 relative overflow-hidden"
        style={{}}
      >
        <h1 className="text-2xl md:text-4xl lg:text-[64px] font-semibold relative z-10">
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
          Our process.
        </h1>

        <p className="relative z-10">Move fast, build smart.</p>

        <div className="mt-16 md:mt-0 space-y-12 md:space-y-8 flex items-center justify-center w-full flex-col relative py-16 md:py-32 md:pt-6 z-10">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            }}
            viewport={{
              once: false,
              amount: 0.9,
            }}
            className="flex flex-col lg:flex-row justify-between items-center gap-6 z-10 h-fit p-2 py-4 w-full"
          >
            <div className="flex flex-col  items-start md:items-start gap-2 max-w-xl w-full px-4">
              <h2 className="font-semibold text-2xl md:text-3xl flex items-center gap-2">
                <FaFlask className="inline-block text-red" /> Research
              </h2>
              <p className="text-foreground/70 text-sm md:text-base">
                Our research process digs deep into user behavior, market
                trends, and competitive landscapes to make sure we’re solving
                the right problems.
              </p>
            </div>
            <div className="w-full md:w-[600px] lg:w-[700px] h-[200px] md:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden px-4 md:px-0">
              <motion.img
                src="/us/research.png"
                alt="Research"
                className="rounded-3xl object-cover w-full h-full"
                initial={{ scale: 0.5, filter: 'saturate(0)' }}
                whileInView={{ scale: 1, filter: 'saturate(1)' }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                viewport={{
                  once: false,
                  amount: 0.9,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            }}
            viewport={{
              once: false,
              amount: 0.9,
            }}
            className="flex flex-col lg:flex-row-reverse justify-between items-center gap-6  z-10 h-fit p-2 py-4 w-full"
          >
            <div className="flex flex-col items-start md:items-start gap-2 max-w-xl w-full px-4">
              <h2 className="font-semibold text-2xl md:text-3xl flex items-center gap-2">
                <MdDesignServices className="inline-block text-orange" /> Design
              </h2>
              <p className="text-foreground/70 text-sm md:text-base">
                We craft intuitive UI/UX that blends clarity, usability, and
                brand identity. Everything is prototyped in Figma and tested
                with real users.
              </p>
            </div>
            <div className="w-full md:w-[600px] lg:w-[700px] h-[200px] md:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden px-4 md:px-0">
              <motion.img
                src="/us/design.png"
                alt="Design"
                className="rounded-3xl object-cover w-full h-full"
                initial={{ scale: 0.5, filter: 'saturate(0)' }}
                whileInView={{ scale: 1, filter: 'saturate(1)' }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }}
                viewport={{
                  once: false,
                  amount: 0.9,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            }}
            viewport={{
              once: false,
              amount: 0.9,
            }}
            className="flex flex-col lg:flex-row justify-between items-center gap-6  z-10 h-fit p-2 py-4 w-full"
          >
            <div className="flex flex-col items-start md:items-start gap-2 max-w-xl w-full px-4">
              <h2 className="font-semibold text-2xl md:text-3xl flex items-center gap-2">
                <FaCode className="inline-block text-blue" /> Develop
              </h2>
              <p className="text-foreground/70 text-sm md:text-base">
                We write scalable, maintainable code using modern tech stacks —
                whether it’s a full-stack app, an AI-powered tool, or a
                blazing-fast website.
              </p>
            </div>
            <div className="w-full md:w-[600px] lg:w-[700px] h-[200px] md:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden px-4 md:px-0">
              <motion.img
                src="/us/code.png"
                alt="Develop"
                className="rounded-3xl object-cover w-full h-full"
                initial={{ scale: 0.5, filter: 'saturate(0)' }}
                whileInView={{ scale: 1, filter: 'saturate(1)' }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }}
                viewport={{
                  once: false,
                  amount: 0.9,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            }}
            viewport={{
              once: false,
              amount: 0.9,
            }}
            className="flex flex-col lg:flex-row-reverse justify-between items-center gap-6  z-10 h-fit p-2 py-4 w-full"
          >
            <div className="flex flex-col items-start md:items-start gap-2 max-w-xl w-full px-4">
              <h2 className="font-semibold text-2xl md:text-3xl flex items-center gap-2">
                <RiTestTubeFill className="inline-block text-cyan" /> Testing
              </h2>
              <p className="text-foreground/70 text-sm md:text-base">
                From unit testing to performance benchmarks and device testing —
                we ensure every release is battle-tested and production-ready.
              </p>
            </div>
            <div className="w-full md:w-[600px] lg:w-[700px] h-[200px] md:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden px-4 md:px-0">
              <motion.img
                src="/us/testing.png"
                alt="Testing"
                className="rounded-3xl object-cover w-full h-full"
                initial={{ scale: 0.5, filter: 'saturate(0)' }}
                whileInView={{ scale: 1, filter: 'saturate(1)' }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }}
                viewport={{
                  once: false,
                  amount: 0.9,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
