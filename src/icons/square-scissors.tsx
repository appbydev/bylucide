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
      ><motion.rect width="18" height="18" x="3" y="3" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="8.5" cy="8.5" r="1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="9.56066" y1="9.56066" x2="12" y2="12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="17" y1="17" x2="14.82" y2="14.82" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="8.5" cy="15.5" r="1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.line x1="9.56066" y1="14.43934" x2="17" y2="7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
