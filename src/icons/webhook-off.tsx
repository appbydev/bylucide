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
      ><motion.path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M9 3.4a4 4 0 0 1 6.52.66" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M20.3 20.3a4 4 0 0 1-2.3.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M18.6 13a4 4 0 0 1 3.357 3.414" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m12 6 .6 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
