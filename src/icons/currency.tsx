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
      ><motion.circle cx="12" cy="12" r="8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.line x1="3" x2="6" y1="3" y2="6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="21" x2="18" y1="3" y2="6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="3" x2="6" y1="21" y2="18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.line x1="21" x2="18" y1="21" y2="18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
