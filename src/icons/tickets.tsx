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
      ><motion.path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M6 10V8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M6 14v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M6 19v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect x="2" y="8" width="20" height="13" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
