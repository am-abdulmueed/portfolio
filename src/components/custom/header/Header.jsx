'use client'
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const hideOnAbout = pathname.startsWith('/about');
  if (hideOnAbout) return null;
  return (
    <>
      <Navbar />
    </>
  );
};

export default Header;
