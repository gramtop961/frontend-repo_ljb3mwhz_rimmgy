import React from 'react'

// Minimal abstract logomark: three small nodes converging into one larger node forming a subtle "F"
export default function LogoMark({ size = 28, className = '' }) {
  const s = size
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Flune logomark"
    >
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7C8CF8" />
          <stop offset="50%" stopColor="#9AA8FF" />
          <stop offset="100%" stopColor="#C1B6FF" />
        </linearGradient>
      </defs>
      {/* Large node */}
      <circle cx="32" cy="16" r="7" fill="url(#g)" opacity="0.9" />
      {/* Three small nodes */}
      <circle cx="14" cy="12" r="3" fill="url(#g)" />
      <circle cx="14" cy="22" r="3" fill="url(#g)" />
      <circle cx="22" cy="30" r="3" fill="url(#g)" />
      {/* Subtle connecting lines forming an F-like structure */}
      <path d="M14 12 L28 12" stroke="#A7B3FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 22 L24 22" stroke="#A7B3FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 22 L32 16" stroke="#A7B3FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 30 L30 22" stroke="#A7B3FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
