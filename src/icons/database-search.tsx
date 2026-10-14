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
      ><motion.path d="M21 11.693V5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m22 22-1.875-1.875" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
        <motion.path d="M3 12a9 3 0 0 0 8.697 2.998" initial="normal" animate={controls} {...simpleMotion('fill', 2)} />
        <motion.path d="M3 5v14a9 3 0 0 0 9.28 2.999" initial="normal" animate={controls} {...simpleMotion('fill', 3)} />
        <motion.circle cx="18" cy="18" r="3" initial="normal" animate={controls} {...simpleMotion('fill', 4)} />
        <motion.ellipse cx="12" cy="5" rx="9" ry="3" initial="normal" animate={controls} {...simpleMotion('fill', 5)} />
      </motion.svg>);
}
