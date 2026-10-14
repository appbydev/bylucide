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
      ><motion.path d="m10 20-1.25-2.5L6 18" initial="normal" animate={controls} {...simpleMotion('fade', 0)} />
        <motion.path d="M10 4 8.75 6.5 6 6" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M10.585 15H10" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M2 12h6.5L10 9" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="m4 10 1.5 2L4 14" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.path d="m7 21 3-6-1.5-3" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
        <motion.path d="m7 3 3 6h2" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
      </motion.svg>);
}
