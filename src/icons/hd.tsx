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
      ><motion.path d="M10 12H6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10 15V9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M6 15V9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect x="2" y="5" width="20" height="14" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
