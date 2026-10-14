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
      ><motion.path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m14.5 12.5 2-2" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="m11.5 9.5 2-2" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="m8.5 6.5 2-2" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="m17.5 15.5 2-2" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
      </motion.svg>);
}
