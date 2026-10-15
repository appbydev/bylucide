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
      ><motion.path d="M12 18v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m17 18 1.956-11.468" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M4 18h16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M7 18 5.044 6.532" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.circle cx="12" cy="10" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
