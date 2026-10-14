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
      ><motion.path d="M12 19v3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 2v3" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M19 12h3" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M2 12h3" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
      </motion.svg>);
}
