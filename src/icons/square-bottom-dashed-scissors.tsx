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
      ><motion.line x1="5" y1="3" x2="19" y2="3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.line x1="3" y1="5" x2="3" y2="19" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.line x1="21" y1="5" x2="21" y2="19" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.line x1="9" y1="21" x2="10" y2="21" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.line x1="14" y1="21" x2="15" y2="21" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M 3 5 A2 2 0 0 1 5 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M 19 3 A2 2 0 0 1 21 5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="M 5 21 A2 2 0 0 1 3 19" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M 21 19 A2 2 0 0 1 19 21" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.circle cx="8.5" cy="8.5" r="1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.line x1="9.56066" y1="9.56066" x2="12" y2="12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.line x1="17" y1="17" x2="14.82" y2="14.82" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.circle cx="8.5" cy="15.5" r="1.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.line x1="9.56066" y1="14.43934" x2="17" y2="7" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
