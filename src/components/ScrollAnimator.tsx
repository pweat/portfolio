"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimatorProps {
  children: ReactNode;
}

const ScrollAnimator = ({ children }: ScrollAnimatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimator;
