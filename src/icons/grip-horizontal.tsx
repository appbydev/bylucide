'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CIRCLES = [
    { cx: 5, cy: 9 },
    { cx: 12, cy: 9 },
    { cx: 19, cy: 9 },
    { cx: 5, cy: 15 },
    { cx: 12, cy: 15 },
    { cx: 19, cy: 15 },
];
const VARIANTS: Variants = {
    normal: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.25, ease: "easeOut" },
    },
    animate: (index: number) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const delay = col * 0.15 + row * 0.25;
        return {
            opacity: [1, 0.4, 1],
            scale: [1, 0.85, 1],
            transition: {
                delay,
                duration: 1,
                ease: "easeInOut",
            },
        };
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        {CIRCLES.map((circle, index) => (<motion.circle animate={controls} custom={index} cx={circle.cx} cy={circle.cy} initial="normal" key={`${circle.cx}-${circle.cy}`} r="1" variants={VARIANTS}/>))}
      </SvgRoot>);
}
