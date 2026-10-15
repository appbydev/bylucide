'use client';
import { useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<MotionSvgRoot  style={{ color }} animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} transition={{
        duration: 0.9,
        bounce: 0.5,
    }} variants={{
        normal: { y: 0, rotate: 0 },
        animate: {
            y: [0, -3, 0, -2, 0],
            rotate: [0, 3, -3, 0],
        },
    }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/>
          <circle cx="16.5" cy="7.5" fill="currentColor" r=".5"/>
        </MotionSvgRoot>);
}
