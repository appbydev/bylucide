'use client';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { motion, useAnimation } from 'motion/react';
import { useControlsDriver } from '../icon-runtime';
import { simpleMotion } from '../simple-motion';

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
  const controls = useAnimation();
  useControlsDriver(register, controls);
  return (<MotionSvgRoot style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><motion.path d="M17 10h-1a4 4 0 1 1 4-4v.534" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M9.77 12C4 15 2 22 2 22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="17" cy="8" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
