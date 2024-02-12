import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [1, 0], [-distance, distance]);
}
function ScrollImage({
  className,
  distance = 40,

  children,
}: {
  // children: React.ReactNode;
  className?: string;
  distance?: number;

  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, distance);

  return (
    <motion.div className={className + " overflow-hidden "} ref={ref}>
      <motion.div
        // src={image.src}
        className="-my-10  flex "
        style={{
          y,
        }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ScrollImage;
