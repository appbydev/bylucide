'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        circle: {},
        line1: {
            initial: {
                rotate: 0,
                transition: { ease: 'easeInOut', duration: 0.4 },
            },
            animate: {
                rotate: 90,
                transition: { ease: 'easeInOut', duration: 0.4 },
            },
        },
        line2: {
            initial: {
                rotate: 0,
                transition: { ease: 'easeInOut', duration: 0.4, delay: 0.1 },
            },
            animate: {
                rotate: 90,
                transition: { ease: 'easeInOut', duration: 0.4, delay: 0.1 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.circle cx={12} cy={12} r={10} variants={(animations.default as Record<string, Variants>).circle} initial="initial" animate={controls}/>
      <motion.line x1={9} y1={15} x2={15} y2={9} variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1={9} y1={9} x2={15} y2={15} variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
    </motion.svg>);
}
