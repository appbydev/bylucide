'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CLOUD_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
    },
    animate: {
        x: [-1, 1, -1, 1, 0],
        y: [-1, 1, -1, 1, 0],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};
const SUN_VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: (i: number) => ({
        opacity: [0, 1],
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const cloudControls = useAnimation();
const sunControls = useAnimation();
 
 useControlsDriver(register, cloudControls, sunControls);
 return (<svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.g animate={cloudControls} initial="normal" variants={CLOUD_VARIANTS}>
            <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
          </motion.g>
          {[
        "M12 2v2",
        "m4.93 4.93 1.41 1.41",
        "M20 12h2",
        "m19.07 4.93-1.41 1.41",
        "M15.947 12.65a4 4 0 0 0-5.925-4.128",
    ].map((d, index) => (<motion.path animate={sunControls} custom={index + 1} d={d} initial="normal" key={d} variants={SUN_VARIANTS}/>))}
        </svg>);
}
