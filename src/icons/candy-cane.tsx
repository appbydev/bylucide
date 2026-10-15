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
      ><motion.path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17.75 7 15 2.1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M10.9 4.8 13 9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m7.9 9.7 2 4.4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4.9 14.7 7 18.9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
