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
      ><motion.circle cx="10" cy="7" r="4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M10.3 15H7a4 4 0 0 0-4 4v2" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
        <motion.circle cx="17" cy="17" r="3" initial="normal" animate={controls} {...simpleMotion('fill', 2)} />
        <motion.path d="m21 21-1.9-1.9" initial="normal" animate={controls} {...simpleMotion('fill', 3)} />
      </motion.svg>);
}
