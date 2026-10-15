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
      ><motion.circle cx="12" cy="12" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 2v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m6.8 15-3.5 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m20.7 7-3.5 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M6.8 9 3.3 7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m20.7 17-3.5-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m9 22 3-8 3 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M8 22h8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M18 18.7a9 9 0 1 0-12 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
