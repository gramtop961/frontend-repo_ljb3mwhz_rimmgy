import React from 'react'

const industries = [
  'Real Estate', 'Fitness', 'Finance', 'Travel',
  'Parenting', 'Education', 'Vehicles', 'Legal'
]

export default function Industries() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">Built for high-intent categories</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {industries.map((name) => (
            <div key={name} className="rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700 shadow-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
