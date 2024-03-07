import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
  //   const { scrollYProgress } = useScroll();

  //   useEffect(() => {
  //     console.log(scrollYProgress);
  //   }, [scrollYProgress]);

  return (
    <header
      className={`flex flex-col bg-white lg:flex-row justify-between items-center py-4  px-5 top-0 z-[100] fixed w-full -translate-x-1/2 left-1/2 max-w-screen-4xl `}
      style={
        {
          // backdropFilter: `blur(${scrollYProgress.get() > 0 ? 20 : 0}px)`,
          // backgroundColor: `rgba(255, 255, 255, ${scrollYProgress.get() > 0 ? 0.1 : 1})`,
        }
      }>
      {children}
    </header>
  );
};

export default NavbarContainer;
1;
