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
      ><motion.path d="M12 20h.01" initial="normal" animate={controls} {...simpleMotion('pulse-element', 0)} />
        <motion.path d="M8.5 16.429a5 5 0 0 1 7 0" initial="normal" animate={controls} {...simpleMotion('pulse-element', 1)} />
        <motion.path d="M5 12.859a10 10 0 0 1 5.17-2.69" initial="normal" animate={controls} {...simpleMotion('pulse-element', 2)} />
        <motion.path d="M19 12.859a10 10 0 0 0-2.007-1.523" initial="normal" animate={controls} {...simpleMotion('pulse-element', 3)} />
        <motion.path d="M2 8.82a15 15 0 0 1 4.177-2.643" initial="normal" animate={controls} {...simpleMotion('pulse-element', 4)} />
        <motion.path d="M22 8.82a15 15 0 0 0-11.288-3.764" initial="normal" animate={controls} {...simpleMotion('pulse-element', 5)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('pulse-element', 6)} />
      </MotionSvgRoot>);
}
