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
      ><motion.path d="M11 10v4h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16 2v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M21 22v-4h-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M3 10h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M8 2v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
