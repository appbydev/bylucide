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
      ><motion.line x1="2" x2="5" y1="12" y2="12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.line x1="19" x2="22" y1="12" y2="12" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.line x1="12" x2="12" y1="2" y2="5" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.line x1="12" x2="12" y1="19" y2="22" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.circle cx="12" cy="12" r="7" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
      </MotionSvgRoot>);
}
