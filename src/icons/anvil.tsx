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
      ><motion.path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M9 12v5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M15 12v5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
