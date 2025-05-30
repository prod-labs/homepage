// import { Link } from '@tanstack/react-router'

import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="flex gap-2 fixed top-0 left-0 right-0 justify-between py-5 lg:px-24 max-lg:px-12 z-20 w-full">
      <nav className="flex flex-row justify-between items-center w-full">
        <div className="p-2 px-4  flex flex-row gap-3 items-center justify-center rounded-xl bg-background">
          <img src="/icon.svg" alt="Prodlabs" className="w-10 h-10" />
          <h1 className="font-heading text-2xl lg:text-3xl">prodlabs.io</h1>
        </div>
        <div className="max-lg:hidden flex flex-row gap-8 *:font-semibold *:text-foreground/80 bg-background rounded-xl p-2 px-4">
          <Link to="#why">Why Us</Link>
          <Link to="#services">Services</Link>
          <Link to="#testimonials">Testimonials</Link>
          <Link to="#pricing">Pricing</Link>
          <Link to="#faq">FAQs</Link>
        </div>
      </nav>
    </header>
  )
}
