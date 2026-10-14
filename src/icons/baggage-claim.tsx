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
      ><motion.path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.rect width="13" height="8" x="8" y="6" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="18" cy="20" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="9" cy="20" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
