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
      ><motion.path d="M9 17H7A5 5 0 0 1 7 7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15 7h2a5 5 0 0 1 4 8" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="8" x2="12" y1="12" y2="12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="2" x2="22" y1="2" y2="22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </motion.svg>);
}
