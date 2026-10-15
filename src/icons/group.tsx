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
      ><motion.path d="M3 7V5c0-1.1.9-2 2-2h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M17 3h2c1.1 0 2 .9 2 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M21 17v2c0 1.1-.9 2-2 2h-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M7 21H5c-1.1 0-2-.9-2-2v-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect width="7" height="5" x="7" y="7" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.rect width="7" height="5" x="10" y="12" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
