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
      ><motion.path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.rect width="16" height="5" x="4" y="2" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
      </MotionSvgRoot>);
}
