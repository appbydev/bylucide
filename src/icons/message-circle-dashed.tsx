'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: (i: number) => ({
        opacity: [0, 1],
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        {[
        "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",
        "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",
        "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",
        "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",
        "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",
        "M3.5 17.5 2 22l4.5-1.5",
        "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",
        "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",
    ].map((d, index) => (<motion.path animate={controls} custom={index + 1} d={d} key={d} variants={PATH_VARIANTS}/>))}
      </SvgRoot>);
}
