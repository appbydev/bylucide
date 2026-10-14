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
      ><motion.path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" initial="normal" animate={controls} {...simpleMotion('mail-flap', 0)} />
        <motion.path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" initial="normal" animate={controls} {...simpleMotion('fill', 1)} />
        <motion.path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" initial="normal" animate={controls} {...simpleMotion('fill', 2)} />
        <motion.path d="M20 22v.01" initial="normal" animate={controls} {...simpleMotion('fill', 3)} />
      </motion.svg>);
}
