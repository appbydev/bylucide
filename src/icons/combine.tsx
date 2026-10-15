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
      ><motion.path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m7 15 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect x="14" y="14" width="7" height="7" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.rect x="3" y="3" width="7" height="7" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
