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
      ><motion.path d="M11 5h10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M11 12h10" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M11 19h10" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M4 4h1v5" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M4 9h2" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
      </MotionSvgRoot>);
}
