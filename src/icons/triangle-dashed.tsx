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
      ><motion.path d="M10.17 4.193a2 2 0 0 1 3.666.013" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M14 21h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m15.874 7.743 1 1.732" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m18.849 12.952 1 1.732" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M4.024 21a2 2 0 0 1-1.839-2.839" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m5.136 12.952-1 1.732" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M8 21h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m8.102 7.743-1 1.732" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
