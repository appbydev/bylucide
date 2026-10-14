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
      ><motion.path d="M12 6h4a2 2 0 0 1 2 2v7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M6 12v9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M9 3 3 9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M9 9 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="18" cy="18" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
