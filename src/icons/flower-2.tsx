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
      ><motion.path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="12" cy="8" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M12 10v12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
