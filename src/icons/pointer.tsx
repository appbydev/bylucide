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
      ><motion.path d="M22 14a8 8 0 0 1-8 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
