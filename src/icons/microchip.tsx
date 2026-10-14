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
      ><motion.path d="M10 12h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10 17h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M10 7h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M18 12h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M18 18h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M18 6h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M4 12h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M4 18h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M4 6h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.rect x="6" y="2" width="12" height="20" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
