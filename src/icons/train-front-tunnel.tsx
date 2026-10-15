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
      ><motion.path d="M2 22V12a10 10 0 1 1 20 0v10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M10 15h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M14 15h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m9 19-2 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m15 19 2 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
