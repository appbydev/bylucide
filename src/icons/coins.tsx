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
      ><motion.path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15 6h1v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m6.134 14.768.866-.5 2 3.464" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="16" cy="8" r="6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
