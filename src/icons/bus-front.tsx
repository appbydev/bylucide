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
      ><motion.path d="M4 6 2 7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10 6h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m22 7-2-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.rect width="16" height="16" x="4" y="3" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4 11h16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M8 15h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M16 15h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M6 19v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M18 21v-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
