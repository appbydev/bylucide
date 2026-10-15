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
      ><motion.path d="M14 3v11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M14 9h-3a3 3 0 0 1 0-6h9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M18 3v11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M22 18H2l4-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m6 22-4-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
