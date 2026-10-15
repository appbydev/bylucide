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
      ><motion.path d="M22 17h-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M22 7h-5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M5 17H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M7 7H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect x="5" y="14" width="14" height="6" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.rect x="7" y="4" width="10" height="6" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
