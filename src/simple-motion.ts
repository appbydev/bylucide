import type { MotionStyle, Transition, Variants } from 'motion/react';

type SimpleMotionOptions = {
  rotation?: number;
  tx?: number;
  ty?: number;
  scaleX?: number;
  dashLength?: number;
};

type Profile = {
  normal: Variants['normal'];
  animate: Variants['animate'];
  duration: number;
  times?: number[];
  ease?: Transition['ease'];
  delay?: number;
  origin?: [string, string];
};

const ease: Transition['ease'] = [0.25, 0.1, 0.25, 1];
const overshoot: Transition['ease'] = [0.34, 1.56, 0.64, 1];

function profiles({ rotation = 90, tx = 0, ty = 0, scaleX = 0.7, dashLength }: SimpleMotionOptions) {
  return {
    fill: { normal: { strokeOpacity: 1 }, animate: { strokeOpacity: [1, 0.5, 1] }, duration: 0.5, times: [0, 0.5, 1] },
    draw: { normal: { strokeDashoffset: 0 }, animate: { strokeDashoffset: [dashLength ?? 50, 0] }, duration: 0.6 },
    'draw-line': { normal: { strokeDashoffset: 0 }, animate: { strokeDashoffset: [dashLength ?? 20, 0] }, duration: 0.5 },
    fade: { normal: { opacity: 1, transform: 'scale(1)' }, animate: { opacity: [0.3, 1, 1], transform: ['scale(0.92)', 'scale(1.04)', 'scale(1)'] }, duration: 0.5, times: [0, 0.6, 1] },
    'dot-appear': { normal: { transform: 'scale(1)' }, animate: { transform: ['scale(1)', 'scale(0.3)', 'scale(1.3)', 'scale(1)'] }, duration: 0.5, times: [0, 0.4, 0.7, 1], delay: 0.2 },
    bar: { normal: { transform: 'scaleY(1)' }, animate: { transform: ['scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'] }, duration: 0.6, times: [0, 0.6, 1], ease: overshoot, origin: ['12px', '24px'] },
    'scale-pop': { normal: { transform: 'scale(1)' }, animate: { transform: ['scale(1)', 'scale(1.15)', 'scale(1)'] }, duration: 0.5, times: [0, 0.4, 1], ease: overshoot, origin: ['12px', '12px'] },
    'pulse-element': { normal: { opacity: 1 }, animate: { opacity: [1, 0.3, 1] }, duration: 0.7, times: [0, 0.5, 1], ease: [0.42, 0, 0.58, 1], delay: 0 },
    gear: { normal: { transform: 'rotate(0deg)' }, animate: { transform: `rotate(${rotation}deg)` }, duration: 0.7, ease: overshoot, origin: ['12px', '12px'] },
    nudge: { normal: { transform: 'translate(0px, 0px)' }, animate: { transform: `translate(${tx}px, ${ty}px)` }, duration: 0.5, ease: overshoot },
    'bell-ring': { normal: { transform: 'rotate(0deg)' }, animate: { transform: [0, 14, -12, 8, -5, 2, 0].map(value => `rotate(${value}deg)`) }, duration: 0.7, times: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 1], delay: 0, origin: ['12px', '3px'] },
    'heart-beat': { normal: { transform: 'scale(1)' }, animate: { transform: [1, 1.2, 1, 1.15, 1, 1].map(value => `scale(${value})`) }, duration: 0.8, times: [0, 0.15, 0.3, 0.45, 0.6, 1], delay: 0, origin: ['12px', '13px'] },
    'rocket-lift': { normal: { transform: 'translate(0px, 0px)' }, animate: { transform: 'translate(1px, -1.5px)' }, duration: 0.5, ease: overshoot },
    'handle-lift': { normal: { transform: 'translateY(0px)' }, animate: { transform: 'translateY(-1.5px)' }, duration: 0.5 },
    'page-turn': { normal: { transform: 'rotateY(0deg)' }, animate: { transform: 'rotateY(-12deg)' }, duration: 0.5, origin: ['0px', '12px'] },
    'menu-line': { normal: { transform: 'scaleX(1)' }, animate: { transform: `scaleX(${scaleX})` }, duration: 0.4, origin: ['0px', '12px'] },
    'mail-flap': { normal: { transform: 'rotateX(0deg)' }, animate: { transform: [0, -30, 5, 0].map(value => `rotateX(${value}deg)`) }, duration: 0.7, times: [0, 0.4, 0.7, 1], origin: ['12px', '0px'] },
    shake: { normal: { transform: 'translateX(0px) rotate(0deg)' }, animate: { transform: ['translateX(0px) rotate(0deg)', 'translateX(-1.5px) rotate(-3deg)', 'translateX(1.5px) rotate(3deg)', 'translateX(-1px) rotate(-2deg)', 'translateX(1px) rotate(2deg)', 'translateX(-0.5px) rotate(-1deg)', 'translateX(0px) rotate(0deg)'] }, duration: 0.6, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1], origin: ['12px', '12px'] },
    spin: { normal: { transform: 'rotate(0deg)' }, animate: { transform: ['rotate(0deg)', 'rotate(360deg)'] }, duration: 0.7, ease: [0.4, 0, 0.2, 1], origin: ['12px', '12px'] },
  } satisfies Record<string, Profile>;
}

type SimpleMotionProfile = keyof ReturnType<typeof profiles>;

export function simpleMotion(profile: SimpleMotionProfile, delay = 0, options: SimpleMotionOptions = {}): {
  variants: Variants;
  style: MotionStyle;
} {
  const config: Profile = profiles(options)[profile];
  return {
    variants: {
      normal: config.normal,
      animate: {
        ...config.animate,
        transition: {
          type: 'tween',
          duration: config.duration,
          delay: config.delay ?? delay * 0.08,
          ease: config.ease ?? ease,
          times: config.times,
        },
      },
    },
    style: {
      transformBox: 'view-box',
      originX: config.origin?.[0] ?? '0px',
      originY: config.origin?.[1] ?? '0px',
      ...(profile === 'fill' ? { fill: 'none' } : {}),
    },
  };
}
