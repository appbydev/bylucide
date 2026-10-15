'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        rotate: 0,
    },
    animate: {
        rotate: [0, -5, 5, -5, 5, 0],
        transition: {
            duration: 0.4,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" style={{ transformOrigin: "center" }} variants={PATH_VARIANTS}/>
        </SvgRoot>);
}
