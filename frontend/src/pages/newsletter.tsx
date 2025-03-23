import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { geistSans, geistMono } from '../utils/fonts';
import Image from 'next/image';

// Short, centered header bar with half-circles.
const ShortCenteredHeader = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center mb-6">
    {/* Left half-circle */}
    <div className="w-[40px] h-[40px] rounded-full bg-[#244F7A] mr-[-20px] z-10" />
    {/* Main bar (shorter width) */}
    <div className="h-[40px] w-[200px] bg-[#244F7A] flex items-center justify-center px-4 text-white z-20">
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
    {/* Right half-circle */}
    <div className="w-[40px] h-[40px] rounded-full bg-[#244F7A] ml-[-20px] z-10" />
  </div>
);

export default function Newsletter() {
  const [showLatestIssue, setShowLatestIssue] = useState(false);

  const toggleLatestIssue = () => {
    setShowLatestIssue((prev) => !prev);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Hero Header */}
      <div className="relative w-full h-[400px] overflow-hidden mb-8">
        <div className="absolute inset-0">
          <Image
            src="/images/AItinkerers.jpeg"
            alt="Newsletter Header"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Newsletter</h1>
          <p className="text-xl opacity-90">
            Stay updated with our AI community news and events
          </p>
        </div>
      </div>

      {/* Main layout: */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-[auto_minmax(0,1fr)] gap-8 items-start relative -left-100">
        
        {/* Nexie placeholder */}
        <div
          className="bg-[#72C2DA] w-[400px] h-[400px] shadow-lg rounded-xl flex items-center justify-center 
                     relative top-44 -left-20"
        >
          <Image
            src="/images/nexi2.gif"
            alt="Nexie Placeholder"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Right column: */}
        <div className="flex flex-col gap-8">
          {/* About Section */}
          <section className="py-8 w-full">
            <div className="w-full md:w-[150%]">
              <ShortCenteredHeader title="About" />
            </div>
            <motion.section
              className="mb-8 w-full md:w-[150%] bg-white rounded-xl p-6 shadow-lg text-[#244F7A]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p>
                Welcome to our monthly newsletter! Each issue covers the latest
                industry, research, and student developments regarding the ever
                expanding world of Artificial Intelligence. We aim to keep you
                informed and inspired—whether you’re involved in AI or just
                trying to fuel your curiosity!
              </p>
            </motion.section>
          </section>

          {/* Sign Up Section */}
          <section className="py-8 w-full">
            <div className="w-full md:w-[150%]">
              <ShortCenteredHeader title="Sign Up" />
            </div>
            <motion.section
              className="mb-8 w-full md:w-[150%] bg-white rounded-xl p-6 shadow-lg text-[#244F7A] flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfxWiRJ1ahuUNXabSlBP4yRtNrTXPLSmYFZeG3QDYoXWz6yog/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#244F7A] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:bg-[#1a3b5c]"
              >
                Sign Up for Newer Iterations!
              </a>
            </motion.section>
          </section>

          {/* Latest Issue Section */}
          <section className="py-8 w-full">
            <div className="w-full md:w-[150%]">
              <ShortCenteredHeader title="Latest Issue" />
            </div>
            <motion.section
              className="mb-8 w-full md:w-[150%] bg-white rounded-xl p-6 shadow-lg text-[#244F7A] flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={toggleLatestIssue}
                className="bg-[#244F7A] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 hover:bg-[#1a3b5c]"
              >
                {showLatestIssue ? 'Hide' : 'Click to view!'}
              </button>
              <AnimatePresence initial={false}>
                {showLatestIssue && (
                  <motion.div
                    key="latestIssue"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full mt-4"
                  >
                    <div className="border border-blue-200 rounded-md">
                      <iframe
                        src="/pdfs/AIC_Newsletter_February.pdf"
                        width="100%"
                        height="600"
                        title="Newsletter PDF"
                      ></iframe>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          </section>
        </div>
      </div>
    </div>
  );
}
