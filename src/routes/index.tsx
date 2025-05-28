import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-[200vh]">
      <div className="transition-all duration-300 lg:w-[18px] max-lg:w-[4px] min-h-screen h-full fixed top-0 left-0 gradient" />
      <Hero />
      <WhatWeDo />
      <Footer />
    </main>
  )
} 
