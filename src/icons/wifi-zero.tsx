'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        path1: {
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
                    },
                    scale: {
                        duration: 0.2,
                        ease: 'easeInOut',
                        repeat: 1,
                        repeatType: 'reverse',
                        repeatDelay: 0.2,
                    },
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M12 20h.01" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
    </motion.svg>);
}
