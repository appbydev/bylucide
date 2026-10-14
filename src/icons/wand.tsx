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
      ><motion.path d="M15 4V2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15 16v-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M8 9h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M20 9h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M17.8 11.8 19 13" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M15 9h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M17.8 6.2 19 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="m3 21 9-9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M12.2 6.2 11 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
