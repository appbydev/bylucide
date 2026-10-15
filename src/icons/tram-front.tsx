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
      ><motion.rect width="16" height="16" x="4" y="3" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M4 11h16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M12 3v8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m8 19-2 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m18 22-2-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M8 15h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M16 15h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </MotionSvgRoot>);
}
