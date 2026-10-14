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
      ><motion.path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M8.5 8.5v.01" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M16 15.5v.01" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M12 12v.01" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M11 17v.01" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="M7 14v.01" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
      </motion.svg>);
}
