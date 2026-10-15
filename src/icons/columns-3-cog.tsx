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
      ><motion.path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m14.3 19.6 1-.4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M15 3v7.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m15.2 16.9-.9-.3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m16.6 21.7.3-.9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m16.8 15.3-.4-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m19.1 15.2.3-.9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="m19.6 21.7-.4-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m20.7 16.8 1-.4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="m21.7 19.4-.9-.3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M9 3v18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.circle cx="18" cy="18" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
