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
      ><motion.path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M22 9v7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M3.304 13h6.392" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="18.5" cy="12.5" r="3.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
