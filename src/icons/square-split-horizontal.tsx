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
      ><motion.path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="12" x2="12" y1="4" y2="20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
      </MotionSvgRoot>);
}
