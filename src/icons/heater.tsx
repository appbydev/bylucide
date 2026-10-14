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
      ><motion.path d="M11 8c2-3-2-3 0-6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15.5 8c2-3-2-3 0-6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M6 10h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M6 14h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M10 16v-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M14 16v-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M18 16v-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M5 20v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M19 20v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
