"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -250]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -45]);
  
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Subtle grid base */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Floating wireframe 1 */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-[10%] -left-[5%] h-[50vw] w-[50vw] min-h-[400px] min-w-[400px] rounded-full border-[1px] border-dashed border-textMuted/20 dark:border-textMuted-dark/20"
      />
      
      {/* Floating wireframe 2 */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[40%] -right-[10%] h-[70vw] w-[70vw] min-h-[500px] min-w-[500px] rounded-[30%] border-[1px] border-textMuted/20 dark:border-textMuted-dark/20"
      />
      
      {/* Floating wireframe 3 */}
      <motion.div
        style={{ y: y1, rotate: rotate2 }}
        className="absolute top-[70%] left-[20%] h-[30vw] w-[30vw] min-h-[200px] min-w-[200px] rounded-[10%] border-[1px] border-textMuted/15 dark:border-textMuted-dark/15"
      />
    </div>
  );
}
