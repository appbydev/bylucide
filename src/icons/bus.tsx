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
      ><motion.path d="M8 6v6" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M15 6v6" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M2 12h19.6" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.circle cx="7" cy="18" r="2" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="M9 18h5" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.circle cx="16" cy="18" r="2" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
      </motion.svg>);
}
