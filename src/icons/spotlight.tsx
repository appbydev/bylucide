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
      ><motion.path d="M15.295 19.562 16 22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m17 16 3.758 2.098" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m19 12.5 3.026-.598" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M8 9V2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
