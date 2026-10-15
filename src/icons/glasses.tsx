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
      ><motion.circle cx="6" cy="15" r="4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="18" cy="15" r="4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
