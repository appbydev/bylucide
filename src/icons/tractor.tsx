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
      ><motion.path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M16 18h-5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M18 5a1 1 0 0 0-1 1v5.573" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4 11V4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M7 15h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M8 10.1V4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.circle cx="18" cy="18" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.circle cx="7" cy="15" r="5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
