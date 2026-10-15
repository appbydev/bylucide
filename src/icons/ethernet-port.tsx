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
      ><motion.path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M6 8v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M10 8v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M14 8v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M18 8v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
