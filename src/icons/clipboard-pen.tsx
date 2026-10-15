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
      ><motion.path d="M16 4h2a2 2 0 0 1 2 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.rect x="8" y="2" width="8" height="4" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
