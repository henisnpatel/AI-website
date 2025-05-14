'use client';

import { useState } from 'react';
import { kalnia } from '../utils/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-[#2B85A8] w-full sticky top-0 z-50 h-[90px] bg-[#FAF9F6]">
      <nav
        className={`${kalnia.variable} font-[family-name:var(--font-kalnia)] px-6 md:px-8 flex items-center max-w-6xl mx-auto w-full text-[#244F7A]`}
      >
        <Image
          src="/aic_logo_82x82.png"
          alt="AI Club Logo"
          width={64}
          height={64}
          className="w-[82px] h-[82px] border-1"
        />

        <div className="md:hidden lg:flex hidden xs:flex flex-col justify-center ml-3 md:ml-4">
          <h3 className="text-sm">University of Calgary</h3>
          <h2 className="text-base">Artificial Intelligence Club</h2>
        </div>

        <ul className="hidden md:flex flex-row ml-auto text-sm md:text-base">
          <li className="mr-6">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-6">
            <Link href="/events">Events</Link>
          </li>
          <li className="mr-6">
            <Link href="/newsletter">Newsletter</Link>
          </li>
          <li className="mr-6">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="mr-6">
            <Link href="/">Become a member</Link>
          </li>
        </ul>

        <button
          className="md:hidden ml-auto text-[#244F7A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#faf9f6] shadow-md w-full py-3 space-y-3 text-sm">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/events" onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/newsletter" onClick={() => setIsOpen(false)}>
              Newsletter
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Become a member
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
