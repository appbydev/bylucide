'use client';
import * as React from 'react';
import { motion, type SVGMotionProps } from 'motion/react';

export interface SvgRootContextValue {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

export const SvgRootContext = React.createContext<SvgRootContextValue>({});

export function SvgRoot({ children, ...props }: React.ComponentPropsWithoutRef<'svg'>) {
  const { children: extraChildren, ...shell } = React.useContext(SvgRootContext);
  return (
    <svg
      {...props}
      {...shell}
      className={[props.className, shell.className].filter(Boolean).join(' ')}
      style={{ ...props.style, ...shell.style }}
    >
      {children}
      {extraChildren}
    </svg>
  );
}

export function MotionSvgRoot({
  children,
  ...props
}: Omit<SVGMotionProps<SVGSVGElement>, 'children'> & { children?: React.ReactNode }) {
  const { children: extraChildren, ...shell } = React.useContext(SvgRootContext);
  return (
    <motion.svg
      {...props}
      {...(shell as SVGMotionProps<SVGSVGElement>)}
      className={[props.className, shell.className].filter(Boolean).join(' ')}
      style={{ ...props.style, ...shell.style }}
    >
      {children}
      {extraChildren}
    </motion.svg>
  );
}