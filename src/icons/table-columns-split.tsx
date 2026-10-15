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
      ><motion.path d="M14 14v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M14 20v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M14 8v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M2 15h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M2 9h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M22 15h-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M22 9h-4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M5 3v18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
