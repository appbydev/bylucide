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
      ><motion.path d="M5.5 20H8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17 9h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.rect width="10" height="16" x="12" y="4" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="17" cy="15" r="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
