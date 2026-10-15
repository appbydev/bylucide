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
      ><motion.path d="M21 5H11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M21 12H11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21 19H11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m3 8 4 4-4 4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
