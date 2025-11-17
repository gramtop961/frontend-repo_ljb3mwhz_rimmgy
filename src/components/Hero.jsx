import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to keep it subtle */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.9)_40%,rgba(255,255,255,1)_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 shadow-sm backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Top Rated — Trusted by high-intent platforms
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-[600] tracking-tight text-zinc-900 sm:text-6xl"
          >
            Monetise Intent. Everywhere.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg"
          >
            A lightweight SDK that turns your platform’s intent signals into high-value native ad placements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <button
              onClick={onPrimaryClick}
              className="group inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-800"
            >
              Request Early Access
            </button>
            <button
              onClick={onSecondaryClick}
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50"
            >
              How Flune Works
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
