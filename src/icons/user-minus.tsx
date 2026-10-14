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
      ><motion.path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" initial="normal" animate={controls} {...simpleMotion('fade', 0)} />
        <motion.circle cx="9" cy="7" r="4" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
        <motion.line x1="22" x2="16" y1="11" y2="11" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
      </motion.svg>);
}
