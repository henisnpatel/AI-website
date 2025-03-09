import { geistSans, geistMono } from '../utils/fonts';

export default function Newsletter() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      Newsletter Page
    </div>
  );
}
