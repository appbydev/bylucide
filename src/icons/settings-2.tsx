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
      ><motion.path d="M14 17H5" initial="normal" animate={controls} {...simpleMotion('gear', 0, { rotation: 90 })} />
        <motion.path d="M19 7h-9" initial="normal" animate={controls} {...simpleMotion('gear', 1, { rotation: 90 })} />
        <motion.circle cx="17" cy="17" r="3" initial="normal" animate={controls} {...simpleMotion('gear', 2, { rotation: 90 })} />
        <motion.circle cx="7" cy="7" r="3" initial="normal" animate={controls} {...simpleMotion('gear', 3, { rotation: 90 })} />
      </MotionSvgRoot>);
}
