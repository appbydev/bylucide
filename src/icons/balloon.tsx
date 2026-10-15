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
      ><motion.path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 6a2 2 0 0 1 2 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
      </MotionSvgRoot>);
}
