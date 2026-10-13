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
     
  <iframe
    src="/webgl-background.html"
    title="Animated background"
    className="fixed inset-0 z-0 h-screen w-full border-0 pointer-events-none"
    aria-hidden="true"
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