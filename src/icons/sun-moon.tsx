'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SUN_VARIANTS: Variants = {
    normal: {
        rotate: 0,
    },
    animate: {
        rotate: [0, -5, 5, -2, 2, 0],
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        },
    },
};
const MOON_VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: (i: number) => ({
        opacity: [0, 1],
        transition: { delay: i * 0.1, duration: 0.3 },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const sunControls = useAnimation();
const moonControls = useAnimation();
 
 useControlsDriver(register, sunControls, moonControls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.g animate={sunControls} initial="normal" variants={SUN_VARIANTS}>
            <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/>
          </motion.g>
          {[
        "M12 2v2",
        "M12 20v2",
        "m4.9 4.9 1.4 1.4",
        "m17.7 17.7 1.4 1.4",
        "M2 12h2",
        "M20 12h2",
        "m6.3 17.7-1.4 1.4",
        "m19.1 4.9-1.4 1.4",
    ].map((d, index) => (<motion.path animate={moonControls} custom={index + 1} d={d} initial="normal" key={d} variants={MOON_VARIANTS}/>))}
        </SvgRoot>);
}
