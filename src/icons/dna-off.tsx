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
      ><motion.path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m17 6-2.891-2.891" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2 15c3.333-3 6.667-3 10-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m20 9 .891.891" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M3.109 14.109 4 15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="m6.5 12.5 1 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m7 18 2.891 2.891" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
