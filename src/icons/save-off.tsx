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
      ><motion.path d="M13 13H8a1 1 0 0 0-1 1v7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M14 8h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M17 21v-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M29.5 11.5s5 5 4 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
