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
      ><motion.line x1="2" x2="22" y1="2" y2="22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="13.5" x2="6" y1="13.5" y2="21" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="18" x2="21" y1="12" y2="15" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M21 15V5a2 2 0 0 0-2-2H9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
