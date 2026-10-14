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
      ><motion.rect width="18" height="18" x="3" y="3" rx="2" initial="normal" animate={controls} {...simpleMotion('menu-line', 0, { scaleX: 1 })} />
        <motion.path d="M7 8h10" initial="normal" animate={controls} {...simpleMotion('menu-line', 1, { scaleX: 0.85 })} />
        <motion.path d="M7 12h10" initial="normal" animate={controls} {...simpleMotion('menu-line', 2, { scaleX: 0.7 })} />
        <motion.path d="M7 16h10" initial="normal" animate={controls} {...simpleMotion('menu-line', 3, { scaleX: 0.55 })} />
      </motion.svg>);
}
