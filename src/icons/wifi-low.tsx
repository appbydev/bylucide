'use client';
import { useSequenceDriver } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
const WIFI_LEVELS = [
    { d: "M12 20h.01", initialOpacity: 1, delay: 0 },
    { d: "M8.5 16.429a5 5 0 0 1 7 0", initialOpacity: 1, delay: 0.1 },
];
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation(), questionControls = useAnimation();
 useSequenceDriver(register, [['fadeOut', 'hide'], ['fadeIn', 'show'], 1.5, ['fadeIn', 'hide']], ['fadeIn', 'hide'], controls, questionControls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          {WIFI_LEVELS.map((level, index) => (<motion.path animate={controls} d={level.d} initial={{ opacity: level.initialOpacity }} key={level.d} variants={{
            fadeOut: {
                opacity: index === 0 ? 1 : 0,
                transition: { duration: 0.2 },
            },
            fadeIn: {
                opacity: 1,
                transition: {
                    type: "spring",
                    velocity: 0,
                    stiffness: 300,
                    damping: 20,
                    delay: level.delay,
                },
            },
        }}/>))}
          <motion.text animate={questionControls} dominantBaseline="central" fill="currentColor" fontSize="8" fontWeight="bold" initial={{ opacity: 0, scale: 0 }} stroke="none" style={{ transformOrigin: "12px 8px" }} textAnchor="middle" variants={{
        hide: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.15 },
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                velocity: 0,
                stiffness: 400,
                damping: 18,
                delay: 0.1,
            },
        },
    }} x="12" y="8">
            ?
          </motion.text>
        </SvgRoot>);
}
