import React from 'react'

const Web = React.lazy(() => import('./services/Web'))
const App = React.lazy(() => import('./services/App'))
const Design = React.lazy(() => import('./services/Design'))
const Branding = React.lazy(() => import('./services/Branding'))
const MVP = React.lazy(() => import('./services/MVP'))
const AI = React.lazy(() => import('./services/AI'))

export default function Services() {
  return (
    <section id="services" className="flex flex-col items-start py-10 md:py-18">
      <div className="flex flex-col items-start gap-2 lg:px-28 md:px-16 px-6">
        <h1 className="text-2xl md:text-4xl lg:text-[64px] font-semibold">
          Services
        </h1>
        <p className="opacity-70 text-sm md:text-base lg:text-lg">
          Everything you need to launch and grow a digital product — in one
          studio.
        </p>
      </div>
      <Web />
      <Design />
      <App />
      <Branding />
      <MVP />
      <AI />
    </section>
  )
}
