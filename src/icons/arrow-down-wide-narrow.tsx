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
      ><motion.path d="m3 16 4 4 4-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M7 20V4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M11 4h10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M11 8h7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M11 12h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
