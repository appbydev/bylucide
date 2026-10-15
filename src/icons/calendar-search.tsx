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
      ><motion.path d="M16 2v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
        <motion.path d="m22 22-1.875-1.875" initial="normal" animate={controls} {...simpleMotion('fill', 2)} />
        <motion.path d="M3 10h18" initial="normal" animate={controls} {...simpleMotion('fill', 3)} />
        <motion.path d="M8 2v4" initial="normal" animate={controls} {...simpleMotion('fill', 4)} />
        <motion.circle cx="18" cy="18" r="3" initial="normal" animate={controls} {...simpleMotion('fill', 5)} />
      </MotionSvgRoot>);
}
