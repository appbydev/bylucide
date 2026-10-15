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
      ><motion.path d="M13 22H4a2 2 0 0 1 0-4h12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13.236 18a3 3 0 0 0-2.2-5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16 9h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
