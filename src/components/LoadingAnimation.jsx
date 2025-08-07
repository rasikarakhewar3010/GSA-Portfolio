"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingAnimation({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2000); // Shorter duration for better UX

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-[200px] font-bold absolute"
            style={{ color: "#4FABFF" }}
            layoutId="animated-R"
            initial={{ scale: 10, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              damping: 20,
              stiffness: 100,
              duration: 1.5
            }}
          >
            R
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}