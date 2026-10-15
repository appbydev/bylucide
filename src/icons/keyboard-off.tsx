'use client';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { motion, useAnimation } from 'motion/react';
import { useControlsDriver } from '../icon-runtime';
import { simpleMotion } from '../simple-motion';

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
  const controls = useAnimation();
  useControlsDriver(register, controls);
  return (<MotionSvgRoot style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><motion.path d="M 20 4 A2 2 0 0 1 22 6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M 22 6 L 22 16.41" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M 7 16 L 16 16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M 9.69 4 L 20 4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M14 8h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M18 8h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M6 8h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M8 12h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
