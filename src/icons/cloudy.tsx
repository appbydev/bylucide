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
      ><motion.path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
      </MotionSvgRoot>);
}
