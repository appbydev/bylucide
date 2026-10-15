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
      ><motion.path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M15 22v-5a1 1 0 0 1 1-1h5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M8 2v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M16 2v4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M3 10h18" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
      </MotionSvgRoot>);
}
