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
      ><motion.path d="M10 2h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M7 14h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M17 14h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect width="18" height="8" x="3" y="10" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M5 18v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M19 18v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
