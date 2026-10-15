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
      ><motion.path d="M10 21v-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10 4V3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M10 9a3 3 0 0 0 0 6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m14 20 1.25-2.5L18 18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m14 4 1.25 2.5L18 6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m17 21-3-6 1.5-3H22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m17 3-3 6 1.5 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M2 12h1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m20 10-1.5 2 1.5 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m3.64 18.36.7-.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m4.34 6.34-.7-.7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
