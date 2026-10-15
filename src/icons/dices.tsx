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
      ><motion.rect width="12" height="12" x="2" y="10" rx="2" ry="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M6 18h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M10 14h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M15 6h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M18 9h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
