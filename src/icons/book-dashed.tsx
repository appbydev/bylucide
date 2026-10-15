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
      ><motion.path d="M12 17h1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 22h1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M12 2h1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M17.5 22H19a1 1 0 0 0 1-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M20 14v3h-2.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M20 8.5V10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M4 10V8.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M4 19.5V14" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M8 22H6.5a1 1 0 0 1 0-5H8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
