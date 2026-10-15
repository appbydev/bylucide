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
      ><motion.path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10 5H8a2 2 0 0 0 0 4h.68" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M14 5h2a2 2 0 0 1 0 4h-.68" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M18 22H6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M9 2h6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
