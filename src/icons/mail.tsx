'use client';
import type { IconSvgProps } from '../icon-runtime';
import { motion, useAnimation } from 'motion/react';
import { useControlsDriver } from '../icon-runtime';
import { simpleMotion } from '../simple-motion';

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
  const controls = useAnimation();
  useControlsDriver(register, controls);
  return (<motion.svg style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><motion.path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" initial="normal" animate={controls} {...simpleMotion('mail-flap', 0)} />
        <motion.rect x="2" y="4" width="20" height="16" rx="2" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
      </motion.svg>);
}
