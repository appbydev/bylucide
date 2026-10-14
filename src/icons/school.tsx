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
      ><motion.path d="M14 21v-3a2 2 0 0 0-4 0v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M18 5v16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M6 5v16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.circle cx="12" cy="9" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
