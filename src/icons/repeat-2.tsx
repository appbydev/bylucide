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
      ><motion.path d="m2 9 3-3 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13 18H7a2 2 0 0 1-2-2V6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m22 15-3 3-3-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M11 6h6a2 2 0 0 1 2 2v10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </motion.svg>);
}
