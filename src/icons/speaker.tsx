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
      ><motion.rect width="16" height="20" x="4" y="2" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 6h.01" initial="normal" animate={controls} {...simpleMotion('pulse-element', 1)} />
        <motion.circle cx="12" cy="14" r="4" initial="normal" animate={controls} {...simpleMotion('pulse-element', 2)} />
        <motion.path d="M12 14h.01" initial="normal" animate={controls} {...simpleMotion('pulse-element', 3)} />
      </MotionSvgRoot>);
}
