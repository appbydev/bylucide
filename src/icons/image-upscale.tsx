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
      ><motion.path d="M16 3h5v5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17 21h2a2 2 0 0 0 2-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21 12v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m21 3-5 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3 7V5a2 2 0 0 1 2-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M9 3h3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.rect x="3" y="11" width="10" height="10" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
