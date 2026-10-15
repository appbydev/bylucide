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
      ><motion.path d="m15 11-1 9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m19 11-4-7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2 11h20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4.5 15.5h15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m5 11 4-7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m9 11 1 9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
