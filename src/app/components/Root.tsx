import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ScrollRestoration } from './ScrollRestoration';

export function Root() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <ScrollRestoration />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}