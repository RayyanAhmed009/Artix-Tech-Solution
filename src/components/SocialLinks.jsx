import React from 'react';

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', glyph: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', glyph: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', glyph: 'in' },
  { label: 'Behance', href: 'https://behance.net', glyph: 'Be' },
];

export default function SocialLinks({ size = 'md' }) {
  const box = size === 'sm' ? 'h-7 w-7 text-[11px]' : 'h-9 w-9 text-sm';
  return (
    <ul className="flex items-center gap-3">
      {socials.map((s, i) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className={`flex items-center justify-center rounded-md border font-bold transition-[transform,background-color,border-color] duration-150 ease-out hover:-translate-y-0.5 ${box} ${
              i % 2 === 0
                ? 'border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10'
                : 'border-neon-pink/40 text-neon-pink hover:bg-neon-pink/10'
            }`}
          >
            {s.glyph === 'facebook' && (
              <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="currentColor" aria-hidden="true">
                <path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8Z" />
              </svg>
            )}
            {s.glyph === 'instagram' && (
              <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            )}
            {(s.glyph === 'in' || s.glyph === 'Be') && <span aria-hidden="true">{s.glyph}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
