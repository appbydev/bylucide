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
      ><motion.path d="m10 16 1.5 1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m14 8-1.5-1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m16.5 10.5 1 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m17 6-2.891-2.891" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M2 15c6.667-6 13.333 0 20-6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m20 9 .891.891" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M3.109 14.109 4 15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m6.5 12.5 1 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m7 18 2.891 2.891" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
