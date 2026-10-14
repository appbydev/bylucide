import css from './icon-animations.css';

const STYLE_ID = 'bylucide-animations';

export function ensureAnimationStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);
}
