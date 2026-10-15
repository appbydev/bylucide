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
      ><motion.path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M6 13h12" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M6 17h12" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
      </MotionSvgRoot>);
}
