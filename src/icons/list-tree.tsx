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
      ><motion.path d="M8 5h13" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13 12h8" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M13 19h8" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M3 10a2 2 0 0 0 2 2h3" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M3 5v12a2 2 0 0 0 2 2h3" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
      </motion.svg>);
}
