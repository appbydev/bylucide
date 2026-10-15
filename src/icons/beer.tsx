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
      ><motion.path d="M17 11h1a3 3 0 0 1 0 6h-1" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M9 12v6" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M13 12v6" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
      </MotionSvgRoot>);
}
