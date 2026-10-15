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
      ><motion.path d="M7 18v-6a5 5 0 1 1 10 0v6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21 12h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M18.5 4.5 18 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M2 12h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M12 2v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m4.929 4.929.707.707" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M12 12v6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
