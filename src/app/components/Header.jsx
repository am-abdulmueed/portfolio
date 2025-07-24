"use client"
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  SunDimIcon, 
  Menu, 
  X, 
  Home,
  User,
  FolderOpen,
  Briefcase,
  Mail,
  ExternalLink,
  Code,
  Sparkles
} from 'lucide-react';
import { ModeToggle } from '@/components/ui/ModeToggel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Themeswitcher from '@/components/ui/theme-swicher';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/#projects', label: 'Projects', icon: FolderOpen },
  { href: '/experience', label: 'Experience', icon: Briefcase },
  // { href: '/contact', label: 'Contact', icon: Mail },
];

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }),
};

const mobileMenuVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
    }
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
};

function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const filteredNavItems = navigationItems.filter(item => {
    if (item.href === '/' && pathname === '/') return false;
    return true;
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg border-b border-neutral-200/50 dark:border-neutral-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center"
            >
              <Link href="/" className="group flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Code className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  Abdul Mueed
                </span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center gap-1">
              {filteredNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Themeswitcher />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="hidden md:block"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"  onClick={()=> window.location.href = 'https://discord.com/users/1378754745044439141' }>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Let's Talk
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                    ) : (
                      <Menu className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-6 space-y-2">
                {filteredNavItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={mobileItemVariants}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {isActive(item.href) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={mobileItemVariants}
                  className="pt-4"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg rounded-2xl py-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Let's Work Together
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20" />
    </>
  );
}

export default Header;