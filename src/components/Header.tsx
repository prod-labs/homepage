// import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="flex gap-2 fixed top-0 left-0 right-0 justify-between py-5 lg:px-24 max-lg:px-12 z-20">
      <nav className="flex flex-row">
        <div className="p-2 px-4 rounded-xl bg-background">
          <h1 className="font-heading text-3xl lg:text-5xl">prodlabs.io</h1>
        </div>
      </nav>
    </header>
  )
}
