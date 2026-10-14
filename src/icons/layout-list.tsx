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
      ><motion.rect width="7" height="7" x="3" y="3" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.rect width="7" height="7" x="3" y="14" rx="1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M14 4h7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M14 9h7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M14 15h7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M14 20h7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </motion.svg>);
}
