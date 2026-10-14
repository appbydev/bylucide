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
      ><motion.path d="M8 22h8" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M7 10h10" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M12 15v7" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
      </motion.svg>);
}
