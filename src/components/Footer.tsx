import { Link } from '@tanstack/react-router'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'

function Footer() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center bg-foreground py-32 text-background">
        <h2 className="text-3xl font-medium">Wanna build somethin&apos;?</h2>
        <h1 className="lg:text-[64px] text-4xl font-semibold underline hover:scale-105 hover:decoration-wavy hover:text-red mt-2 transition-all duration-300 cursor-pointer">
          Let&apos;s connect!
        </h1>

        <div className="flex flex-wrap lg:px-24 max-lg:px-8 gap-4 mt-24 max-lg:mt-12 items-center justify-center">
          <Link
            className="px-6 py-3 rounded-full border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 hover:scale-105 max-lg:text-sm font-semibold active:scale-95 active:rotate-1"
            to="mailto:hello@prodlabs.io"
          >
            hello@prodlabs.io{' '}
            <MdOutlineAlternateEmail className="inline-block text-xl mb-0.5 ml-2" />
          </Link>
          <Link
            className="px-6 py-3 rounded-full border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 hover:scale-105 max-lg:text-sm font-semibold active:scale-95 active:-rotate-1"
            to="mailto:hello@prodlabs.io"
          >
            Linkedin{' '}
            <FiArrowUpRight className="inline-block text-xl mb-0.5 ml-2" />
          </Link>
          <Link
            className="px-6 py-3 rounded-full border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 hover:scale-105 max-lg:text-sm font-semibold active:scale-95 active:rotate-0.5"
            to="mailto:hello@prodlabs.io"
          >
            Instagram{' '}
            <FiArrowUpRight className="inline-block text-xl mb-0.5 ml-2" />
          </Link>
          <Link
            className="px-6 py-3 rounded-full border-2 border-background hover:bg-background hover:text-foreground transition-all duration-300 hover:scale-105 max-lg:text-sm font-semibold active:scale-95 active:-rotate-2"
            to="mailto:hello@prodlabs.io"
          >
            Twitter{' '}
            <FiArrowUpRight className="inline-block text-xl mb-0.5 ml-2" />
          </Link>
        </div>
      </div>
      <footer className="flex flex-col lg:px-28 max-lg:px-12 items-center justify-center w-screen bg-black py-12">
        <div className="max-w-screen-2xl mx-auto text-center relative">
          <img src="/footr.svg" alt="Prodlabs.io" className="w-screen max-lg:mb-12" />
          <div className="absolute bottom-2 left-4 text-xs text-gray-400 font-mono">
            © 2025 Prodlabs.io
          </div>
          <div className="absolute bottom-2 right-4 text-xs text-gray-400 font-mono">
            SITE BY PRODLABS.IO
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
