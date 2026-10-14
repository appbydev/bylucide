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
      ><motion.rect width="18" height="18" x="3" y="3" rx="2" ry="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="9" cy="9" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
      </motion.svg>);
}
