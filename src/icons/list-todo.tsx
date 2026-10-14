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
      ><motion.path d="M13 5h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13 12h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M13 19h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m3 17 2 2 4-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect x="3" y="4" width="6" height="6" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
