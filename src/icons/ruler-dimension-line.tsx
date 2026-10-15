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
      ><motion.path d="M10 15v-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M14 15v-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M18 15v-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M2 8V4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M22 6H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M22 8V4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M6 15v-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.rect x="2" y="12" width="20" height="8" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
