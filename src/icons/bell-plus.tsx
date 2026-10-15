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
      ><motion.path d="M10.268 21a2 2 0 0 0 3.464 0" initial="normal" animate={controls} {...simpleMotion('bell-ring', 0)} />
        <motion.path d="M15 8h6" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M18 5v6" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
      </MotionSvgRoot>);
}
