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
      ><motion.path d="M11 2h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m14.28 14-4.56 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m21 22-1.558-4H4.558" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M3 10v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M7 2a4 4 0 0 1-4 4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m8.66 7.66 1.41 1.41" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
