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
      ><motion.path d="M12 7v14" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M16 12h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16 8h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M6 12h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M6 8h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
