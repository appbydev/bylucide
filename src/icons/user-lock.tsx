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
      ><motion.path d="M19 16v-2a2 2 0 0 0-4 0v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M9.5 15H7a4 4 0 0 0-4 4v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.circle cx="10" cy="7" r="4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.rect x="13" y="16" width="8" height="5" rx=".899" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
