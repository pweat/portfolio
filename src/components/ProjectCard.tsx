"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef, useEffect } from "react";

interface ProjectCardProps {
  children: ReactNode;
}

const ProjectCard = ({ children }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-100, 100], [15, -15]);
  const rotateY = useTransform(smoothX, [-100, 100], [-15, 15]);

  useEffect(() => {
    const cardElement = ref.current;
    if (!cardElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cardElement.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const isInside =
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom;

      if (isInside) {
        x.set(mouseX - rect.left - rect.width / 2);
        y.set(mouseY - rect.top - rect.height / 2);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="pointer-events-none relative flex h-80 w-full max-w-lg items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-8 shadow-2xl"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="text-center"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
