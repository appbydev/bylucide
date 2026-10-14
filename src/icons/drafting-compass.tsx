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
      ><motion.path d="m12.99 6.74 1.93 3.44" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M19.136 12a10 10 0 0 1-14.271 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m21 21-2.16-3.84" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m3 21 8.02-14.26" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="12" cy="5" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
