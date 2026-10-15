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
      ><motion.path d="M12 6v6l3.644 1.822" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M16 19h6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M19 16v6" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
