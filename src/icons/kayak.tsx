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
      ><motion.path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m6.707 6.707 10.586 10.586" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </motion.svg>);
}
