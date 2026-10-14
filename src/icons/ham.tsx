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
      ><motion.path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m8.5 16.5-1-1" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </motion.svg>);
}
