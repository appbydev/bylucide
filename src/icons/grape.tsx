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
      ><motion.path d="M22 5V2l-5.89 5.89" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.circle cx="16.6" cy="15.89" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.circle cx="8.11" cy="7.4" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.circle cx="12.35" cy="11.65" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.circle cx="13.91" cy="5.85" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.circle cx="18.15" cy="10.09" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.circle cx="6.56" cy="13.2" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.circle cx="10.8" cy="17.44" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.circle cx="5" cy="19" r="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </motion.svg>);
}
