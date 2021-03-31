import React , {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


//  export default function SlideLeftWhenVisible({ children }) {
//     const controls = useAnimation( );
//     const [ref, inView] = useInView({triggerOnce:true});
  
//     useEffect(() => {
//       if (inView) {
//         controls.start("visible");
//       }
//     }, [controls, inView]);
  
//     return (
//       <motion.div
//         ref={ref}
//         // animate={ inView? {x: [+500, +50, +20, +10 , 0] } : {x: 0 } }
//         // initial={{x: +600}}

//         animate={ inView? { scale: 1 } : " " }
//         initial={{ scale: 0 }}
//         transition={{ duration: 0.25 }}
        

        
//       >
//         {children}
//       </motion.div>
//     );
//   }
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
      initial={{ scale: 0.75 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}