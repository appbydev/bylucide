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
      ><motion.path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M5 17A12 12 0 0 1 17 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.circle cx="19" cy="5" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="5" cy="19" r="2" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
      </motion.svg>);
}
