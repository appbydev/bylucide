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
      ><motion.path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.rect x="3" y="14" width="7" height="7" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.circle cx="17.5" cy="17.5" r="3.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
      </MotionSvgRoot>);
}
