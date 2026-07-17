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

    setShowImage(false);
    setShowVideo(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 200);
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
    }, 200);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >

      {/* Hero Image */}

      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src="/image/hero.png"
              alt="Hero"
              fill
              priority
              className="
                object-contain
                md:object-cover
              "
            />
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
              object-contain
              md:object-cover
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

            <source
              src="/videos/intro.mp4"
              type="video/mp4"
            />

          </motion.video>
        )}
      </AnimatePresence>


      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/40 z-10"></div>



      {/* Introduction Button */}

      {showButton && (
        <button
          onClick={startIntroduction}
          className="
          absolute
          left-4
          bottom-4
          z-30
          rounded-xl
          bg-blue-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow-xl
          transition
          hover:scale-105
          hover:bg-blue-700

          md:left-8
          md:bottom-8
          md:px-6
          md:text-base
          "
        >
          🔊 Hear My Introduction
        </button>
      )}



      {/* Replay Button */}

      {showReplay && (
        <button
          onClick={replayIntroduction}
          className="
          absolute
          left-4
          bottom-4
          z-30
          rounded-xl
          bg-green-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow-xl
          transition
          hover:scale-105
          hover:bg-green-700

          md:left-8
          md:bottom-8
          md:px-6
          md:text-base
          "
        >
          🔄 Replay Introduction
        </button>
      )}




      {/* Content Card */}

      <motion.div

        initial={{ opacity:0, x:120 }}

        animate={{ opacity:1, x:0 }}

        transition={{ duration:1 }}

        className="
        absolute
        right-4
        top-1/2
        z-20
        w-[92%]
        -translate-y-1/2
        rounded-3xl
        border
        border-white/10
        bg-black/50
        p-5
        backdrop-blur-xl

        sm:w-[80%]

        md:right-10
        md:w-[500px]
        md:p-8

        lg:right-20
        "

      >


        <p className="
        mb-2
        uppercase
        tracking-[3px]
        font-semibold
        text-blue-400
        text-sm
        md:text-base
        ">
          HELLO THERE!
        </p>



        <h1 className="
        mt-2
        text-3xl
        md:text-5xl
        font-bold
        leading-tight
        text-white
        ">

          <TypeAnimation

            sequence={[
              "I'm Kamesh Dass",
              999999
            ]}

            wrapper="span"

            speed={50}

            cursor

            className="text-blue-500"

          />

        </h1>



        <h2 className="
        mt-3
        text-xl
        md:text-2xl
        font-semibold
        text-white
        ">

          Senior Operations Associate

        </h2>




        <div className="
        mt-5
        space-y-2
        text-sm
        md:text-base
        text-gray-300
        ">

          <p className="font-semibold text-white">

            3+ Years of Experience in

          </p>


          <p>• Operations Management</p>

          <p>• CRM & Customer Experience</p>

          <p>• Vendor Management</p>

          <p>• Stakeholder Management</p>

          <p>• SLA Management</p>


        </div>




        <div className="
        mt-6
        flex
        flex-col
        gap-3

        sm:flex-row
        sm:gap-4
        ">


          <button

          onClick={() =>
            document
            .getElementById("skills")
            ?.scrollIntoView({
              behavior:"smooth"
            })
          }

          className="
          rounded-xl
          bg-blue-600
          px-6
          py-3
          text-white
          transition-all
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
          hover:bg-white
          hover:text-black
          hover:scale-105
          "

          >

            Download Resume

          </a>


        </div>


      </motion.div>


    </section>
  );
}
                

