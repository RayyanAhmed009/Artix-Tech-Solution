import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import  Navbar from './Navbar';
import  Footer  from './Footer';

function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
  <div className="relative min-h-[100dvh] w-full overflow-x-hidden text-white bg-[#03020a]">
      <div 
        className="fixed inset-0 h-full w-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 2, 10, 0.55), rgba(3, 2, 10, 0.55)), url('/assets/background.png')`,
          transform: 'translateZ(0)' // Mobile background fix ke liye
        }}
      />

      {/* 2. Saara Content (z-10 ki waja se background ke upar show hoga) */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>

    </div>
    </>
  );
}

export default SiteLayout;