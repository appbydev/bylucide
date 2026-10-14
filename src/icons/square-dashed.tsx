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
      ><motion.path d="M5 3a2 2 0 0 0-2 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M19 3a2 2 0 0 1 2 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21 19a2 2 0 0 1-2 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M5 21a2 2 0 0 1-2-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M9 3h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M9 21h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M14 3h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M14 21h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M3 9v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M21 9v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M3 14v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M21 14v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
