import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'

function Panel() {
  const [cursors, setCursors] = useState([
    {
      id: 1,
      x: 25,
      y: 30,
      active: false,
      color: '#F74460',
      targetX: 25,
      targetY: 30,
    },
    {
      id: 2,
      x: 60,
      y: 45,
      active: false,
      color: '#5479E0',
      targetX: 60,
      targetY: 45,
    },
    {
      id: 3,
      x: 40,
      y: 65,
      active: false,
      color: '#5DDFDE',
      targetX: 40,
      targetY: 65,
    },
  ])
  const [activeIndex, setActiveIndex] = useState(0)
  const [skeletonProgress, setSkeletonProgress] = useState(0)

  const skeletonLines = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      lineNumber: String(i + 1).padStart(2, '0'),
      width: 60 + Math.random() * 180,
    }))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursors((prev) =>
        prev.map((cursor, index) => {
          const isActive = index === activeIndex

          const currentX = cursor.targetX || cursor.x
          const currentY = cursor.targetY || cursor.y

          const moveDistance = 15 + Math.random() * 35
          const angle = Math.random() * Math.PI * 2

          let newTargetX = currentX + Math.cos(angle) * moveDistance
          let newTargetY = currentY + Math.sin(angle) * moveDistance

          newTargetX = Math.max(5, Math.min(90, newTargetX))
          newTargetY = Math.max(10, Math.min(85, newTargetY))

          return {
            ...cursor,
            targetX: newTargetX,
            targetY: newTargetY,
            active: isActive,
          }
        }),
      )

      setActiveIndex((prev) => (prev + 1) % 3)
      setSkeletonProgress((prev) => (prev + 1) % 8)
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex])

  useEffect(() => {
    const smoothMovement = setInterval(() => {
      setCursors((prev) =>
        prev.map((cursor) => ({
          ...cursor,
          x: cursor.x + (cursor.targetX - cursor.x) * 0.08,
          y: cursor.y + (cursor.targetY - cursor.y) * 0.08,
        })),
      )
    }, 40)

    return () => clearInterval(smoothMovement)
  }, [])

  return (
    <section className="min-h-screen lg:px-28 md:px-16 px-6 flex flex-col items-start pt-18">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-7xl mx-auto mt-8 md:mt-12 lg:mt-16 relative"
      >
        <div className="bg-background border border-foreground/10 rounded-xl flex flex-col md:flex-row md:rounded-2xl gap-3 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <div className="bg-foreground/10 p-2 md:p-4 w-full md:w-[280px] lg:w-[320px] rounded-t-xl md:rounded-tr-none md:rounded-l-2xl overflow-hidden">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 border border-foreground/40 border-t-transparent rounded-full"
                />
                <h3 className="text-foreground/90 font-medium text-xs md:text-sm">
                  AI Agents
                </h3>
                <span className="text-xs text-foreground/50 ml-auto hidden md:inline">
                  8 active
                </span>
                <span className="text-xs text-foreground/50 ml-auto md:hidden">
                  8
                </span>
              </div>

              {/* Agent List */}
              <div className="flex md:flex-col gap-2 md:space-y-2 md:gap-0 flex-1 overflow-x-auto md:overflow-x-visible md:overflow-y-auto pb-2 md:pb-0">
                {[
                  {
                    name: 'CrewAI',
                    desc: 'Multi-agent orchestration',

                    logo: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: 'LangChain',
                    desc: 'LLM framework',
                    logo: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M8 3L4 7L8 11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 7H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 13L20 17L16 21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 17H4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: 'AutoGPT',
                    desc: 'Autonomous agent',
                    logo: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 1V3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 21V23"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M4.22 4.22L5.64 5.64"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M18.36 18.36L19.78 19.78"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 12H3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M21 12H23"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M4.22 19.78L5.64 18.36"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M18.36 5.64L19.78 4.22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: 'LangGraph',
                    desc: 'Workflow graphs',
                    logo: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="7,10 12,15 17,10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: 'Swarm',
                    desc: 'Agent coordination',
                    logo: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle
                          cx="9"
                          cy="9"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="15"
                          cy="15"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="9"
                          cy="15"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="15"
                          cy="9"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M11 9H13"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M11 15H13"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M9 11V13"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M15 11V13"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: 'Haystack',
                    desc: 'NLP pipelines',
                    logo: (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="14,2 14,8 20,8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="16"
                          y1="13"
                          x2="8"
                          y2="13"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line
                          x1="16"
                          y1="17"
                          x2="8"
                          y2="17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <polyline
                          points="10,9 9,9 8,9"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    ),
                  },
                ].map((agent, index) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 md:gap-3 p-1.5 md:p-2 hover:bg-background/30 rounded-md transition-colors"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-foreground/10 rounded-md flex items-center justify-center text-foreground/70">
                      <div className="w-3 h-3 md:w-4 md:h-4">{agent.logo}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 md:gap-2">
                        <span className="text-xs md:text-sm text-foreground/90 truncate">
                          {agent.name}
                        </span>
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                          className="w-1 h-1 md:w-1.5 md:h-1.5 bg-foreground/60 rounded-full flex-shrink-0"
                        />
                      </div>
                      <p className="text-xs text-foreground/50 truncate hidden md:block">
                        {agent.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status */}
              <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-foreground/10">
                <div className="text-xs text-foreground/60 space-y-1">
                  <div className="flex justify-between">
                    <span className="hidden md:inline">Tasks completed</span>
                    <span className="md:hidden">Tasks</span>
                    <span className="text-foreground/80">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="hidden md:inline">Active workflows</span>
                    <span className="md:hidden">Active</span>
                    <span className="text-foreground/80">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="lg:relative max-lg:flex max-lg:flex-col max-lg:gap-4 p-4 md:p-6 lg:p-8 overflow-hidden w-full min-h-[400px]">
            <AnimatePresence>
              {cursors.map((cursor, index) => (
                <motion.div
                  key={cursor.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: cursor.active ? 1.1 : 1,
                    x: `${cursor.x}%`,
                    y: `${cursor.y}%`,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 40,
                    damping: 25,
                    duration: 0.4,
                  }}
                  className="absolute z-30 pointer-events-none"
                  style={{
                    left: 0,
                    top: 0,
                    width: '70vw',
                    height: '70vh',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                      fill={cursor.color}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </svg>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="lg:absolute left-2 md:left-4 lg:left-42 top-8 md:top-12 lg:top-16 w-full lg:w-80 h-32 md:h-40 lg:h-48 bg-gradient-to-br from-red/10 to-orange/10 border border-red/30 rounded-xl backdrop-blur-sm shadow-2xl">
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-red rounded-full"
                  />
                  <span className="text-foreground/90 font-medium text-xs md:text-sm">
                    Design System
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex gap-1 md:gap-2 mb-2">
                    {['#FB7F34', '#F74460', '#5479E0', '#5DDFDE'].map(
                      (color, i) => (
                        <motion.div
                          key={color}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="w-4 h-4 md:w-6 md:h-6 rounded shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ),
                    )}
                  </div>
                  <span className="text-xs text-foreground/60">
                    Brand Colors
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="h-2 bg-foreground/20 rounded animate-pulse"></div>
                  <div className="h-2 bg-foreground/15 rounded w-3/4 animate-pulse"></div>
                  <div className="h-1 bg-foreground/10 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="lg:absolute right-2 md:right-4 lg:right-8 top-8 md:top-12 lg:top-16 w-full lg:w-96 h-40 md:h-56 lg:h-80 bg-background border border-foreground/20 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-foreground/5 p-3 md:p-4 border-b border-foreground/10 flex items-center gap-3">
                <div className="flex gap-1 md:gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs md:text-sm text-foreground/70 font-mono">
                  Dashboard.jsx
                </span>
              </div>

              <div className="p-3 md:p-4 bg-background space-y-2 md:space-y-3">
                {skeletonLines.map((line, i) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0.3 }}
                    animate={{
                      opacity: i <= skeletonProgress ? 0.8 : 0.3,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: 'easeOut',
                    }}
                    className="flex items-center gap-2 md:gap-3"
                  >
                    <span className="text-foreground/30 text-xs w-4 md:w-6 text-right">
                      {line.lineNumber}
                    </span>
                    <div
                      className="h-3 md:h-4 bg-gradient-to-r from-foreground/20 to-foreground/5 rounded"
                      style={{
                        width: `${line.width}px`,
                      }}
                    />
                  </motion.div>
                ))}

                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-1 md:w-2 h-3 md:h-5 bg-orange ml-8 md:ml-10"
                />
              </div>
            </div>

            <div className="lg:absolute left-2 md:left-4 lg:left-8 bottom-8 md:bottom-12 lg:bottom-16 w-full lg:w-80 h-32 md:h-24 lg:h-32 bg-background border border-foreground/20 rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-foreground/5 p-2 md:p-3 border-b border-foreground/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan rounded-full animate-pulse"></div>
                <span className="text-xs text-foreground/70 font-mono">
                  Build Status
                </span>
              </div>

              <div className="p-2 md:p-3 lg:p-4 font-mono text-xs space-y-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-cyan flex items-center gap-2"
                >
                  <span>●</span> Building...
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-foreground/60 flex items-center gap-2"
                >
                  <span>✓</span>
                  <span className="hidden md:inline">
                    Compiled successfully
                  </span>
                  <span className="md:hidden">Built ✓</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-orange flex items-center gap-2"
                >
                  <span>🚀</span>
                  <span className="hidden md:inline">Deployed</span>
                  <span className="md:hidden">Live</span>
                </motion.div>
              </div>
            </div>

            <div className="lg:absolute right-2 md:right-4 lg:right-72 bottom-8 md:bottom-12 lg:bottom-16 w-full lg:w-72 h-32 md:h-32 lg:h-40 bg-gradient-to-br from-cyan/10 to-blue/10 border border-cyan/30 rounded-xl backdrop-blur-sm shadow-2xl">
              <div className="p-3 md:p-4">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="w-2 h-2 border border-cyan border-t-transparent rounded-full"
                  />
                  <span className="text-foreground/90 font-medium text-xs md:text-sm">
                    Testing
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Unit Tests</span>
                    <span className="text-cyan font-mono">47/47 ✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">E2E Tests</span>
                    <span className="text-cyan font-mono">12/12 ✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Coverage</span>
                    <span className="text-cyan font-mono">94.2%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-foreground/10 rounded-full h-1 md:h-2 mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '94%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="bg-cyan rounded-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Panel
