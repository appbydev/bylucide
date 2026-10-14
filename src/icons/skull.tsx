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
      ><motion.path d="m12.5 17-.5-1-.5 1h1z" initial="normal" animate={controls} {...simpleMotion('fade', 0)} />
        <motion.path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.circle cx="15" cy="12" r="1" initial="normal" animate={controls} {...simpleMotion('fill', 2)} />
        <motion.circle cx="9" cy="12" r="1" initial="normal" animate={controls} {...simpleMotion('fill', 3)} />
      </motion.svg>);
}
