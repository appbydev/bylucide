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
      ><motion.path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect width="20" height="4" x="2" y="11" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
