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
      ><motion.path d="M10 10h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M 22 16 L 2 16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
