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
      ><motion.path d="M12 7v14" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.rect x="3" y="7" width="18" height="4" rx="1" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
      </MotionSvgRoot>);
}
