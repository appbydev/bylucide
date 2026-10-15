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
      ><motion.path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M18 6h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m5 10-2 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m7 18 2-8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
