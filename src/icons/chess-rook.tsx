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
      ><motion.path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m17 18-1-9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M6 4h12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m7 18 1-9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
