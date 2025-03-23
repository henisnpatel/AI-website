import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-[calc(100dvh-90px)]">
      <Navbar />
      <div className="h-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
