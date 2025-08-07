"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect } from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import Lenis from '@studio-freight/lenis';

export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    // The main container for your Hero section.
    // - `relative`: Establishes a positioning context for its direct children, though the blobs are `fixed`.
    // - `min-h-[...]`: Sets the minimum height, allowing scroll for the effect.
    // - `bg-black/50`: IMPORTANT! This semi-transparent background allows the fixed animated blobs to show through.
    //   Adjust the opacity (e.g., `/30`, `/70`, `transparent`) to your preference.
    // - `z-10`: Ensures this content is above the fixed background.
    <div
      ref={ref}
      className="relative z-10 w-full min-h-[200vh] sm:min-h-[300vh] md:min-h-[400vh] 
                 bg-black/50 dark:border dark:border-white/[0.1] overflow-clip 
                 pt-20 sm:pt-28 md:pt-40"
    >
      {/* 
        Animated Background Blobs:
        These divs create the moving gradient effect.
        - `fixed inset-0`: Positions them to cover the ENTIRE browser viewport and stay fixed on scroll.
        - `z-[-1]`: Places them on a layer *behind* all other content on the page.
        - `pointer-events-none`: Crucial for allowing clicks/interactions to pass through to your actual content.
        - `filter blur-[150px]`: Applies a strong blur for the soft glow.
        - `opacity-20`: Sets initial transparency.
        - `bg-[radial-gradient(...)]`: Defines the radial gradient.
        - `from-bg-blob-color`: Uses the custom colors defined in `tailwind.config.js`.
        - `w-[...] h-[...]`: Responsive sizing using `vw` (viewport width) units.
        - `top/bottom/left/right`: Positioning relative to the viewport.
        - `animate-blob-move-*` and `animate-blob-pulse`: Applies the actual animations defined in `tailwind.config.js`.
          `[animation-direction:reverse]` makes some blobs move in the opposite direction for variety.
      */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
        <div className="absolute rounded-full filter blur-[150px] opacity-20
                        bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)]
                        from-bg-blob-purple-dark
                        w-[50vw] h-[50vw] top-[-10vh] left-[-10vw]
                        animate-blob-move-1 animate-blob-pulse"></div>

        <div className="absolute rounded-full filter blur-[150px] opacity-20
                        bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)]
                        from-bg-blob-blue-light
                        w-[70vw] h-[70vw] bottom-[-15vh] right-[-15vw]
                        animate-blob-move-2 animate-blob-pulse"></div>

        <div className="absolute rounded-full filter blur-[150px] opacity-20
                        bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)]
                        from-bg-blob-purple-medium
                        w-[60vw] h-[60vw] top-[30vh] left-[20vw]
                        animate-blob-move-3 animate-blob-pulse"></div>

        <div className="absolute rounded-full filter blur-[150px] opacity-20
                        bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)]
                        from-bg-blob-pink
                        w-[55vw] h-[55vw] bottom-[10vh] left-[-20vw]
                        animate-blob-move-1 [animation-direction:reverse] animate-blob-pulse"></div>

        <div className="absolute rounded-full filter blur-[150px] opacity-20
                        bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)]
                        from-bg-blob-cyan
                        w-[65vw] h-[65vw] top-[15vh] right-[-25vw]
                        animate-blob-move-2 [animation-direction:reverse] animate-blob-pulse"></div>
      </div>

      {/* Your original GoogleGeminiEffect component (text and SVG paths) */}
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}