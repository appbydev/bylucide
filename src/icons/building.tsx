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
      ><motion.path d="M12 10h.01" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M12 14h.01" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M12 6h.01" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M16 10h.01" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M16 14h.01" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="M16 6h.01" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.path d="M8 10h.01" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
        <motion.path d="M8 14h.01" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M8 6h.01" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.rect x="4" y="2" width="16" height="20" rx="2" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
      </MotionSvgRoot>);
}
