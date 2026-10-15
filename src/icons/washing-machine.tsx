'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.g animate={controls} variants={{
        normal: {
            x: 0,
        },
        animate: {
            x: [0, 0.5, -0.5, 0.3, -0.3, 0],
            transition: {
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }}>
          <path d="M3 6h3"/>
          <path d="M17 6h.01"/>
          <rect height="20" rx="2" width="18" x="3" y="2"/>
        </motion.g>
        <motion.g animate={controls} variants={{
        normal: {
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "linear",
            },
        },
        animate: {
            rotate: 360,
            y: [0, -0.3, 0, 0.3, 0],
            transition: {
                rotate: {
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                },
                y: {
                    duration: 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                },
            },
        },
    }}>
          <circle cx="12" cy="13" r="5"/>
          <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"/>
        </motion.g>
      </SvgRoot>);
}
