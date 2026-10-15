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
      ><motion.rect width="8" height="4" x="8" y="2" rx="1" ry="1" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M16 4h2a2 2 0 0 1 2 2v4" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M21 14H11" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="m15 10-4 4 4 4" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
      </MotionSvgRoot>);
}
