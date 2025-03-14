import { kalnia } from '../utils/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="border-b-2 border-[#2B85A8] w-full">
      <nav
        className={`${kalnia.variable} font-[family-name:var(--font-kalnia)] px-8 flex items-center max-w-6xl mx-auto w-full text-[#244F7A]`}
      >
        <Image
          src="/aic_logo_82x82.png"
          alt="AI Club Logo"
          width={82}
          height={82}
        />
        <div className="flex flex-col justify-center ml-4">
          <h3>University of Calgary</h3>
          <h2 className="text-xl">Artificial Intelligence Club</h2>
        </div>
        <ul className="hidden md:flex flex-row justify-between flex-1 ml-24 space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/newsletter">Newsletter</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/">Become a member</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
