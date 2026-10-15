'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CAPSULE_VARIANTS: Variants = {
    normal: { y: 0 },
    animate: {
        y: [0, -3, 0, -2, 0],
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} overflow="visible" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19v3"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <motion.rect animate={controls} height="13" rx="3" variants={CAPSULE_VARIANTS} width="6" x="9" y="2"/>
        </SvgRoot>);
}
