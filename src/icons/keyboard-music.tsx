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
      ><motion.rect width="20" height="16" x="2" y="4" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M6 8h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 8h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M18 8h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M2 12h20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M6 12v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M10 12v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M14 12v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M18 12v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
