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
      ><motion.path d="m17 11-5-5-5 5" initial="normal" animate={controls} {...simpleMotion('nudge', 0, { tx: 0, ty: -1 })} />
        <motion.path d="m17 18-5-5-5 5" initial="normal" animate={controls} {...simpleMotion('nudge', 1, { tx: 0, ty: -2 })} />
      </MotionSvgRoot>);
}
