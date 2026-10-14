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
      ><motion.path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M6 8h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M6 18h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M14 8h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M14 18h4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
      </motion.svg>);
}
