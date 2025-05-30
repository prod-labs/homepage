import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Panel from '@/components/Panel'
import WhatWeDo from '@/components/WhatWeDo'
import Services from '@/components/Services'
import { createFileRoute } from '@tanstack/react-router'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-[200vh]">
      <Hero />
      <WhatWeDo />
      <Panel />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <div className="transition-all duration-300 lg:w-[14px] max-lg:w-[4px] min-h-screen h-full fixed top-0 left-0 gradient z-0" />
    </main>
  )
}
