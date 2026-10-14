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
      ><motion.circle cx="18.5" cy="17.5" r="3.5" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.circle cx="5.5" cy="17.5" r="3.5" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.circle cx="15" cy="5" r="1" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M12 17.5V14l-3-3 4-3 2 3h2" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
      </motion.svg>);
}
