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
      ><motion.path d="M12 22V12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m16.5 14.5 5 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m16.5 19.5 5-5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3.29 7 12 12l8.71-5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m7.5 4.27 8.997 5.148" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
