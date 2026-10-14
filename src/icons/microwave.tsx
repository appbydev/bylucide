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
      ><motion.rect width="20" height="15" x="2" y="4" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.rect width="8" height="7" x="6" y="8" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M18 8v7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M6 19v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M18 19v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
