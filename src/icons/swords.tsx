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
      ><motion.polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.line x1="13" x2="19" y1="19" y2="13" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="16" x2="20" y1="16" y2="20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="19" x2="21" y1="21" y2="19" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.line x1="5" x2="9" y1="14" y2="18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.line x1="7" x2="4" y1="17" y2="20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.line x1="3" x2="5" y1="19" y2="21" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
