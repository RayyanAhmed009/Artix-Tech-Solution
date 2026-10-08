import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ArrowUpIcon } from 'lucide-react';
import  Logo  from './Logo';
import  SocialLinks  from './SocialLinks';
import { contactInfo, footerServices, navLinks } from '../data/site';

export function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowTopButton(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <>
    <footer className="relative mt-24 border-t border-white/5 backdrop-blur-lg ">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.4fr] lg:px-10">
        <div>
          <div className="inline-block">
            <Logo />
          </div>
          <p className="mt-6 max-w-[230px] text-sm leading-relaxed text-white/65">
            We transform ideas into digital masterpieces that help your business grow.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/65 transition-colors duration-150 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-5 space-y-3.5">
            {footerServices.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-white/65 transition-colors duration-150 hover:text-white">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact Info</h2>
          <ul className="mt-5 space-y-5">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.label} className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                    <Icon className="neon-icon-pink h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-white/90">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-white/60 transition-colors duration-150 hover:text-white">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/60">{c.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

     <div className="mx-auto max-w-7xl px-6 lg:px-10">
  <div className="relative flex items-center justify-center border-t border-white/5 py-6">
    <p className="text-xs text-white/55">
      © 2026 Artix Tech Solutions. All Rights Reserved.
    </p>

   
  </div>
</div>
    </footer>
     {showTopButton && (
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-neon-blue/30
          bg-ink/90
          text-neon-blue
          shadow-[0_0_18px_rgba(42,168,245,0.35)]
          backdrop-blur-md
          transition-all
          duration-200
          hover:-translate-y-1
          hover:border-neon-blue/60
          hover:shadow-[0_0_25px_rgba(42,168,245,0.55)]
        "
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    )}
    </>
  )
}

export default Footer;