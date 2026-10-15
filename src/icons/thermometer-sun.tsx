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
      ><motion.path d="M12 2v2" initial="normal" animate={controls} {...simpleMotion('gear', 0, { rotation: 45 })} />
        <motion.path d="M12 8a4 4 0 0 0-1.645 7.647" initial="normal" animate={controls} {...simpleMotion('fade', 1, { rotation: 45 })} />
        <motion.path d="M2 12h2" initial="normal" animate={controls} {...simpleMotion('fade', 2, { rotation: 45 })} />
        <motion.path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" initial="normal" animate={controls} {...simpleMotion('fade', 3, { rotation: 45 })} />
        <motion.path d="m4.93 4.93 1.41 1.41" initial="normal" animate={controls} {...simpleMotion('fade', 4, { rotation: 45 })} />
        <motion.path d="m6.34 17.66-1.41 1.41" initial="normal" animate={controls} {...simpleMotion('fade', 5, { rotation: 45 })} />
      </MotionSvgRoot>);
}
