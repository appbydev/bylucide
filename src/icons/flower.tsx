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
      ><motion.circle cx="12" cy="12" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M12 7.5V9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M7.5 12H9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M16.5 12H15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M12 16.5V15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m8 8 1.88 1.88" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M14.12 9.88 16 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m8 16 1.88-1.88" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M14.12 14.12 16 16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
