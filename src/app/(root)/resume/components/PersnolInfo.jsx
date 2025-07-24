"use client";
import { Github, Linkedin, Twitter, Instagram, Facebook, DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const socialsLinks = [
  { name: 'Github', link: 'https://github.com/am-abdulmueed', icon: <Github className="w-5 h-5" /> },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/abdulmueed01/', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Twitter', link: 'https://twitter.com/abdulmueed01', icon: <Twitter className="w-5 h-5" /> },
  { name: 'Instagram', link: 'https://instagram.com/a.b.d.u.l.m.u.e.e.d', icon: <Instagram className="w-5 h-5" /> },
  { name: 'Facebook', link: 'https://www.facebook.com/', icon: <Facebook className="w-5 h-5" /> },
];

const currentYear = new Date().getFullYear();
const age = currentYear - 2005;

function PersnolInfo() {
  return (
    <section className="relative py-16 px-4 md:px-10 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-purple-950/20"></div>

        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="flex flex-col items-center text-center space-y-6">
        <Image
          src="/dayanand.webp"
          width={200}
          height={200}
          className="rounded-full shadow-lg content-fit"
          alt="Abdul Mueed"
        />

        <h1 className="text-4xl font-bold text-neutral-800 dark:text-white">Abdul Mueed</h1>
        <p className="text-muted-foreground text-lg">Fullstack Developer</p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {socialsLinks.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* <div className="mt-10 space-y-2 text-md font-semibold text-gray-600 dark:text-gray-400">
          <p>Age: {age}</p>
          <p>Country: Pakistan</p>
          <p>Address: Punjab, DG Khan</p>
          <p>Email: am.abdulmueed@gmail.com</p>
          <p>Phone: NA</p>
        </div> */}

        <div className="mt-8">
          <Link href="/Abdul Mueed Resume.pdf" download>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-2 transition-all">
              <DownloadIcon className="w-4 h-4" />
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PersnolInfo;
