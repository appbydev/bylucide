'use client';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { motion, useAnimation } from 'motion/react';
import { useControlsDriver } from '../icon-runtime';
import { simpleMotion } from '../simple-motion';

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
  const controls = useAnimation();
  useControlsDriver(register, controls);
  return (<MotionSvgRoot style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><motion.path d="M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M14 2v5a1 1 0 0 0 1 1h5" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M8 12v-1" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M8 18v-2" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M8 7V6" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.circle cx="8" cy="20" r="2" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
      </MotionSvgRoot>);
}
