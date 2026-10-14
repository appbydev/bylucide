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
      ><motion.path d="M10 15H6a4 4 0 0 0-4 4v2" initial="normal" animate={controls} {...simpleMotion('fade', 0)} />
        <motion.path d="m14.305 16.53.923-.382" initial="normal" animate={controls} {...simpleMotion('fade', 1)} />
        <motion.path d="m15.228 13.852-.923-.383" initial="normal" animate={controls} {...simpleMotion('fade', 2)} />
        <motion.path d="m16.852 12.228-.383-.923" initial="normal" animate={controls} {...simpleMotion('fade', 3)} />
        <motion.path d="m16.852 17.772-.383.924" initial="normal" animate={controls} {...simpleMotion('fade', 4)} />
        <motion.path d="m19.148 12.228.383-.923" initial="normal" animate={controls} {...simpleMotion('fade', 5)} />
        <motion.path d="m19.53 18.696-.382-.924" initial="normal" animate={controls} {...simpleMotion('fade', 6)} />
        <motion.path d="m20.772 13.852.924-.383" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.path d="m20.772 16.148.924.383" initial="normal" animate={controls} {...simpleMotion('fade', 7)} />
        <motion.circle cx="18" cy="15" r="3" initial="normal" animate={controls} {...simpleMotion('fill', 7)} />
        <motion.circle cx="9" cy="7" r="4" initial="normal" animate={controls} {...simpleMotion('fill', 7)} />
      </motion.svg>);
}
