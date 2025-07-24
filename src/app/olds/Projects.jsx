import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GitBranchIcon, GitCommitVerticalIcon, Github, GithubIcon, LucideGithub } from 'lucide-react';

// Sample data for projects
const projects = [
  {
    title: 'Agricart FPC Ecomerce Site',
    description: 'Ecomerce Site with Next.js and Tailwind CSS & Firebase #BrandSite',
    img: '/agricart-shop.png',
    url: 'https://agricart-shop.vercel.app/',
    source: 'https://github.com/am-abdulmueed/404.git'
  },
  {
    title: 'Tailwind CSS Bg Gradient',
    description: 'Tailwind CSS Background Gradient Plugin',
    img: '/tailwindbg.png',
    url: 'https://tailwind-bg-tawny.vercel.app/',
    source: 'https://github.com/am-abdulmueed/404.git'
  },
  
  {
    title: 'File Shareing Site',
    description: 'Share File By using URL',
    img: '/file-uplode.png',
    url: 'https://file-share-site-ten.vercel.app/',
    source: 'https://github.com/am-abdulmueed/404.git'
  },
  {
    title: 'URL Shortener',
    description: 'ShortURL allows to shorten long links from Instagram .........',
    img: '/url-shortner.png',
    url: 'https://miniurl.dayanandgawade.in/',
    source: 'https://github.com/am-abdulmueed/404.git'
  },
  {
    title: 'MusicHub',
    description: 'MusicHub is a music player app that allows you to listen to your favorite music online',
    img: '/musichub.png',
    url: 'https://musichub.dayanandgawade.in/',
    source: 'https://github.com/am-abdulmueed/404.git'
  },
];

function Projects() {
  return (
    <div className='text-center mt-20 p-2'>

      {/* <h1 className='text-3xl font-sans font-extrabold sm:text-1xl md:text-1xl lg:text-5xl'>Projects</h1> */}

      <div className='mt-5'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-start items-start  gap-3'>

          {projects.map((project, index) => (

            <a key={index} href={project.url} className='block bg-white dark:bg-secondary/40 px-3 py-2  dark:border-gray-700 dark:shadow-lg dark:shadow-secondary/80 dark:hover:shadow-xl dark:transition-shadow dark:duration-300 border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:text-white '>
              <img src={project.img} alt={project.title} className='w-full max-h-[800px] sm:max-h-[700px] object-contain rounded-lg mb-4' />
              <h2 className='text-[16px]  font-semibold mb-2'>{project.title}</h2>
              <p className='text-gray-700 text-[12px] dark:text-gray-400'>{project.description.slice(0,55)}......</p>
              <div className='mt-4 gap-2.5 w-full flex pb-1'>
                <Link href={project.url}>
                  <Button target='_blank' className='mt-3 rounded-lg bg-black dark:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-black hover:bg-gray-400 dark:text-white p-4 w-full '>Live Site</Button>
                </Link>
                <Link href={project.source}>
                  <Button target='_blank' className='mt-3 rounded-full bg-transperent  border-gray-700 dark:text-white  text-black hover:bg-transparent dark:hover:text-blue-500  hover:text-blue-600 w-full target:_blank h-[3s0px]'> <Github />  </Button>
                </Link>
              </div>

            </a>

          ))}

        </div>
      </div>
    </div>
  );
}

export default Projects;
