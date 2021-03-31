import React from "react";
import {motion} from "framer-motion" ; 
import { Button, ButtonGroup } from "@chakra-ui/react"
const loaderVariants = {
    animateOne: {
        x: [-20,20],
        y: [0,-30],
        transition: {
            x: {
                yoyo: Infinity,
                duration:0.5
            },
            y: {
                yoyo: Infinity,
                duration:0.5
            },
        },
    }
}

const Loader = () => {
    return(
        <>
        <motion.div 
        variants={loaderVariants}
        animate="animationOne"
        >
        <Button colorScheme="blue">Button</Button>
        </motion.div>
        </>
    )
}