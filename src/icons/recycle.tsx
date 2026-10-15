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
      ><motion.path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" initial="normal" animate={controls} {...simpleMotion('scale-pop', 0)} />
        <motion.path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" initial="normal" animate={controls} {...simpleMotion('scale-pop', 1)} />
        <motion.path d="m14 16-3 3 3 3" initial="normal" animate={controls} {...simpleMotion('scale-pop', 2)} />
        <motion.path d="M8.293 13.596 7.196 9.5 3.1 10.598" initial="normal" animate={controls} {...simpleMotion('scale-pop', 3)} />
        <motion.path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" initial="normal" animate={controls} {...simpleMotion('scale-pop', 4)} />
        <motion.path d="m13.378 9.633 4.096 1.098 1.097-4.096" initial="normal" animate={controls} {...simpleMotion('scale-pop', 5)} />
      </MotionSvgRoot>);
}
