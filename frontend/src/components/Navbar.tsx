import { geistSans, geistMono } from '../utils/fonts';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <ul className="flex flex-row justify-between">
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
          <Link href="/">Join as a member!</Link>
        </li>
        <li>
          <Link href="/">Apply to be an exec!</Link>
        </li>
      </ul>
    </nav>
  );
}
