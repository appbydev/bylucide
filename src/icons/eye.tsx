'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" style={{ originY: "50%" }} transition={{ duration: 0.4, ease: "easeInOut" }} variants={{
        normal: { scaleY: 1, opacity: 1 },
        animate: { scaleY: [1, 0.1, 1], opacity: [1, 0.3, 1] },
    }}/>
          <motion.circle animate={controls} cx="12" cy="12" r="3" transition={{ duration: 0.4, ease: "easeInOut" }} variants={{
        normal: { scale: 1, opacity: 1 },
        animate: { scale: [1, 0.3, 1], opacity: [1, 0.3, 1] },
    }}/>
        </SvgRoot>);
}
