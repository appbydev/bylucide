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
      ><motion.path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m22 19-3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M5 19V5.5a1 1 0 0 1 5 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </motion.svg>);
}
