import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import  GradientButton  from '../components/GradientButton';
import  SocialLinks  from '../components/SocialLinks';
import  Reveal  from '../components/Reveal';
import { contactInfo } from '../data/site';
import useContactForm from '../hooks/useContactForm';
import { Share2Icon } from 'lucide-react';


const fields = [
  { key: 'name', label: 'Your Name', placeholder: 'Enter your name', type: 'text' },
  { key: 'email', label: 'Your Email', placeholder: 'Enter your email', type: 'email' },
  { key: 'subject', label: 'Subject', placeholder: 'Enter subject', type: 'text' },
];

const inputBase =
  'w-full rounded-md border bg-white/[0.035] px-4 text-sm text-white placeholder:text-white/40 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-2 focus:ring-neon-violet/40';

export function Contact() {
  const { values, errors, status, update, submit } = useContactForm();

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-10" aria-labelledby="contact-title">
      <Reveal className="lg:pt-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-neon-pink">CONTACT US</p>
        <h1 id="contact-title" className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Let’s Work
          <span className="text-gradient-blue block">Together!</span>
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
          Have a project in mind? Let's discuss your idea and create something amazing together.
        </p>

        <ul className="mt-9 space-y-6">
          {contactInfo.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
                  <Icon className="neon-icon-pink h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-white/70 transition-colors duration-150 hover:text-white">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70">{c.value}</p>
                  )}
                </div>
              </li>
            );
          })}
          <li className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
              <Share2Icon className="neon-icon-pink h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold text-white">Follow Us</p>
          </li>
        </ul>
        <div className="mt-4">
          <SocialLinks />
        </div>
      </Reveal>

      <Reveal delay={0.06}>
<form
  onSubmit={submit}
  noValidate
  className="relative overflow-hidden rounded-2xl border border-[#d96bff] bg-[#0a0916]/80 p-6 shadow-[0_0_40px_rgba(139,92,246,0.12)] sm:p-7"
>
  {/* Background Design */}
  <svg
    className="pointer-events-none absolute bottom-0 right-0 h-40 w-56"
    viewBox="0 0 220 160"
    fill="none"
    aria-hidden="true"
  >
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M${40 + i * 18} 160 C ${120 + i * 6} ${130 - i * 6}, ${150 + i * 4} ${90 - i * 8}, 220 ${10 + i * 10}`}
        stroke={i % 2 === 0 ? "#d13cf2" : "#8b5cf6"}
        strokeOpacity={0.6 - i * 0.08}
        strokeWidth={1.2}
        style={{ filter: "drop-shadow(0 0 4px #d13cf2)" }}
      />
    ))}
  </svg>

  <div className="relative space-y-5">

    {/* Full Name */}
    <div>
      <label htmlFor="name" className="text-sm font-medium text-white/90">
        Full Name
      </label>
      <input
        id="name"
        type="text"
        value={values.name}
        onChange={(e) => update("name", e.target.value)}
        placeholder="Enter your full name"
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? "name-error" : undefined}
        className={`${inputBase} mt-2 h-11 w-full ${
          errors.name
            ? "border-red-400/60"
            : "border-white/5 focus:border-neon-violet/60"
        }`}
      />
      {errors.name && (
        <p id="name-error" className="mt-1.5 text-xs text-red-300">
          {errors.name}
        </p>
      )}
    </div>

    {/* Email */}
    <div>
      <label htmlFor="email" className="text-sm font-medium text-white/90">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        value={values.email}
        onChange={(e) => update("email", e.target.value)}
        placeholder="Enter your email"
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "email-error" : undefined}
        className={`${inputBase} mt-2 h-11 w-full ${
          errors.email
            ? "border-red-400/60"
            : "border-white/5 focus:border-neon-violet/60"
        }`}
      />
      {errors.email && (
        <p id="email-error" className="mt-1.5 text-xs text-red-300">
          {errors.email}
        </p>
      )}
    </div>

    {/* Phone */}
    {/* <div>
      <label htmlFor="phone" className="text-sm font-medium text-white/90">
        Phone Number
      </label>
      <input
        id="phone"
        type="tel"
        value={values.phone}
        onChange={(e) => update("phone", e.target.value)}
        placeholder="Enter your phone number"
        aria-invalid={Boolean(errors.phone)}
        aria-describedby={errors.phone ? "phone-error" : undefined}
        className={`${inputBase} mt-2 h-11 w-full ${
          errors.phone
            ? "border-red-400/60"
            : "border-white/5 focus:border-neon-violet/60"
        }`}
      />
      {errors.phone && (
        <p id="phone-error" className="mt-1.5 text-xs text-red-300">
          {errors.phone}
        </p>
      )}
    </div> */}
{/* Subject Dropdown */}
<div>
  <label
    htmlFor="subject"
    className="text-sm font-medium text-white/90"
  >
    Subject
  </label>

  <div className="relative mt-2">
    <select
  id="subject"
  value={values.subject}
  onChange={(e) => update("subject", e.target.value)}
  aria-invalid={Boolean(errors.subject)}
  aria-describedby={errors.subject ? "subject-error" : undefined}
  className={`${inputBase} h-11 w-full appearance-none cursor-pointer
    rounded-xl border bg-[#0a0916] px-4 pr-10 text-sm
    text-white outline-none transition-all duration-200
    ${
      errors.subject
        ? "border-red-400/60"
        : "border-white/10 hover:border-neon-pink/40 focus:border-neon-violet/60"
    }`}
>
  <option value="" disabled className="bg-[#0a0916] text-white/50">
    Select a Subject
  </option>

  <option value="graphics-designing" className="bg-[#0a0916] text-white">
    Graphics Designing
  </option>
  <option value="web-designing" className="bg-[#0a0916] text-white">
    Web Designing
  </option>
  <option value="web-development" className="bg-[#0a0916] text-white">
    Web Development
  </option>
  <option value="digital-marketing" className="bg-[#0a0916] text-white">
    Digital Marketing
  </option>
  <option value="video-editing" className="bg-[#0a0916] text-white">
    Video Editing
  </option>
  <option value="content-creator" className="bg-[#0a0916] text-white">
    Content Creator
  </option>
  <option value="Content-&-Copywriting" className="bg-[#0a0916] text-white">
    Content & Copywriting
  </option>
  <option value="branding" className="bg-[#0a0916] text-white">
    Branding
  </option>
  <option value="app-development" className="bg-[#0a0916] text-white">
    App Development
  </option>
</select>

    {/* Dropdown Arrow */}
    <svg
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </div>

  {errors.subject && (
    <p
      id="subject-error"
      className="mt-1.5 text-xs text-red-300"
    >
      {errors.subject}
    </p>
  )}
</div>



    {/* Message */}
    <div>
      <label htmlFor="message" className="text-sm font-medium text-white/90">
        Your Message
      </label>
      <textarea
        id="message"
        rows={5}
        value={values.message}
        onChange={(e) => update("message", e.target.value)}
        placeholder="Enter your message"
        aria-invalid={Boolean(errors.message)}
        aria-describedby={errors.message ? "message-error" : undefined}
        className={`${inputBase} mt-2 w-full resize-none py-3 ${
          errors.message
            ? "border-red-400/60"
            : "border-white/5 focus:border-neon-violet/60"
        }`}
      />
      {errors.message && (
        <p id="message-error" className="mt-1.5 text-xs text-red-300">
          {errors.message}
        </p>
      )}
    </div>

    {/* Submit Button */}
    <div className="flex flex-wrap items-center gap-4 pt-1">
      <GradientButton
        type="submit"
        arrow={status !== "sending"}
        disabled={status === "sending"}
        className="min-w-[210px]"
      >
        {status === "sending" ? (
          <>
            <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </GradientButton>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            role="status"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center gap-2 text-sm text-emerald-300"
          >
            <CircleCheckIcon className="h-4 w-4" aria-hidden="true" />
            Message sent! We'll get back to you soon.
          </motion.p>
        )}
      </AnimatePresence>
    </div>

  </div>
</form>


      </Reveal>
    </section>
  );
}
