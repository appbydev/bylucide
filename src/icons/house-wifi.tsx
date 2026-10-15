'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: (() => {
        const animation: Record<string, Variants> = {
            path4: {},
        };
        for (let i = 1; i <= 3; i++) {
            animation[`path${i}`] = {
                initial: { opacity: 1, scale: 1 },
                animate: {
                    opacity: 0,
                    scale: 0,
                    transition: {
                        opacity: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.2,
                            delay: 0.2 * (i - 1),
                        },
                        scale: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.2,
                            delay: 0.2 * (i - 1),
                        },
                    },
                },
            };
        }
        return animation;
    })() satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M12 17h.01" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M9.5 13.866a4 4 0 0 1 5 .01" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M7 10.754a8 8 0 0 1 10 0" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
    </motion.svg>);
}
