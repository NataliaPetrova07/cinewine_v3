import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedSection2 = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.8,
    ease: "easeInOut",
    delay: 0.5,
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div initial="hidden" animate={mainControls} variants={variants} transition={transition}>
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection2;
