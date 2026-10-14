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
      ><motion.rect width="5" height="5" x="3" y="3" rx="1" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.rect width="5" height="5" x="16" y="3" rx="1" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.rect width="5" height="5" x="3" y="16" rx="1" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M21 16h-3a2 2 0 0 0-2 2v3" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M21 21v.01" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="M12 7v3a2 2 0 0 1-2 2H7" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.path d="M3 12h.01" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
        <motion.path d="M12 3h.01" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M12 16v.01" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M16 12h1" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M21 12v.01" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M12 21v-1" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
      </motion.svg>);
}
