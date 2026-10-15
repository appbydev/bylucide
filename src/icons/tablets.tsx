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
      ><motion.circle cx="7" cy="7" r="5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="17" cy="17" r="5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M12 17h10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m3.46 10.54 7.08-7.08" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </MotionSvgRoot>);
}
