'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: { d: "m12 19-7-7 7-7", translateX: 0 },
    animate: {
        d: "m12 19-7-7 7-7",
        translateX: [0, 3, 0],
        transition: {
            duration: 0.4,
        },
    },
};
const SECOND_PATH_VARIANTS: Variants = {
    normal: { d: "M19 12H5" },
    animate: {
        d: ["M19 12H5", "M19 12H10", "M19 12H5"],
        transition: {
            duration: 0.4,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="m12 19-7-7 7-7" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M19 12H5" variants={SECOND_PATH_VARIANTS}/>
        </SvgRoot>);
}
