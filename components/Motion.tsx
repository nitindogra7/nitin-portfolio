"use client";
import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

export function useMagnetic(strength = 0.35, maxOffset = 10) {
  const ref = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    // Disable magnetic position movement on touch devices / coarse pointers
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0)
    ) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({
      x: Math.max(-maxOffset, Math.min(maxOffset, relX * strength)),
      y: Math.max(-maxOffset, Math.min(maxOffset, relY * strength)),
    });
  };

  const onMouseLeave = () => setPos({ x: 0, y: 0 });

  return { ref, pos, handlers: { onMouseMove, onMouseLeave } };
}

export function Magnetic({
  as: Comp = motion.a as any,
  strength = 0.3,
  maxOffset = 8,
  className,
  style,
  children,
  ...rest
}: any) {
  const { ref, pos, handlers } = useMagnetic(strength, maxOffset);
  return (
    <Comp
      ref={ref}
      {...handlers}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 14, mass: 0.4 }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export const blurUp: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={blurUp}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center gap-2">
      {index && (
        <span className="font-mono text-[11px] text-textPrimary dark:text-textPrimary-dark">{index}</span>
      )}
      <h3 className="text-sm font-bold tracking-tight text-textPrimary dark:text-textPrimary-dark">
        {children}
      </h3>
    </div>
  );
}
