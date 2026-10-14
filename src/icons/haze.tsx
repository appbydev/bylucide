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
      ><motion.path d="m5.2 6.2 1.4 1.4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M2 13h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M20 13h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m17.4 7.6 1.4-1.4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M22 17H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M22 21H2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M16 13a4 4 0 0 0-8 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M12 5V2.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
