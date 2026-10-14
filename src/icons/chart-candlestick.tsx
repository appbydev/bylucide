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
      ><motion.path d="M9 5v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.rect width="4" height="6" x="7" y="9" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M9 15v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M17 3v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect width="4" height="8" x="15" y="5" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M17 13v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M3 3v16a2 2 0 0 0 2 2h16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </motion.svg>);
}
