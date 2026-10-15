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
      ><motion.path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M4 12H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M10 12H8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M16 12h-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M22 12h-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
