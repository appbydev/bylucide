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
      ><motion.path d="M12 16v5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M16 14v7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M20 10v11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4 18v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M8 14v7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
