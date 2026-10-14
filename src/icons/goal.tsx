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
      ><motion.path d="M12 13V2l8 4-8 4" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
      </motion.svg>);
}
