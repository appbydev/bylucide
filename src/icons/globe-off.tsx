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
      ><motion.path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M17.656 12H22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M2 12h10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </motion.svg>);
}
