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
      ><motion.path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m21 22-1.879-1.878" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
        <motion.path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" initial="normal" animate={controls} {...simpleMotion('fill', 2)} />
        <motion.circle cx="17" cy="18" r="3" initial="normal" animate={controls} {...simpleMotion('fill', 3)} />
      </MotionSvgRoot>);
}
