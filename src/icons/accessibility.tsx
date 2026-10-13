'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CIRCLE_VARIANTS: Variants = {
    initial: {
        y: 0,
        x: 0,
    },
    animate: {
        y: [0, 1, -1, 0],
        x: [0, 1, -1, 0],
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};
const PRIMARY_GROUP_VARIANTS: Variants = {
    initial: {
        rotate: 0,
    },
    animate: {
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};
const SECONDARY_GROUP_VARIANTS: Variants = {
    initial: {
        rotate: 0,
    },
    animate: {
        rotate: -360,
        transition: {
            duration: 1,
            delay: 0.4,
            ease: "easeInOut",
        },
    },
};
const PATH_VARIANTS: Variants = {
    initial: {
        rotate: 0,
        d: "M8 5 L5 8",
    },
    animate: {
        rotate: [0, -60, 0],
        d: ["M8 5 L5 8", "M8 5 L4 9", "M8 5 L5 8"],
        transition: {
            duration: 0.4,
            delay: 0.2,
            ease: "easeInOut",
        },
        transformOrigin: "top right",
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.circle animate={controls} cx="16" cy="4" initial="initial" r="1" variants={CIRCLE_VARIANTS}/>
        <motion.g animate={controls} initial="initial" variants={PRIMARY_GROUP_VARIANTS}>
          <path d="m18 19 1-7-6 1"/>
          <path d="M8,5l5.5,3-2.4,3.5"/>
          <motion.path animate={controls} d="M8 5 L5 8" initial="initial" variants={PATH_VARIANTS}/>
        </motion.g>
        <motion.g animate={controls} initial="initial" variants={SECONDARY_GROUP_VARIANTS}>
          <path d="M4.2,14.5c-.8,2.6.7,5.4,3.3,6.2,1.2.4,2.4.3,3.6-.2"/>
          <path d="M13.8,17.5c.8-2.6-.7-5.4-3.3-6.2-1.2-.4-2.4-.3-3.6.2"/>
          <path d="M13,13.1c-.5-.7-1.1-1.2-1.9-1.6"/>
        </motion.g>
      </svg>);
}
