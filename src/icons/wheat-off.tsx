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
      ><motion.path d="m2 22 10-10" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="m16 8-1.17 1.17" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
        <motion.path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" initial="normal" animate={controls} {...simpleMotion('scale-pop', 6)} />
        <motion.path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
        <motion.line x1="2" x2="22" y1="2" y2="22" initial="normal" animate={controls} {...simpleMotion('scale-pop', 7)} />
      </MotionSvgRoot>);
}
