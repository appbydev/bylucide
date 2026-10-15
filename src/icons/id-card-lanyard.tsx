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
      ><motion.path d="M13.5 8h-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16.899 22A5 5 0 0 0 7.1 22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m9 2 3 6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="12" cy="15" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
