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
      ><motion.path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m14.207 4.793-3.414 3.414" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </motion.svg>);
}
