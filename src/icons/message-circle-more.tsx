'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DOT_VARIANTS: Variants = {
    normal: {
        opacity: 1,
    },
    animate: (custom: number) => ({
        opacity: [1, 0, 0, 1, 1, 0, 0, 1],
        transition: {
            opacity: {
                times: [
                    0,
                    0.1,
                    0.1 + custom * 0.1,
                    0.1 + custom * 0.1 + 0.1,
                    0.5,
                    0.6,
                    0.6 + custom * 0.1,
                    0.6 + custom * 0.1 + 0.1,
                ],
                duration: 1.5,
            },
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
        <motion.path animate={controls} custom={0} d="M8 12h.01" variants={DOT_VARIANTS}/>
        <motion.path animate={controls} custom={1} d="M12 12h.01" variants={DOT_VARIANTS}/>
        <motion.path animate={controls} custom={2} d="M16 12h.01" variants={DOT_VARIANTS}/>
      </SvgRoot>);
}
