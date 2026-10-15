'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CIRCLES = [
    { cx: 19, cy: 5 },
    { cx: 19, cy: 12 },
    { cx: 12, cy: 5 },
    { cx: 19, cy: 19 },
    { cx: 12, cy: 12 },
    { cx: 5, cy: 5 },
    { cx: 12, cy: 19 },
    { cx: 5, cy: 12 },
    { cx: 5, cy: 19 },
];
const VARIANTS: Variants = {
    normal: {
        opacity: 1,
        transition: { duration: 0.25 },
    },
    animate: (index: number) => ({
        opacity: [1, 0.3, 0.3, 1],
        transition: {
            delay: index * 0.07,
            duration: 1.1,
            times: [0, 0.2, 0.8, 1],
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          {CIRCLES.map((circle, index) => (<motion.circle animate={controls} custom={index} cx={circle.cx} cy={circle.cy} initial="normal" key={`${circle.cx}-${circle.cy}`} r="1" variants={VARIANTS}/>))}
        </SvgRoot>);
}
