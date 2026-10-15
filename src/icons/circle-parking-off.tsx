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
      ><motion.path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13 13H9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m2 2 20 20" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M9 17V9" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
