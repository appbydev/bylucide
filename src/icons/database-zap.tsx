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
      ><motion.ellipse cx="12" cy="5" rx="9" ry="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M3 5V19A9 3 0 0 0 15 21.84" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21 5V8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M21 12L18 17H22L19 22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3 12A9 3 0 0 0 14.59 14.87" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
