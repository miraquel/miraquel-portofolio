'use client';

import { useEffect } from 'react';
import { Masthead, About, Languages, Skills, Employment, Projects } from '../components/index/index'

export default function HomePage() {
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  });
  return (
    <div className='font-jakarta'>
      <Masthead className="min-h-android -z-10 flex flex-col items-center justify-center" />
      <About className="px-11 md:px-12 lg:px-14 xl:px-32 flex flex-col bg-white py-11 md:py-12 lg:py-14 xl:py-20" />
      <Languages className="min-h-screen flex flex-col place-content-center bg-white" />
      <Skills className="min-h-screen bg-gradient-to-b from-[#D9AFD9] to-[#97D9E1] py-11" />
      <Employment className='flex flex-col min-h-screen bg-gradient-to-b from-[#FFFB7D] to-[#85FFBD]' />
      <Projects />
    </div>
  )
}