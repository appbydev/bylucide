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
      ><motion.path d="M19 11v6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M19 13h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2 21a8 8 0 0 1 12.868-6.349" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="10" cy="8" r="5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="19" cy="19" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
