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
      ><motion.path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m20 9-3 9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M7 18 4 9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.circle cx="12" cy="4" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.circle cx="20" cy="7" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.circle cx="4" cy="7" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
