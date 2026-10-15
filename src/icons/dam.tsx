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
      ><motion.path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2 10h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M2 14h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M2 18h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M2 6h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
