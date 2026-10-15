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
      ><motion.path d="M10 3a41 41 0 0 0 0 18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M14 3a41 41 0 0 1 0 18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M3.84 17h16.32" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3.84 7h16.32" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
