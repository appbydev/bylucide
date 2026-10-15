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
      ><motion.path d="M10 12h4" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M10 8h4" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M14 21v-3a2 2 0 0 0-4 0v3" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
      </MotionSvgRoot>);
}
