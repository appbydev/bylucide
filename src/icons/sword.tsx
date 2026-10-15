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
      ><motion.path d="m11 19-6-6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m5 21-2-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m8 16-4 4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M9.5 17.5 21 6V3h-3L6.5 14.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
