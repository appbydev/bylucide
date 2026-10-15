'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 12a9 3 0 0 0 5 2.69"/>
        <path d="M21 9.3V5"/>
        <path d="M3 5v14a9 3 0 0 0 6.47 2.88"/>

        <motion.g animate={controls} style={{ transformOrigin: "17.5px 17px" }} transition={{ duration: 0.6, ease: "easeInOut" }} variants={{
        normal: { rotate: 0 },
        animate: { rotate: 360 },
    }}>
          <path d="M12 12v4h4"/>
          <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/>
        </motion.g>
      </SvgRoot>);
}
