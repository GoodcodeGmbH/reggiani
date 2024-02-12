import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

const ScrollText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const tranformedY = useTransform(scrollYProgress, [1, 0], [0, 1]);
  return (
    <div
      ref={ref}
      className="hidden lg:flex col-span-2 row-span-2 col-start-3 row-start-4 p-4 justify-center z-[1] bg-white items-center">
      <motion.p
        className="text-lg leading-8 text-gray-600 hidden lg:block lg:text-2xl"
        style={{
          opacity: useSpring(useTransform(tranformedY, [0, 0.4], [0, 1]), {
            stiffness: 400,
            damping: 90,
          }),
          y: useTransform(tranformedY, [0, 0.2], [200, 0]),
        }}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </motion.p>
    </div>
  );
};
export default ScrollText;
