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
      ><motion.path d="M16 7h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m20 7 2 .5-2 .5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M10 18v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M14 17.75V21" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M7 18a6 6 0 0 0 3.84-10.61" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
