import { motion } from 'motion/react'

function Hero() {
  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          .hero-gradient-shadow {
            box-shadow: 
              0 0 60px color-mix(in srgb, var(--color-red) 15%, transparent),
              0 0 120px color-mix(in srgb, var(--color-orange) 10%, transparent),
              0 0 180px color-mix(in srgb, var(--color-cyan) 8%, transparent),
              0 0 240px color-mix(in srgb, var(--color-blue) 6%, transparent),
              inset 0 0 40px color-mix(in srgb, var(--color-red) 5%, transparent);
          }
        }
      `}</style>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, margin: '-100px' }}
        className="min-h-screen lg:px-28 lg:pr-12 max-lg:px-12 overflow-hidden relative flex flex-col justify-center gap-24 mb-24"
      >
        <div className="flex flex-col lg:mt-24 items-start max-lg:items-start max-lg:justify-end gap-12 lg:justify-between relative">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="relative my-4 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, margin: '-50px' }}
                className="text-3xl uppercase flex flex-col lg:text-[52px] font-semibold lg:leading-20"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block mr-4"
                  >
                    We
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block mr-4"
                  >
                    build
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block"
                  >
                    your
                  </motion.span>
                </div>
                <div className="ml-32">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block mr-4"
                  >
                    boldest
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block"
                  >
                    ideas
                  </motion.span>
                </div>
                <div className="">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block mr-4"
                  >
                    into
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block mr-4"
                  >
                    impactful
                  </motion.span>
                </div>
                <div className="ml-32">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 1.1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="inline-block px-7 py-1 rounded-full border border-foreground"
                  >
                    digital products.
                  </motion.span>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, margin: '-50px' }}
                className="font-heading absolute text-blue right-32 text-lg max-lg:bottom-20 bottom-30 leading-4"
              >
                TOP RATED
                <br />
                AGENCY
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
                viewport={{ once: true, margin: '-50px' }}
                className="font-heading text-orange absolute left-12 max-lg:bottom-0 text-lg bottom-6 leading-4"
              >
                PREMIUM
                <br />
                QUALITY
              </motion.p>
            </div>

            <img
              src="hero-cut.png"
              alt="hero"
              className="max-w-[650px] w-full"
            />
          </div>
          <div className="flex flex-col gap-4 lg:ml-24 mt-8 ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
              viewport={{ once: true, margin: '-50px' }}
              className="lg:text-lg text-sm max-lg:opacity-70"
            >
              Whether you're validating an MVP, scaling a feature-rich product,
              or
              <br />
              revamping your design system we're your tech partner for the
              journey.
            </motion.p>
            <div className="flex flex-row gap-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.4 }}
                viewport={{ once: true, margin: '-50px' }}
                className="border max-lg:text-sm border-foreground text-foreground px-6 py-3 rounded-full cursor-pointer  hover:scale-105 transition-all duration-300 ease-in-out w-fit font-thin text-xl"
              >
                View Our Work <span className="max-lg:hidden">→</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-foreground text-background px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out w-fit font-thin text-xl max-lg:text-sm"
              >
                Book a call <span className="max-lg:hidden">→</span>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="flex flex-row max-lg:hidden justify-between gap-32 px-12">
          <div className="flex flex-row  gap-12 items-center justify-center">
            <img
              src="/mockups/branding.png"
              alt="mock"
              className="w-[300px] h-[120px] object-cover  rounded-full"
            />
            <div className="border-12 border-red w-[100px] h-[100px] rounded-3xl -rotate-45" />
          </div>
          <div className="rounded-3xl px-8 py-4 flex justify-center gap-2 flex-col min-w-[250px]  bg-foreground/20 text-foreground">
            <h2 className="text-4xl font-bold">17k+</h2>
            <p className="text-lg">users served</p>
          </div>
          <p className="max-w-[300px]">
            At Prodlabs, we help startups and teams design, build, and launch
            web & mobile products — fast. Our approach is lean, agile, and built
            for scale.
          </p>
        </div>
      </motion.section>
    </>
  )
}

export default Hero
