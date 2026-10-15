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
      ><motion.path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M8 10h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M8 18h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
