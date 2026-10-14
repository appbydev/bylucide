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
      ><motion.path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.circle cx="12" cy="12" r="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
