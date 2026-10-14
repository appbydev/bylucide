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
      ><motion.path d="M19.5 7a24 24 0 0 1 0 10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M4.5 7a24 24 0 0 0 0 10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M7 19.5a24 24 0 0 0 10 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M7 4.5a24 24 0 0 1 10 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.rect x="17" y="17" width="5" height="5" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.rect x="17" y="2" width="5" height="5" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.rect x="2" y="17" width="5" height="5" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.rect x="2" y="2" width="5" height="5" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
