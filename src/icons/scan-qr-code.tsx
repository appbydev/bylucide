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
      ><motion.path d="M17 12v4a1 1 0 0 1-1 1h-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17 3h2a2 2 0 0 1 2 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M17 8V7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M21 17v2a2 2 0 0 1-2 2h-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3 7V5a2 2 0 0 1 2-2h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M7 17h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M7 21H5a2 2 0 0 1-2-2v-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.rect x="7" y="7" width="5" height="5" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
