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
      ><motion.path d="M12 2v20" initial="normal" animate={controls} {...simpleMotion('nudge', 0, { tx: 0, ty: 0 })} />
        <motion.path d="m8 18 4 4 4-4" initial="normal" animate={controls} {...simpleMotion('nudge', 1, { tx: 0, ty: 0 })} />
        <motion.path d="m8 6 4-4 4 4" initial="normal" animate={controls} {...simpleMotion('nudge', 2, { tx: 0, ty: 0 })} />
      </motion.svg>);
}
