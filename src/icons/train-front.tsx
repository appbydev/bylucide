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
      ><motion.path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m9 15-1-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m15 15 1-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m8 19-2 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m16 19 2 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
