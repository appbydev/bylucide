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
      ><motion.circle cx="10" cy="7" r="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="4" cy="20" r="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M4.7 19.3 19 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m21 3-3 1 2 2Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M9.26 7.68 5 12l2 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m10 14 5 2 3.5-3.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m18 12 1-1 1 1-1 1Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
