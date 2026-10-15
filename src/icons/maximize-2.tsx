'use client';
import { motion, useAnimation, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DEFAULT_TRANSITION: Transition = {
    type: "spring",
    velocity: 0,
    stiffness: 250,
    damping: 25,
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M3 16.2V21m0 0h4.8M3 21l6-6" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "-2px", translateY: "2px" },
    }}/>
          <motion.path animate={controls} d="M21 7.8V3m0 0h-4.8M21 3l-6 6" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "2px", translateY: "-2px" },
    }}/>
        </SvgRoot>);
}
