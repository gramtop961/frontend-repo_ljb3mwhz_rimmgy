import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    k: '01',
    title: 'Integrate the SDK',
    desc: 'Install a lightweight package and drop native ad components where intent happens.'
  },
  {
    k: '02',
    title: 'Stream Intent Signals',
    desc: 'Send anonymized context and actions. Our engine scores and routes in real time.'
  },
  {
    k: '03',
    title: 'Monetise Natively',
    desc: 'High-value placements blend into your UX—transparent reporting and full control.'
  }
]

export default function HowItWorks() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-xs font-medium tracking-widest text-zinc-500">{s.k}</div>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
