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
      ><motion.path d="M10 12.01h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M18 8v4a8 8 0 0 1-1.07 4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.circle cx="10" cy="12" r="4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.rect x="2" y="4" width="20" height="16" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
