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
      ><motion.path d="m11 17-5-5 5-5" initial="normal" animate={controls} {...simpleMotion('nudge', 0, { tx: -1, ty: 0 })} />
        <motion.path d="m18 17-5-5 5-5" initial="normal" animate={controls} {...simpleMotion('nudge', 1, { tx: -2, ty: 0 })} />
      </MotionSvgRoot>);
}
