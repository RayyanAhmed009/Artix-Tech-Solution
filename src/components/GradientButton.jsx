import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

export default function GradientButton({
  children,
  to = '',
  type = 'button',
  variant = 'solid',
  size = 'md',
  arrow = false,
  disabled = false,
  onClick = undefined,
  className = '',
}) {
  const sizing = size === 'sm' ? 'h-10 px-5 text-sm' : 'h-12 px-7 text-sm';
  const look =
    variant === 'solid'
      ? 'btn-gradient text-white hover:brightness-110'
      : 'border border-[#d96bff] bg-white/[0.02] text-white hover:border-[#d96bff] hover:bg-neon-pink/10';
  const classes = `group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl font-semibold transition-[filter,background-color,border-color,transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60 ${sizing} ${look} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}