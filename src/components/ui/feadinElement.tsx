"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FadeUpElement({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: .5,
            ease: "easeOut",
          },
        },
        hidden: {
          opacity: 0,
          y: 100,
          transition: {
            duration: .5,
            ease: "easeOut",
          },
        },
      }}
      initial={false}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}