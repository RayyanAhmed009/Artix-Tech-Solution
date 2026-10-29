import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckIcon,
  GlobeIcon,
  PaletteIcon,
  PenToolIcon,
  PencilRulerIcon,
  RocketIcon,
  LaptopIcon,
  LayersIcon,
} from "lucide-react";

/* ------------------------------ DATA ------------------------------ */

const categories = [
  { id: "website", label: "Website", icon: GlobeIcon },
  { id: "branding", label: "Branding", icon: PaletteIcon },
  { id: "logo", label: "Logo Design", icon: PenToolIcon },
  { id: "uiux", label: "UI / UX", icon: PencilRulerIcon },
];

const packages = {
  website: [
    {
      name: "Start up",
      tagline: "Perfect for Small Businesses & Personal Brands",
      icon: RocketIcon,
      price: "$1,599",
      currency: "USD",
      priceNote: "One-time Payment • No Monthly Fees",
      features: [
        "5 Page Website",
        "Mobile Responsive Layout",
        "Contact/Query Form",
        "FREE Favicon Design",
        "Cross Browser Compatible",
        "Complete W3C Certified HTML",
        "Website Initial Concepts in 48 Hours",
        "Complete Design & Deployment",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
      ],
      cta: "Get Started",
    },
    {
      name: "Essential",
      tagline: "Ideal for Growing Businesses",
      icon: LaptopIcon,
      price: "$2899",
      currency: "USD",
      priceNote: "One-time Payment • Best Value",
      features: [
        "10 Page Website",
        "Custom Layout Design",
        "Contact/Query Form",
        "3 Banner Designs",
        "5 Stock Photos (You can provide us more)",
        "Free Mobile Responsive",
        "FREE Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "Website Initial Concepts in 48 Hours",
        "Complete Design & Deployment",
        "100% Ownership Rights",
        "100% Money Back Guarantee",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Scale",
      tagline: "For Established Brands & Enterprises",
      icon: LayersIcon,
      price: "Custom Pricing",
      priceNote: "Tailored Enterprise Solution",
      features: [
        "Unlimited Pages",
        "Fully Bespoke Design & Development",
        "Advanced Functionality & API Integrations",
        "E-Commerce / Booking System",
        "Custom Dashboard (if needed)",
        "Ongoing Maintenance & Support",
        "Dedicated Project Manager",
        "Performance & Security Audit",
      ],
      cta: "Get Started",
    },
  ],
  branding: [
    {
      name: "Start up",
      tagline: "A solid foundation for new brands",
      icon: RocketIcon,
      price: "$899",
      currency: "USD",
      priceNote: "One-time Payment • No Monthly Fees",
      features: [
        "Logo Design (3 Concepts)",
        "Colour Palette",
        "Typography Selection",
        "Business Card Design",
        "Email Signature",
        "Social Media Avatars",
        "Unlimited Revisions",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
      ],
      cta: "Get Started",
    },
    {
      name: "Essential",
      tagline: "A complete identity for growing teams",
      icon: LaptopIcon,
      price: "$1899",
      currency: "USD",
      priceNote: "One-time Payment • Best Value",
      features: [
        "Logo Design (6 Concepts)",
        "Brand Guidelines Document",
        "Stationery Design Suite",
        "Social Media Kit",
        "Brand Pattern & Iconography",
        "Presentation Template",
        "Unlimited Revisions",
        "Source Files Included",
        "100% Ownership Rights",
        "100% Money Back Guarantee",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Scale",
      tagline: "For Established Brands & Enterprises",
      icon: LayersIcon,
      price: "Custom Pricing",
      priceNote: "Tailored Enterprise Solution",
      features: [
        "Brand Strategy Workshop",
        "Full Visual Identity System",
        "Brand Voice & Messaging",
        "Packaging & Print Collateral",
        "Rebrand Rollout Support",
        "Dedicated Brand Manager",
      ],
      cta: "Get Started",
    },
  ],
  logo: [
    {
      name: "Start up",
      tagline: "Simple, memorable marks",
      icon: RocketIcon,
      price: "$299",
      currency: "USD",
      priceNote: "One-time Payment • No Monthly Fees",
      features: [
        "3 Unique Logo Concepts",
        "2 Revision Rounds",
        "Concepts in 48 Hours",
        "PNG & JPG Formats",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
      ],
      cta: "Get Started",
    },
    {
      name: "Essential",
      tagline: "Versatile logos built to scale",
      icon: LaptopIcon,
      price: "$599",
      currency: "USD",
      priceNote: "One-time Payment • Best Value",
      features: [
        "6 Unique Logo Concepts",
        "Unlimited Revisions",
        "Concepts in 24 Hours",
        "All Vector Source Files",
        "Logo Variations & Icon",
        "Mini Style Guide",
        "Social Media Kit",
        "100% Ownership Rights",
        "100% Money Back Guarantee",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Scale",
      tagline: "For Established Brands & Enterprises",
      icon: LayersIcon,
      price: "Custom Pricing",
      priceNote: "Tailored Enterprise Solution",
      features: [
        "Dedicated Senior Designer",
        "Logo Animation",
        "Sub-brand Marks",
        "Trademark-ready Files",
        "Priority Turnaround",
      ],
      cta: "Get Started",
    },
  ],
  uiux: [
    {
      name: "Start up",
      tagline: "Validate your product idea",
      icon: RocketIcon,
      price: "$1,299",
      currency: "USD",
      priceNote: "One-time Payment • No Monthly Fees",
      features: [
        "Up to 5 Screens",
        "User Flow Mapping",
        "Low-fidelity Wireframes",
        "High-fidelity Mockups",
        "Clickable Prototype",
        "Figma Source Files",
        "100% Ownership Rights",
      ],
      cta: "Get Started",
    },
    {
      name: "Essential",
      tagline: "Polished product experiences",
      icon: LaptopIcon,
      price: "$3499",
      currency: "USD",
      priceNote: "One-time Payment • Best Value",
      features: [
        "Up to 20 Screens",
        "UX Research & Personas",
        "Information Architecture",
        "Responsive Design (Web & Mobile)",
        "Interactive Prototype",
        "Component Design System",
        "Usability Review",
        "Developer Handoff",
        "100% Money Back Guarantee",
      ],
      cta: "Get Started",
      featured: true,
    },
    {
      name: "Scale",
      tagline: "For Established Brands & Enterprises",
      icon: LayersIcon,
      price: "Custom Pricing",
      priceNote: "Tailored Enterprise Solution",
      features: [
        "Unlimited Screens",
        "Full Product Discovery",
        "Enterprise Design System",
        "Usability Testing Sessions",
        "Accessibility Audit",
        "Dedicated Product Designer",
      ],
      cta: "Get Started",
    },
  ],
};

/* ------------------------------ PAGE ------------------------------ */

export default function Pricing() {
  const [active, setActive] = useState("website");
  const reduceMotion = useReducedMotion();

  return (
    <main
      className="min-h-screen w-full antialiased"
      style={{ fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
        .feature-scroll { scrollbar-width: thin; scrollbar-color: #b42df2 transparent; }
        .feature-scroll::-webkit-scrollbar { width: 6px; }
        .feature-scroll::-webkit-scrollbar-track {  background: rgba(150, 150, 150, 0.15); border-radius: 999px; }
        .feature-scroll::-webkit-scrollbar-thumb {  background: linear-gradient(
    180deg,
    #f02bea 0%,
    #b42df2 30%,
    #6355f5 62%,
    #21b9f5 100%
  ); border-radius: 999px; }
      `}</style>

      <section
        aria-labelledby="pricing-heading"
        className="w-full px-6 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-[#f3a8ff]">
                Services &amp; Packages
              </p>
              <h2
                id="pricing-heading"
                className="mt-1 text-2xl font-bold text-gradient sm:text-3xl"
              >
                Flexible Solutions for Every Stage
              </h2>
            </div>

          </header>

          {/* Tabs */}
          <div className="mt-9 w-full min-w-0 lg:pl-11">
            <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain scrollbar-hide sm:overflow-x-visible">
              <div
                className="flex w-max min-w-full flex-nowrap items-center gap-3 px-1 pb-2 sm:w-full sm:flex-wrap sm:justify-center sm:px-0"
                role="tablist"
              >
                {categories.map(({ id, label, icon: Icon }) => {
                  const isActive = id === active;
                  return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(id)}
                   className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A35B] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-5 ${isActive
                    ? "border-[#d96bff] bg-[linear-gradient(90deg,#f02bea_0%,#b42df2_30%,#6355f5_62%,#21b9f5_100%)] text-white"
                    : "border-[#2A2A2A] bg-[#141414] text-white hover:border-[#d96bff]"
                    }`}
                >
                    <Icon
                      className={`h-4 w-4 ${isActive ? "text-white" : "text-white"}`}
                      aria-hidden="true"
                    />
                    {label}
                  </button>
                 );
            })}
              </div>
            </div>
          </div>
          {/* <div
            role="tablist"
            aria-label="Service categories"
            className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-3 "
          >
            {categories.map(({ id, label, icon: Icon }) => {
              const isActive = id === active;
              return (
                <button
                  key={id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActive(id)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A35B] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-5 ${isActive
                    ? "border-[#d96bff] bg-[linear-gradient(90deg,#f02bea_0%,#b42df2_30%,#6355f5_62%,#21b9f5_100%)] text-white"
                    : "border-[#2A2A2A] bg-[#141414] text-white hover:border-[#d96bff]"
                    }`}
                >
                  <Icon
                    className={`h-4 w-4 ${isActive ? "text-white" : "text-white"}`}
                    aria-hidden="true"
                  />
                  {label}
                </button>
              );
            })}
          </div> */}

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              role="tabpanel"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-10 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {packages[active].map((pkg) => {
                const { name, tagline, icon: Icon, price, currency, priceNote, features, cta, featured } = pkg;
                return (
                  <article
                    key={name}
                    className={`relative flex h-full card-glow flex-col rounded-xl p-6 sm:p-8 ${featured
                      ? "border border-[#d96bff]  text-white"
                      : "border border-[#d96bff50] text-white"
                      }`}
                  >
                    {featured && (
                      <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[linear-gradient(90deg,#f02bea_0%,#b42df2_30%,#6355f5_62%,#21b9f5_100%)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                        Most Popular
                      </span>
                    )}

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d96bff]">
                      <Icon className="h-6 w-6 text-[#d96bff]" aria-hidden="true" />
                    </div>

                    <h3 className="mt-7 text-xl font-bold">{name}</h3>
                    <p className={`mt-1 text-sm ${featured ? "text-white/80" : "text-neutral-200"}`}>
                      {tagline}
                    </p>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold leading-tight sm:text-[34px]">
                        {price}
                      </span>
                      {currency && <span className="text-base font-bold">{currency}</span>}
                    </div>
                    <p className={`mt-2 text-sm ${featured ? "text-white/80" : "text-neutral-200"}`}>
                      {priceNote}
                    </p>

                    <ul
                      className="feature-scroll mt-7 mb-8 max-h-60 space-y-2.5 overflow-y-auto pr-4"
                      aria-label={`${name} features`}
                    >
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-2 text-sm ${featured ? "text-white" : "text-white"
                            }`}
                        >
                          <CheckIcon
                            className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-[#d96bff]" : "text-[#d96bff]"
                              }`}
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`mt-auto inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-3.5 text-sm font-semibold transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A35B] focus-visible:ring-offset-2 ${featured
                        ? "bg-[linear-gradient(90deg,#f02bea_0%,#b42df2_30%,#6355f5_62%,#21b9f5_100%)] text-white hover:bg-[#E6B877] focus-visible:ring-offset-[#141414]"
                        : " bg-[linear-gradient(90deg,#f02bea_0%,#b42df2_30%,#6355f5_62%,#21b9f5_100%)] text-white"
                        }`}
                    >
                      {cta}
                      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
