import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { geistSans, geistMono } from "../utils/fonts";

export default function Newsletter() {
  // State to control the Latest Issue dropdown
  const [showLatestIssue, setShowLatestIssue] = useState(false);

  const toggleLatestIssue = () => {
    setShowLatestIssue((prev) => !prev);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] p-4 bg-white text-[#244F7A]`}
    >
      <h1 className="text-2xl font-bold mb-4 text-center text-[#244F7A]">
        Newsletter
      </h1>

      {/*About*/}
      <motion.section
        className="mb-8 w-full md:w-1/3 mx-auto bg-blue-200 bg-opacity-30 rounded-xl p-6 shadow-[0_4px_20px_rgba(36,79,122,0.5)]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-2 text-[#244F7A]">
          About
        </h2>
        <p>
          Welcome to our monthly newsletter! Each issue covers the latest industry,
          research and student developments regarding the ever expanding world of
          Artificial Intelligence. We aim to keep you informed and inspired—whether
          you’re involved in AI or just trying to fuel your curiosity!
        </p>
      </motion.section>

      {/*Sign Up*/}
      <motion.section
        className="mb-8 w-full md:w-1/3 mx-auto bg-blue-200 bg-opacity-30 rounded-xl p-6 shadow-[0_4px_20px_rgba(36,79,122,0.5)] flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfxWiRJ1ahuUNXabSlBP4yRtNrTXPLSmYFZeG3QDYoXWz6yog/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#244F7A] text-white font-bold py-3 px-6 rounded-lg shadow-[0_4px_20px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all duration-300 hover:shadow-[0_6px_25px_rgba(255,255,255,0.7)]"
        >
          Sign Up for Newer Iterations!
        </a>
      </motion.section>

      {/*Latest Issue*/}
      <motion.section
        className="mb-8 w-full md:w-1/3 mx-auto bg-blue-200 bg-opacity-30 rounded-xl p-6 shadow-[0_4px_20px_rgba(36,79,122,0.5)]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/*Dropdown*/}
        <h2
          className="text-xl font-semibold mb-2 text-[#244F7A] cursor-pointer inline-flex items-center justify-center"
          onClick={toggleLatestIssue}
        >
          Latest Issue{" "}
          <span className="ml-2">{showLatestIssue ? "▲" : "▼"}</span>
        </h2>
        <AnimatePresence initial={false}>
          {showLatestIssue && (
            <motion.div
              key="latestIssue"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
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
    </div>
  );
}
