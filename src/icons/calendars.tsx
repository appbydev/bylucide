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
      ><motion.path d="M12 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M18 2v2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M2 13h2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M8 8h14" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.rect x="8" y="3" width="14" height="14" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
