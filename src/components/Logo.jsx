import React from 'react';

export default function Logo() {
  return (
   <div className="flex items-center" aria-label="Artix Tech Solutions">
  <img
     src="/assets/Logo.jpeg"
    alt="Artix Tech Solutions"
    className="h-12 w-auto object-contain sm:h-14"
  />
</div>
  );
}
