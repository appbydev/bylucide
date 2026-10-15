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
      ><motion.path d="M14 19V7a2 2 0 0 0-2-2H9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15 19H9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M2 13v5a1 1 0 0 0 1 1h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.circle cx="17" cy="19" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.circle cx="7" cy="19" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
