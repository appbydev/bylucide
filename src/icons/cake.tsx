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
      ><motion.path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2 21h20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M7 8v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M12 8v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M17 8v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M7 4h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M12 4h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M17 4h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
