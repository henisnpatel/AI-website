import { geistSans, geistMono } from '../utils/fonts';

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      Home Page
    </div>
  );
}
