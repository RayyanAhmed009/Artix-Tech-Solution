import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';
import TiltCard from './TiltCard';

// Customer Reviews
const reviews = [
  {
    name: 'Ahmed Khan',
    role: 'Business Owner',
    initials: 'AK',
    rating: 5,
    review:
      'Artix Tech Solutions transformed our online presence with a modern and professional website. Highly recommended!',
  },
  {
    name: 'Sarah Arif',
    role: 'Startup Founder',
    initials: 'SA',
    rating: 4,
    review:
      'Amazing design quality and excellent communication throughout the project. The final result exceeded my expectations.',
  },
  {
    name: 'Usman Ali',
    role: 'Marketing Manager',
    initials: 'UA',
    rating: 5,
    review:
      'Their creative approach and attention to detail really stood out. Our branding looks much more professional now.',
  },
{
  name: 'Hassan Raza',
  role: 'E-commerce Owner',
  initials: 'HR',
  rating: 4,
  review:
    'The team delivered exactly what we needed. The website looks clean, professional, and works perfectly across devices.',
},
{
  name: 'Ayesha Malik',
  role: 'Content Creator',
  initials: 'AM',
  rating: 5,
  review:
    'From design to delivery, everything was handled professionally. Their creativity and attention to detail are impressive.',
},
{
  name: 'Bilal Yousuf',
  role: 'Tech Entrepreneur',
  initials: 'BY',
  rating: 4,
  review:
    'Excellent service and great communication. They understood our requirements quickly and delivered a polished final product.',
},


];

const CustomerReviewCard = ({ review }) => {
  return (
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
  );
};

const Review = () => {
  return (
    <section
      aria-label="Customer reviews"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
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
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <CustomerReviewCard
            key={review.name}
            review={review}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;

