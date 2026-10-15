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
      ><motion.path d="M12 2v8" initial="normal" animate={controls} {...simpleMotion('gear', 0, { rotation: 45 })} />
        <motion.path d="m4.93 10.93 1.41 1.41" initial="normal" animate={controls} {...simpleMotion('fade', 1, { rotation: 45 })} />
        <motion.path d="M2 18h2" initial="normal" animate={controls} {...simpleMotion('fade', 2, { rotation: 45 })} />
        <motion.path d="M20 18h2" initial="normal" animate={controls} {...simpleMotion('fade', 3, { rotation: 45 })} />
        <motion.path d="m19.07 10.93-1.41 1.41" initial="normal" animate={controls} {...simpleMotion('fade', 4, { rotation: 45 })} />
        <motion.path d="M22 22H2" initial="normal" animate={controls} {...simpleMotion('fade', 5, { rotation: 45 })} />
        <motion.path d="m8 6 4-4 4 4" initial="normal" animate={controls} {...simpleMotion('fade', 6, { rotation: 45 })} />
        <motion.path d="M16 18a4 4 0 0 0-8 0" initial="normal" animate={controls} {...simpleMotion('fade', 7, { rotation: 45 })} />
      </MotionSvgRoot>);
}
