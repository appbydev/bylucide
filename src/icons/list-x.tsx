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
      ><motion.path d="M16 5H3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M11 12H3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16 19H3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m15.5 9.5 5 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m20.5 9.5-5 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
