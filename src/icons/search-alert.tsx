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
      ><motion.circle cx="11" cy="11" r="8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m21 21-4.3-4.3" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
        <motion.path d="M11 7v4" initial="normal" animate={controls} {...simpleMotion('fill', 2)} />
        <motion.path d="M11 15h.01" initial="normal" animate={controls} {...simpleMotion('fill', 3)} />
      </MotionSvgRoot>);
}
