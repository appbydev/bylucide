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
      ><motion.path d="M11 20H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M11 4H8a2 2 0 0 0-2 2v14" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M14 12h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M22 20h-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
