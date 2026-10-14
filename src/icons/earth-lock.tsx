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
      ><motion.path d="M7 3.34V5a3 3 0 0 0 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M12 2a10 10 0 1 0 9.54 13" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M20 6V4a2 2 0 1 0-4 0v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.rect width="8" height="5" x="14" y="6" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
