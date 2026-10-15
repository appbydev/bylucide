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
      ><motion.rect width="18" height="18" x="3" y="3" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="7.5" cy="7.5" r=".5" fill="currentColor" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m7.9 7.9 2.7 2.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="16.5" cy="7.5" r=".5" fill="currentColor" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m13.4 10.6 2.7-2.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.circle cx="7.5" cy="16.5" r=".5" fill="currentColor" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m7.9 16.1 2.7-2.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.circle cx="16.5" cy="16.5" r=".5" fill="currentColor" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m13.4 13.4 2.7 2.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.circle cx="12" cy="12" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
