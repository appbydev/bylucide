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
      ><motion.line x1="4" x2="20" y1="9" y2="9" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.line x1="4" x2="20" y1="15" y2="15" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.line x1="10" x2="8" y1="3" y2="21" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.line x1="16" x2="14" y1="3" y2="21" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
      </MotionSvgRoot>);
}
