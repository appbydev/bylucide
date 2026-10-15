'use client';
import { useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<MotionSvgRoot  style={{ color }} animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} transition={{ type: "spring", velocity: 0, stiffness: 100, damping: 15 }} variants={{
        normal: {
            rotate: 0,
        },
        animate: {
            rotate: 180,
        },
    }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14"/>
          <path d="M12 5v14"/>
        </MotionSvgRoot>);
}
