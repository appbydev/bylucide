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
      ><motion.path d="M12 2v20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
