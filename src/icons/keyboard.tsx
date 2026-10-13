'use client';
import * as React from 'react';
import { AnimatePresence, motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
const KEYBOARD_PATHS = [
    { id: "key1", d: "M10 8h.01" },
    { id: "key2", d: "M12 12h.01" },
    { id: "key3", d: "M14 8h.01" },
    { id: "key4", d: "M16 12h.01" },
    { id: "key5", d: "M18 8h.01" },
    { id: "key6", d: "M6 8h.01" },
    { id: "key7", d: "M7 16h10" },
    { id: "key8", d: "M8 12h.01" },
];
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => {
 register({
   async play() { await current.current.start((i: number) => ({ opacity: [1, 0.2, 1], transition: { duration: 1.5, times: [0, 0.5, 1], delay: i * 0.2 * Math.random(), repeat: 1, repeatType: 'reverse' } })); },
   reset() { current.current.stop(); current.current.set({ opacity: 1 }); },
 });
 return () => register(null);
 }, [register]);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <rect height="16" rx="2" width="20" x="2" y="4"/>
          <AnimatePresence>
            {KEYBOARD_PATHS.map((path, index) => (<motion.path animate={controls} custom={index} d={path.d} initial={{ opacity: 1 }} key={path.id}/>))}
          </AnimatePresence>
        </svg>);
}
