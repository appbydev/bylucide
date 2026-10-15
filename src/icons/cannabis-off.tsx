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
      ><motion.path d="M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
