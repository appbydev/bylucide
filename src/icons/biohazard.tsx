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
      ><motion.circle cx="12" cy="11.9" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m8.9 10.1 1.4.8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m15.1 10.1-1.4.8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M12 13.9v1.6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M13.5 5.4c-1-.2-2-.2-3 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
