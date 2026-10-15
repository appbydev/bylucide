'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        group1: {
            initial: {
                rotate: 0,
                scale: 1,
            },
            animate: {
                rotate: [0, -5, 7, 0],
                scale: [1, 0.9, 1.1, 1],
                transition: {
                    duration: 1.2,
                    ease: 'easeInOut',
                },
            },
        },
        group2: {
            initial: {
                rotate: 0,
            },
            animate: {
                rotate: [0, -4, 15, 0],
                transformOrigin: 'bottom left',
                transition: {
                    duration: 1.2,
                    ease: 'easeInOut',
                },
            },
        },
        path1: {},
        path2: {},
        path3: {},
        path4: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial="initial" animate={controls} >
      <motion.g variants={(animations.default as Record<string, Variants>).group1} initial="initial" animate={controls}>
        <motion.g variants={(animations.default as Record<string, Variants>).group2} initial="initial" animate={controls}>
          <motion.path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
          <motion.path d="m6.2 5.3 3.1 3.9" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
          <motion.path d="m12.4 3.4 3.1 4" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
        </motion.g>
        <motion.path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
      </motion.g>
    </MotionSvgRoot>);
}
