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
      ><motion.path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 12a12.6 12.6 0 0 1-8.7 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.circle cx="12" cy="12" r="10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
