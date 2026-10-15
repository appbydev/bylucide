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
      ><motion.path d="M12 13V7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m9 10 3-3 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m9 5 3-3 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
