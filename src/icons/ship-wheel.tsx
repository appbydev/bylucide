'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SHIP_WHEEL_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        transition: { type: "spring", velocity: 0, stiffness: 50, damping: 10 },
    },
    animate: {
        rotate: 180,
        transition: { type: "spring", velocity: 0, stiffness: 50, damping: 10 },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg  style={{ color }} animate={controls} fill="none" height={size} initial="normal" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={SHIP_WHEEL_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8"/>
          <path d="M12 2v7.5"/>
          <path d="m19 5-5.23 5.23"/>
          <path d="M22 12h-7.5"/>
          <path d="m19 19-5.23-5.23"/>
          <path d="M12 14.5V22"/>
          <path d="M10.23 13.77 5 19"/>
          <path d="M9.5 12H2"/>
          <path d="M10.23 10.23 5 5"/>
          <circle cx="12" cy="12" r="2.5"/>
        </motion.svg>);
}
