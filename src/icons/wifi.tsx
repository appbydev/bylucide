'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const WIFI_LEVELS = [
    { d: "M12 20h.01", initialOpacity: 1, delay: 0 },
    { d: "M8.5 16.429a5 5 0 0 1 7 0", initialOpacity: 1, delay: 0.1 },
    { d: "M5 12.859a10 10 0 0 1 14 0", initialOpacity: 1, delay: 0.2 },
    { d: "M2 8.82a15 15 0 0 1 20 0", initialOpacity: 1, delay: 0.3 },
];
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          {WIFI_LEVELS.map((level, index) => (<motion.path animate={controls} d={level.d} initial={{ opacity: level.initialOpacity }} key={index} variants={{
            fadeOut: {
                opacity: index === 0 ? 1 : 0,
                transition: { duration: 0.2 },
            },
            fadeIn: {
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: level.delay,
                },
            },
        }}/>))}
        </svg>);
}
