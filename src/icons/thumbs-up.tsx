'use client';
import { useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<MotionSvgRoot  style={{ color }} animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} transition={{ type: "spring", velocity: 0, stiffness: 250, damping: 25 }} variants={{
        normal: {
            translateX: "0px",
            translateY: "0px",
            rotate: "0deg",
        },
        animate: {
            translateX: "-1px",
            translateY: "-2px",
            rotate: "-12deg",
        },
    }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10v12"/>
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
        </MotionSvgRoot>);
}
