import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Scrollup from '../Scrollup/Scrollup';

export default function Layout() {



  return <>
    <div className="relative min-h-screen bg-white">
      <Scrollup />
      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  </>
}
