import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { geistSans, geistMono } from '../utils/fonts';
import Image from 'next/image';
import React from 'react';

// Define the Event type for TypeScript
interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  rsvpLink?: string;  // Optional RSVP link for future events
}

// Sample data for past events
const pastEvents: Event[] = [
  {
    id: 1,
    title: "Data Cleaning with Pandas and Numpy Workshop",
    date: "February 11, 2025",
    description: "Join us for a hands-on Data Cleaning Workshop, where you'll learn essential techniques for handling messy datasets using Pandas and NumPy! Whether you're new to data preprocessing or looking to refine your skills, this session will help you clean, transform, and prepare data for machine learning projects.",
    imageUrl: "/images/1.png"
  },
  {
    id: 2,
    title: "AI in Computational Chemistry Workshop",
    date: "March 4, 2025",
    description: "Come learn about how AI is revolutionizing extremely important industries, and get exposure to one of the most exciting real world AI applications in todays world. Join us for a hands-on AI in Computational Chemistry workshop",
    imageUrl: "/images/aic.png"
  }
];

// Sample data for future events
const futureEvents: Event[] = [
  {
    id: 3,
    title: "AIC Omega Project Demo",
    date: "March 28, 2025",
    description: "Explore the future of AI with innovative projects by the Omega Project Team and insights from industry professionals!",
    imageUrl: "/images/Omega_Demos_1.jpg",
  }
];

// Left Section Header Component
const LeftSectionHeader = ({ title }: { title: string }) => (
  <div className="relative mb-12">
    <div className="flex items-center justify-start">
      {/* Main bar with text */}
      <div className="h-[60px] w-[62.5%] bg-[#062f7e] flex items-center px-8 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {/* Half circle on the right */}
      <div className="w-[60px] h-[60px] rounded-full bg-[#062f7e] ml-[-30px] z-10" />
    </div>
  </div>
);

// Right Section Header Component
const RightSectionHeader = ({ title }: { title: string }) => (
  <div className="relative mb-12">
    <div className="flex items-center justify-end">
      {/* Half circle on the left */}
      <div className="w-[60px] h-[60px] rounded-full bg-[#062f7e] mr-[-30px] z-10" />
      {/* Main bar with text */}
      <div className="h-[60px] w-[62.5%] bg-[#062f7e] flex items-center px-8 text-white justify-end">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  </div>
);

// Image Modal Component
const ImageModal = ({ imageUrl, title, onClose }: { imageUrl: string; title: string; onClose: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springRotate = useSpring(rotate, springConfig);

  const handleZoomIn = () => {
    scale.set(scale.get() * 1.2);
  };

  const handleZoomOut = () => {
    scale.set(scale.get() / 1.2);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
    rotate.set(0);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scale.get() > 1) {
      e.preventDefault();
      e.stopPropagation();
      x.set(x.get() - e.deltaX);
      y.set(y.get() - e.deltaY);
    }
  };

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <motion.div
          style={{
            x: springX,
            y: springY,
            scale: springScale,
            rotate: springRotate,
          }}
          className="relative w-full h-full flex items-center justify-center"
          onWheel={handleWheel}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="rounded-lg"
              style={{ 
                objectFit: 'contain',
                maxWidth: '90vw',
                maxHeight: '90vh',
                margin: 'auto'
              }}
              sizes="90vw"
              priority
            />
          </div>
        </motion.div>
        
        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <button
            onClick={handleZoomOut}
            className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <button
            onClick={handleReset}
            className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button
            onClick={handleZoomIn}
            className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

// Event Card Component
const EventCard = ({ event }: { event: Event }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Event Image */}
        <div 
          className="relative h-48 w-full cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Event Details */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#244F7A] mb-2">{event.title}</h3>
          <p className="text-sm text-blue-800 mb-2">{event.date}</p>
          <p className="text-gray-600 mb-4">{event.description}</p>
          
          {/* RSVP Button only if rsvpLink exists */}
          {event.rsvpLink && (
            <a
              href={event.rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#244F7A] text-white px-6 py-2 rounded-lg hover:bg-[#1a3b5c] transition-colors"
            >
              RSVP Now
            </a>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <ImageModal
            imageUrl={event.imageUrl}
            title={event.title}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default function Events() {
  const [showAllPastEvents, setShowAllPastEvents] = useState(false);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      {/* Hero Header */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/AItinkerers.jpeg"
            alt="Events Header"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl opacity-90">Discover our AI community events and activities</p>
        </div>
      </div>

      {/* Featured Events Section */}
      <section className="py-16">
        <LeftSectionHeader title="Featured Events" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Future Events Section */}
      <section className="py-16">
        <RightSectionHeader title="Future Events" />
        <div className="container mx-auto px-4">
          <div className={`grid ${futureEvents.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
            {futureEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
