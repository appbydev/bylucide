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
      ><motion.path d="m12 14-1 1" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="m13.75 18.25-1.25 1.42" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
      </motion.svg>);
}
