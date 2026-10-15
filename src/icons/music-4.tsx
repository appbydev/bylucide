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
      ><motion.path d="M9 18V5l12-2v13" initial="normal" animate={controls} {...simpleMotion('fade', 0)} />
        <motion.path d="m9 9 12-2" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.circle cx="6" cy="18" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="18" cy="16" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
