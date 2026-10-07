import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import  TiltCard  from './TiltCard';

export default function ServiceCard({ service, showLink = false }) {
  const Icon = service.icon;
  return (
    <TiltCard className="card-glow flex flex-col rounded-xl border border-[#d96bff] p-5 transition-[border-color,box-shadow] duration-75 hover:border-[#d96bff] hover:shadow-[0_0_30px_rgba(217,107,255,0.25)] sm:p-6">
      <div style={{ transform: 'translateZ(40px)' }}>
        <Icon
          className={`h-11 w-11 ${service.tone === 'pink' ? 'neon-icon-pink' : service.tone === 'silver' ? 'neon-icon-silver' : 'neon-icon-blue'}`}
          strokeWidth={1.4}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-6 text-[15px] font-semibold text-white" style={{ transform: 'translateZ(25px)' }}>
        {service.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-white/60">{service.description}</p>
      {showLink && (
        <Link
          to="/contact"
          className="group mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-medium text-neon-violet transition-colors duration-150 hover:text-neon-pink"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      )}
    </TiltCard>
  );
}
