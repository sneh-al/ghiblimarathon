"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import Film from "./Film";
import { film } from "@/types";

export const HoverEffect = ({
  children,
  href,
  key,
  idx,
}: {
  children: ReactNode;
  href: string;
  key: string;
  idx: number;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Link
      href={href}
      key={key}
      className="group relative block h-full w-full p-2"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 block h-full w-full overflow-hidden rounded-3xl bg-secondary-foreground"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </Link>
  );
};
