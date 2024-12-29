import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

/*
  * ScrollProgress
  * @param {string} className
  * @param {string} graident
  * @returns {JSX.Element}
  * @example
  * <ScrollProgress className="h-1" graident="from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]" />  
*/

export default function ScrollProgress({
  className,
  graident = "from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
}) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    (<motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r",
        className,
        graident
      )}
      style={{
        scaleX,
      }} />)
  );
}
