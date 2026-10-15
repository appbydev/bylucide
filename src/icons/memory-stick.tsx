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
      ><motion.path d="M12 12v-2" initial="normal" animate={controls} {...simpleMotion('fill', 0)} />
        <motion.path d="M12 18v-2" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="M16 12v-2" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="M16 18v-2" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="M2 11h1.5" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="M20 18v-2" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.path d="M20.5 11H22" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
        <motion.path d="M4 18v-2" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M8 12v-2" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="M8 18v-2" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.rect x="2" y="6" width="20" height="10" rx="2" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
      </MotionSvgRoot>);
}
