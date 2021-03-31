import React , {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


 export default function Pop({ children }) {
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
        animate={ inView? { scale: 1 } : " " }
        initial={{ scale: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    );
  }