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
      ><motion.rect width="18" height="18" x="3" y="3" rx="2" ry="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M16 8h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M8 8h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M8 16h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M16 16h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M12 12h.01" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
