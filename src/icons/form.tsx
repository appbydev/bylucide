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
      ><motion.path d="M4 14h6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M4 2h10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.rect x="4" y="18" width="16" height="4" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.rect x="4" y="6" width="16" height="4" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
