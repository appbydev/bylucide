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
      ><motion.circle cx="12" cy="12" r="10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m14.31 8 5.74 9.94" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M9.69 8h11.48" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m7.38 12 5.74-9.94" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M9.69 16 3.95 6.06" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M14.31 16H2.83" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m16.62 12-5.74 9.94" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </motion.svg>);
}
