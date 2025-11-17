import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Boxes, Network } from 'lucide-react'

const items = [
  {
    title: 'AI Decision Engine',
    desc: 'Real-time ranking that maps user intent signals to native ad demand with surgical precision.',
    icon: Cpu,
  },
  {
    title: 'Native Ad SDK',
    desc: 'Drop-in components for cards, feeds, and overlays that feel at home in your product.',
    icon: Boxes,
  },
  {
    title: 'Demand Network',
    desc: 'Direct access to premium advertisers transacting on intent, not impressions.',
    icon: Network,
  },
]

export default function ValueCards() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md border border-zinc-200 bg-zinc-50 p-2 shadow-sm">
                  <it.icon className="h-5 w-5 text-indigo-500" />
                </div>
                <h3 className="text-sm font-medium text-zinc-900">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
