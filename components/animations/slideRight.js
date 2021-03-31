import React , {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


 export default function SlideLeftWhenVisible({ children }) {
    const controls = useAnimation( );
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={ inView? {x: [-500, -50, -20, -10 , 0] } : " " }
        initial={{x: -800}}
        // transition={{
        //     delay:"0.5"
        // }}
        
      >
        {children}
      </motion.div>
    );
  }