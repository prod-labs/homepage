import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const pricingTiers = [
    {
      id: 1,
      name: 'Starter',
      description: 'Perfect for small projects and MVPs',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      color: '#5DDFDE',
      features: [
        'Landing Page Design',
        'Basic Web Development',
        'Mobile Responsive',
        '1 Month Support',
        'Basic SEO Setup',
      ],
    },
    {
      id: 2,
      name: 'Growth',
      description: 'Ideal for growing businesses',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      color: '#5479E0',
      features: [
        'Full Web Application',
        'Custom UI/UX Design',
        'Database Integration',
        'API Development',
        '3 Months Support',
        'Advanced SEO',
        'Analytics Setup',
      ],
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'Complete solution for established companies',
      monthlyPrice: 3999,
      yearlyPrice: 39999,
      color: '#F74460',
      features: [
        'Full-Stack Development',
        'Mobile App (iOS/Android)',
        'Advanced Backend',
        'Third-party Integrations',
        '6 Months Support',
        'DevOps & Deployment',
        'Performance Optimization',
        'Priority Support',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      <section
        id="pricing"
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
            Simple, <i className="underline">transparent</i> pricing
          </h1>
          <p className="opacity-70 text-sm md:text-base lg:text-lg max-w-2xl">
            Choose the perfect plan for your project. No hidden fees, no
            surprises. Just exceptional development at transparent prices.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 mt-8 p-1 bg-foreground/5 rounded-full border border-foreground/10"
          >
            <motion.button
              onClick={() => setIsYearly(false)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-foreground text-background shadow-lg'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsYearly(true)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative ${
                isYearly
                  ? 'bg-foreground text-background shadow-lg'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Yearly
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-2 -right-2 bg-orange text-white text-xs px-2 py-1 rounded-full"
              >
                -17%
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(tier.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              className="relative flex flex-col h-full p-8 rounded-3xl border border-foreground/10 backdrop-blur-sm overflow-hidden cursor-pointer shadow-xl bg-gradient-to-br from-background/50 to-background/20"
              style={{
                background:
                  hoveredCard === tier.id
                    ? `linear-gradient(135deg, ${tier.color}06, ${tier.color}12)`
                    : 'rgba(255, 255, 255, 0.03)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{
                    scale: hoveredCard === tier.id ? 1.2 : 1,
                    rotate: hoveredCard === tier.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${tier.color}20` }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    {tier.description}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-5xl font-black text-foreground"
                    >
                      {formatPrice(
                        isYearly ? tier.yearlyPrice : tier.monthlyPrice,
                      )}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-foreground/60 text-lg">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
              </div>

              <motion.div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    variants={featureVariants}
                    custom={featureIndex}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      animate={{
                        scale: hoveredCard === tier.id ? 1.1 : 1,
                        backgroundColor:
                          hoveredCard === tier.id ? tier.color : '#10B981',
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <FiCheck className="w-4 h-4 text-white" strokeWidth={3} />
                    </motion.div>
                    <span className="text-foreground/80 font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group w-full py-4 cursor-pointer px-6 rounded-full font-bold text-lg transition-all duration-300 border-2 flex items-center justify-center gap-3 mt-auto"
                style={{
                  borderColor: tier.color,
                  color: tier.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = tier.color
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = tier.color
                }}
              >
                Get Started
                <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                  <FiArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}

export default Pricing
