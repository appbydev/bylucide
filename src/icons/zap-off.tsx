'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 0.6,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        transition: {
            duration: 0.6,
            opacity: { duration: 0.1 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const PATHS = [
    "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",
    "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",
    "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",
    "m2 2 20 20",
];
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          {PATHS.map((d, i) => (<motion.path animate={controls} custom={i * 0.15} d={d} key={i} variants={PATH_VARIANTS}/>))}
        </SvgRoot>);
}
