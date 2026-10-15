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
      ><motion.circle cx="12" cy="12" r="10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.line x1="22" x2="18" y1="12" y2="12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="6" x2="2" y1="12" y2="12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="12" x2="12" y1="6" y2="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.line x1="12" x2="12" y1="22" y2="18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
