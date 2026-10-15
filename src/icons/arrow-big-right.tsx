'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: { d: "M6 9h6V5l7 7-7 7v-4H6V9z", translateX: 0 },
    animate: {
        d: "M6 9h6V5l7 7-7 7v-4H6V9z",
        translateX: [0, 3, 0],
        transition: {
            duration: 0.4,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M6 9h6V5l7 7-7 7v-4H6V9z" variants={PATH_VARIANTS}/>
      </SvgRoot>);
}
