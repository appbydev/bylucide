'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.6,
            ease: "linear",
            opacity: { duration: 0.1 },
        },
    },
};
const RECT_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.6,
            ease: "linear",
            opacity: { duration: 0.1 },
        },
    },
};
const CIRCLE_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.6,
            ease: "linear",
            opacity: { duration: 0.1 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const pathControls = useAnimation();
const rectControls = useAnimation();
const circleControls = useAnimation();
 
 useControlsDriver(register, pathControls, rectControls, circleControls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={pathControls} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" initial="normal" variants={PATH_VARIANTS}/>
          <motion.rect animate={rectControls} height="12" initial="normal" variants={RECT_VARIANTS} width="4" x="2" y="9"/>
          <motion.circle animate={circleControls} cx="4" cy="4" initial="normal" r="2" variants={CIRCLE_VARIANTS}/>
        </SvgRoot>);
}
