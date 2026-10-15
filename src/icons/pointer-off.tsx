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
      ><motion.path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M6 6v8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
