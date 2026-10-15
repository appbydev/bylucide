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
      ><motion.path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M16.85 18.58a9 9 0 1 0-9.7 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M8 14a5 5 0 1 1 8 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="12" cy="11" r="1" fill="currentColor" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
