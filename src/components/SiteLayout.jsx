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
    <div className="min-h-screen w-full overflow-x-hidden bg-ink text-white">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default SiteLayout;