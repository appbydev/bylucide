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
      ><motion.path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="8" x2="8" y1="2" y2="5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="2" x2="5" y1="8" y2="8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.line x1="16" x2="16" y1="19" y2="22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.line x1="19" x2="22" y1="16" y2="16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
