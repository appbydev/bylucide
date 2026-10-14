'use client';
import type { IconSvgProps } from '../icon-runtime';
import { motion, useAnimation } from 'motion/react';
import { useControlsDriver } from '../icon-runtime';
import { simpleMotion } from '../simple-motion';

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
  const controls = useAnimation();
  useControlsDriver(register, controls);
  return (<motion.svg style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><motion.path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m14 7 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M5 6v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M19 14v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M10 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M7 8H3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M21 16h-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M11 3H9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
