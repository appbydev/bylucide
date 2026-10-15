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
      ><motion.path d="M14 15h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M14 9h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M19 15h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M19 9h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3 15h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M3 9h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M9 15h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M9 9h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.rect x="3" y="3" width="18" height="18" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
