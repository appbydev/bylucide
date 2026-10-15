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
      ><motion.circle cx="6" cy="19" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M15 5h-4.3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.circle cx="18" cy="5" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
