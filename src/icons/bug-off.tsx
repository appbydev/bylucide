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
      ><motion.path d="M12 20v-8" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M12.656 7H14a4 4 0 0 1 4 4v1.344" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M14.12 3.88 16 2" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="M21 5a4 4 0 0 1-3.55 3.97" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.path d="M22 13h-3.344" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
        <motion.path d="M3 21a4 4 0 0 1 3.81-4" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M3 5a4 4 0 0 0 3.55 3.97" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M6 13H2" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="m8 2 1.88 1.88" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M9.712 4.06A3 3 0 0 1 15 6v1.13" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
      </motion.svg>);
}
