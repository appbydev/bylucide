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
      ><motion.path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.rect x="6" y="14" width="12" height="8" rx="1" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
      </MotionSvgRoot>);
}
