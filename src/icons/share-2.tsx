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
      ><motion.circle cx="18" cy="5" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="6" cy="12" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.circle cx="18" cy="19" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="8.59" x2="15.42" y1="13.51" y2="17.49" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.line x1="15.41" x2="8.59" y1="6.51" y2="10.49" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </motion.svg>);
}
