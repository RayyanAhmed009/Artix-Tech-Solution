import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, QuoteIcon } from 'lucide-react';
import TiltCard from './TiltCard';

// Customer Reviews
const reviews = [
{
  name: 'Michael Carter',
  role: 'Business Owner',
  initials: 'MC',
  rating: 5,
  review:
    'Artix Tech Solutions built a modern and professional website for our business. The final result looks amazing and works perfectly across all devices.',
},
{
  name: 'Emily Johnson',
  role: 'Startup Founder',
  initials: 'EJ',
  rating: 5,
  review:
    'The team understood our vision and turned it into a beautiful digital experience. Their creativity, communication, and attention to detail were excellent.',
},
{
  name: 'Daniel Williams',
  role: 'E-commerce Manager',
  initials: 'DW',
  rating: 4,
  review:
    'Great experience working with Artix Tech Solutions. They delivered a clean, responsive, and professional website that perfectly matched our requirements.',
},
{
  name: 'James Anderson',
  role: 'Tech Entrepreneur',
  initials: 'JA',
  rating: 5,
  review:
    'The Artix team did an incredible job bringing our ideas to life. The website feels modern, polished, and truly represents our brand.',
},
{
  name: 'Olivia Martinez',
  role: 'Marketing Director',
  initials: 'OM',
  rating: 5,
  review:
    'Professional service and outstanding design quality. They were easy to work with and delivered a website that exceeded our expectations.',
},
{
  name: 'William Thompson',
  role: 'E-commerce Owner',
  initials: 'WT',
  rating: 4,
  review:
    'From the initial concept to the final delivery, everything was handled professionally. Our new website looks fantastic and performs smoothly.',
},
{
  name: 'Hamza Ahmed',
  role: 'Business Owner',
  initials: 'HA',
  rating: 5,
  review:
    'Artix Tech Solutions delivered an outstanding website for our business. The design is modern, fast, and exactly what we were looking for.',
},
{
  name: 'Maham Tariq',
  role: 'Startup Founder',
  initials: 'MT',
  rating: 5,
  review:
    'I was impressed by their creativity and professionalism. They turned our ideas into a beautiful digital experience that truly represents our brand.',
},
{
  name: 'Zain Shah',
  role: 'E-commerce Manager',
  initials: 'ZS',
  rating: 4,
  review:
    'Great experience from start to finish. The team was responsive, understood our requirements, and delivered a clean and professional website.',
},




];

const CustomerReviewCard = ({ review, index }) => {
    const fromLeft = index % 2 === 0;

    return (
        <motion.div initial={{ opacity: 0, x: fromLeft ? -100 : 100, scale: 0.94, }} whileInView={{ opacity: 1, x: 0, scale: 1, }} viewport={{ once: false, amount: 0.2, }} transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1], }} >
            <TiltCard
                className="
          card-glow
          flex h-full flex-col
          rounded-xl
          border border-[#d96bff50]
          bg-[#0a0916]/70
          p-5
          transition-[border-color,box-shadow]
          duration-300
          hover:border-[#d96bff]
          hover:shadow-[0_0_30px_rgba(217,107,255,0.25)]
          sm:p-6
        "
            >
                {/* Customer Info */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <div
                            className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-full
                bg-[linear-gradient(135deg,#2aa8f5,#8b5cf6,#d13cf2)]
                text-sm font-semibold text-white
                shadow-[0_0_18px_rgba(139,92,246,0.25)]
              "
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            {review.initials}
                        </div>

                        {/* Name + Role */}
                        <div>
                            <h3
                                className="text-[15px] font-semibold text-white"
                                style={{ transform: 'translateZ(25px)' }}
                            >
                                {review.name}
                            </h3>

                            <p className="mt-0.5 text-xs text-white/45">
                                {review.role}
                            </p>
                        </div>
                    </div>

                    {/* Quote Icon */}
                    <QuoteIcon
                        className="h-8 w-8 shrink-0 text-[#d96bff]/35"
                        strokeWidth={1.5}
                        aria-hidden="true"
                    />
                </div>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                        <StarIcon
                            key={index}
                            className="h-4 w-4 fill-[#d96bff] text-[#d96bff]"
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                    ))}
                </div>

                {/* Review */}
                <p className="mt-4 text-[14px] leading-relaxed text-white/60">
                    "{review.review}"
                </p>
            </TiltCard>
        </motion.div>
    );
};

const Review = () => {
    return (
        <section
            aria-label="Customer reviews"
            className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
        >
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="mx-auto mb-10 max-w-2xl text-center"
            >
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#d96bff]">
                    Client Reviews
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    What Our{' '}
                    <span className="bg-gradient-to-r from-[#2aa8f5] via-[#8b5cf6] to-[#d13cf2] bg-clip-text text-transparent">
                        Clients Say
                    </span>
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                    We help businesses turn their ideas into powerful digital
                    experiences that deliver real results.
                </p>
            </motion.div>

            {/* Reviews Grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review, index) => (
                    <CustomerReviewCard
                        key={review.name}
                        review={review}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Review;

