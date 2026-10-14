'use client';
import type { IconSvgProps } from '../icon-runtime';
import { motion, useAnimation } from 'motion/react';
import { useControlsDriver } from '../icon-runtime';
import { simpleMotion } from '../simple-motion';

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
  const controls = useAnimation();
  useControlsDriver(register, controls);
  return (<motion.svg style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><motion.path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M12 22V12" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.polyline points="3.29 7 12 12 20.71 7" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="m7.5 4.27 9 5.15" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
      </motion.svg>);
}
