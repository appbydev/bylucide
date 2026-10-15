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
      ><motion.path d="M12 2a10 10 0 0 1 7.38 16.75" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M12 6v6l4 2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M2.5 8.875a10 10 0 0 0-.5 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M2.83 16a10 10 0 0 0 2.43 3.4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M4.636 5.235a10 10 0 0 1 .891-.857" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M8.644 21.42a10 10 0 0 0 7.631-.38" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
