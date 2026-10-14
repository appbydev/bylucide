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
      ><motion.line x1="6" x2="10" y1="12" y2="12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.line x1="8" x2="8" y1="10" y2="14" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="15" x2="15.01" y1="13" y2="13" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="18" x2="18.01" y1="11" y2="11" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect width="20" height="12" x="2" y="6" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
