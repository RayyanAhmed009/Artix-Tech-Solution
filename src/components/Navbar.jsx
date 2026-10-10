import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { animate, createSpring, utils } from 'animejs';
import { MenuIcon, XIcon } from 'lucide-react';
import  Logo  from './Logo';
import  GradientButton  from './GradientButton';
import { navLinks } from '../data/site';

const MENU_EASE = 'cubicBezier(0.23, 1, 0.32, 1)';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // `render` keeps the mobile menu mounted while its exit animation plays
  const [render, setRender] = useState(false);
  const { pathname } = useLocation();

  const listRef = useRef(null);
  const menuRef = useRef(null);
  const menuAnim = useRef(null);
  const underlineAnim = useRef(null);
  const prevRect = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ---------- Sliding underline (replaces framer-motion layoutId) ----------
  useLayoutEffect(() => {
    const el = listRef.current && listRef.current.querySelector('[data-underline]');
    if (!el) {
      prevRect.current = null;
      return;
    }
    const next = el.getBoundingClientRect();
    const prev = prevRect.current;

    if (underlineAnim.current) underlineAnim.current.cancel();

    if (prev && next.width > 0) {
      utils.set(el, {
        translateX: prev.left - next.left,
        scaleX: prev.width / next.width,
      });
      underlineAnim.current = animate(el, {
        translateX: 0,
        scaleX: 1,
        ease: createSpring({ stiffness: 500, damping: 40 }),
      });
    }
    prevRect.current = next;
  }, [pathname]);

  // ---------- Mobile menu enter / exit (replaces AnimatePresence) ----------
  const playIn = () => {
    const el = menuRef.current;
    if (!el) return;
    if (menuAnim.current) menuAnim.current.cancel();
    utils.set(el, { opacity: 0, translateY: -8 });
    menuAnim.current = animate(el, {
      opacity: 1,
      translateY: 0,
      duration: 200,
      ease: MENU_EASE,
    });
  };

  const playOut = () => {
    const el = menuRef.current;
    if (!el) {
      setRender(false);
      return;
    }
    if (menuAnim.current) menuAnim.current.cancel();
    menuAnim.current = animate(el, {
      opacity: 0,
      translateY: -8,
      duration: 200,
      ease: MENU_EASE,
      onComplete: () => setRender(false),
    });
  };

  useLayoutEffect(() => {
    if (open) {
      if (!render) setRender(true); // mount first, then play in (effect below)
      else playIn();
    } else if (render) {
      playOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useLayoutEffect(() => {
    if (render && open) playIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  useEffect(
    () => () => {
      if (menuAnim.current) menuAnim.current.cancel();
      if (underlineAnim.current) underlineAnim.current.cancel();
    },
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10" aria-label="Main">
        <Link to="/" className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue">
          <Logo />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul ref={listRef} className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap py-2 text-sm font-medium transition-colors duration-150 ${
                      isActive ? 'text-white' : 'text-white/75 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <span
                          data-underline
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full btn-gradient"
                          style={{ transformOrigin: 'left center' }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <GradientButton to="/contact" size="sm" className="rounded-full">
            Get Started
          </GradientButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {render && (
        <div
          ref={menuRef}
          className="border-t border-white/5 bg-ink px-6 pb-6 md:hidden"
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block py-3 text-base font-medium ${isActive ? 'text-gradient' : 'text-white/80'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <GradientButton to="/contact" className="w-full">
            Get Started
          </GradientButton>
        </div>
      )}
    </header>
  );
}