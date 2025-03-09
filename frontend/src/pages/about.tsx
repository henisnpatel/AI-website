import { geistSans, geistMono } from '../utils/fonts';

export default function About() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      About Page
    </div>
  );
}
