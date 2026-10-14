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
      ><motion.path d="M10 12h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2 20h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M20 17v-2a2 2 0 1 0-4 0v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect x="14" y="17" width="8" height="5" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
