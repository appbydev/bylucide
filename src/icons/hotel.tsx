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
      ><motion.path d="M10 22v-6.57" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 11h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M12 7h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M14 15.43V22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M15 16a5 5 0 0 0-6 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M16 11h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M16 7h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M8 11h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M8 7h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.rect x="4" y="2" width="16" height="20" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
