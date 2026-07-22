"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showImage, setShowImage] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showReplay, setShowReplay] = useState(false);

  const startIntroduction = () => {
    setShowButton(false);

    setTimeout(() => {
      setShowImage(false);
      setShowVideo(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, 100);
    }, 500);
  };

  const replayIntroduction = () => {
    setShowReplay(false);
    setShowImage(false);
    setShowVideo(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 100);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Hero Image */}
     {/* Hero Image */}
<AnimatePresence>
  {showImage && (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0"
    >
      {/* Desktop */}
<div className="hidden md:block absolute inset-0">
  <Image
    src="/image/hero.png"
    alt="Hero Desktop"
    fill
    priority
    sizes="100vw"
    className="object-contain object-center bg-black"
  />
</div>

    </motion.div>
  )}
</AnimatePresence>
      {/* Hero Video */}
      <AnimatePresence>
        {showVideo && (
          <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            playsInline
            preload="auto"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[20%_center]
              md:object-center
            "
            onEnded={() => {
              if (videoRef.current) {
                videoRef.current.pause();
              }

              setShowVideo(false);
              setShowImage(true);
              setShowReplay(true);
            }}
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hear My Introduction */}
      {showButton && (
        <button
          onClick={startIntroduction}
          className="
            absolute
            left-4
            bottom-10
            md:left-8
            md:bottom-10
            z-30
            rounded-xl
            bg-blue-600
            px-4
            py-3
            md:px-6
            font-semibold
            text-sm
            md:text-base
            text-white
            shadow-xl
            transition
            hover:scale-105
            hover:bg-blue-700
          "
        >
          🔊 Hear My Introduction
        </button>
      )}

      {/* Replay */}
      {showReplay && (
        <button
          onClick={replayIntroduction}
          className="
            absolute
            left-4
            bottom-6
            md:left-8
            md:bottom-8
            z-30
            rounded-xl
            bg-green-600
            px-4
            py-3
            md:px-6
            font-semibold
            text-sm
            md:text-base
            text-white
            shadow-xl
            transition
            hover:scale-105
            hover:bg-green-700
          "
        >
          🔄 Replay Introduction
        </button>
      )}

      {/* Right Side Content */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute
          z-20

          w-[92%]
          max-w-md

          left-1/2
          -translate-x-1/2

          bottom-8

          md:left-auto
          md:right-20
          md:top-1/2
          md:bottom-auto
          md:translate-x-0
          md:-translate-y-1/2

          rounded-3xl
          border
          border-white/10
          bg-black/55
          backdrop-blur-xl

          p-5
          md:p-8
        "
      >
        <p className="mb-2 uppercase tracking-[3px] font-semibold text-blue-400 text-sm md:text-base">
          HELLO THERE!
        </p>

        <h1 className="mt-2 font-bold leading-tight text-white text-3xl md:text-5xl">
          <TypeAnimation
           sequence={["I'm Kamesh Dass", 1000]}
repeat={Infinity}
            wrapper="span"
            speed={50}
            cursor
            className="text-blue-500"
          />
        </h1>

        <h2 className="mt-3 text-lg md:text-2xl font-semibold text-white">
          Senior Operations Associate
        </h2>

        <div className="mt-5 space-y-2 text-sm md:text-base text-gray-300">
          <p className="font-semibold text-white">
            3+ Years of Experience in
          </p>

          <p>• Operations Management</p>
          <p>• CRM &amp; Customer Experience</p>
          <p>• Vendor Management</p>
          <p>• Stakeholder Management</p>
          <p>• SLA Management</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <button
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-700
            "
          >
            Explore Portfolio
          </button>

          <a
  href="/image/resume.pdf"
  download="Kamesh_Dass_Resume.pdf"
  className="
    rounded-xl
    border
    border-white
    px-6
    py-3
    text-center
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:bg-white
    hover:text-black
  "
>
  Download Resume
</a>
        </div>
      </motion.div>
    </section>
  );
}