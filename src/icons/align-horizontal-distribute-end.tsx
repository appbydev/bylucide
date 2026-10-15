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
      ><motion.rect width="6" height="14" x="4" y="5" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.rect width="6" height="10" x="14" y="7" rx="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M10 2v20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M20 2v20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
