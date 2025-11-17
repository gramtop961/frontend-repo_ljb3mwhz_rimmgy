import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import Hero from './components/Hero'
import ValueCards from './components/ValueCards'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import LogoMark from './components/LogoMark'

function App() {
  const handlePrimary = () => {
    const el = document.getElementById('cta')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const handleSecondary = () => {
    const el = document.getElementById('how')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(245,246,255,0.7),rgba(255,255,255,1)_40%)] text-zinc-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <LogoMark />
            <span className="text-sm font-medium tracking-wide">Flune</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex">
            <a href="#how" className="hover:text-zinc-900">How it works</a>
            <a href="#value" className="hover:text-zinc-900">Product</a>
            <a href="#industries" className="hover:text-zinc-900">Industries</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 sm:inline-flex">Request Access</a>
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 bg-white shadow-sm sm:hidden">
              <Menu className="h-4 w-4 text-zinc-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Hero onPrimaryClick={handlePrimary} onSecondaryClick={handleSecondary} />

      {/* Value */}
      <div id="value">
        <ValueCards />
      </div>

      {/* How it works */}
      <div id="how">
        <HowItWorks />
      </div>

      {/* Industries */}
      <div id="industries">
        <Industries />
      </div>

      {/* Final CTA */}
      <section id="cta" className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">Partner with Flune</h3>
                <p className="mt-1 text-sm text-zinc-600">We’re onboarding a limited set of high-intent platforms.</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-800">Request Early Access</a>
                <a href="#how" className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50">How Flune Works</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/80 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <LogoMark />
              <span>Flune</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-zinc-800">Privacy</a>
              <a href="#" className="hover:text-zinc-800">Terms</a>
              <span className="text-zinc-400">© {new Date().getFullYear()} Flune</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
