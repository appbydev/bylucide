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
      ><motion.path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M4 6h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M12 18h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.circle cx="12" cy="12" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="m13.41 10.59 5.66-5.66" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
