import { expect, type Page, test } from '@playwright/test';

// Visual quality gate for the public demo: the same checks as the AppBy slop auditor.
// Named .e2e.ts (not .spec.ts) so Playwright picks it up and `bun test` does not.
// Runs at desktop and phone width, in light and dark.

type Finding = { rule: string; detail: string };

async function audit(page: Page): Promise<Finding[]> {
  return page.evaluate(() => {
    const out: { rule: string; detail: string }[] = [];
    const ctx = document.createElement('canvas').getContext('2d');
    const rgb = (c: string) => {
      if (!ctx || !c) return null;
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = '#000';
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return { r: d[0] ?? 0, g: d[1] ?? 0, b: d[2] ?? 0, a: (d[3] ?? 0) / 255 };
    };
    const lum = ({ r, g, b }: { r: number; g: number; b: number }) => {
      const f = (v: number) => {
        const s = v / 255;
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const bgOf = (el: Element) => {
      const layers: { r: number; g: number; b: number; a: number }[] = [];
      for (let e: Element | null = el; e; e = e.parentElement) {
        const s = getComputedStyle(e);
        if (s.backgroundImage !== 'none' && !s.backgroundImage.startsWith('url')) return null;
        const c = rgb(s.backgroundColor);
        if (c && c.a > 0) {
          layers.push(c);
          if (c.a >= 0.99) break;
        }
      }
      let base = rgb(getComputedStyle(document.body).backgroundColor) ?? { r: 255, g: 255, b: 255, a: 1 };
      for (const l of layers.reverse()) base = { r: l.r * l.a + base.r * (1 - l.a), g: l.g * l.a + base.g * (1 - l.a), b: l.b * l.a + base.b * (1 - l.a), a: 1 };
      return base;
    };
    const emoji = /(\p{Extended_Pictographic}|\p{Regional_Indicator})/u;
    let pills = 0;
    // The grid renders every icon; the first screens are what people judge, so check the top 3000px.
    const els = [...document.querySelectorAll('body *')].filter((e) => !e.closest('svg,canvas,video,code,pre'));
    for (const el of els) {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      if (r.width === 0 || r.height === 0 || s.visibility === 'hidden' || Number(s.opacity) <= 0.05) continue;
      if (r.top + window.scrollY > 3000) continue;
      const own = [...el.childNodes]
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent)
        .join('')
        .trim();
      if ((s.backgroundClip === 'text' || s.webkitBackgroundClip === 'text') && s.backgroundImage.includes('gradient')) out.push({ rule: 'gradient-text', detail: own });
      for (const part of `${s.boxShadow},${s.textShadow}`.split(/,(?![^(]*\))/)) {
        const m = part.match(/(rgba?\([^)]+\)|oklch\([^)]+\))/);
        const c = m ? rgb(m[0]) : null;
        const blur = Number(part.match(/(-?[\d.]+)px\s+(-?[\d.]+)px\s+([\d.]+)px/)?.[3] ?? 0);
        if (c && c.a >= 0.12 && Math.max(c.r, c.g, c.b) - Math.min(c.r, c.g, c.b) > 60 && blur >= 8 && !part.includes('inset')) out.push({ rule: 'colored-glow', detail: part.trim() });
      }
      if (/(^|,\s*)all(\s|,|$)/.test(s.transitionProperty) && Number.parseFloat(s.transitionDuration) > 0) out.push({ rule: 'transition-all', detail: el.className.toString() });
      if (s.animationName !== 'none' && s.animationIterationCount === 'infinite' && !el.closest('[role=status],[aria-busy=true],[data-live]')) out.push({ rule: 'infinite-animation', detail: s.animationName });
      for (const p of ['paddingTop', 'paddingLeft', 'rowGap', 'columnGap'] as const) {
        const v = Number.parseFloat(s[p]);
        if (v > 2 && v % 2 !== 0 && ![6, 10, 14].includes(v)) out.push({ rule: 'off-grid', detail: `${p} ${v}px` });
      }
      if (!own) continue;
      const fs = Number.parseFloat(s.fontSize);
      if (emoji.test(own)) out.push({ rule: 'emoji', detail: own });
      if (s.textTransform === 'uppercase' && Number.parseFloat(s.letterSpacing) > 0.5 && own.length > 3) out.push({ rule: 'uppercase-tracked', detail: own });
      if (Number(s.fontWeight) > 600) out.push({ rule: 'heavy-weight', detail: `${own} ${s.fontWeight}` });
      if (/!\s*$/.test(own)) out.push({ rule: 'exclamation', detail: own });
      if (fs < 11) out.push({ rule: 'tiny-text', detail: `${own} ${fs}px` });
      if (own.length < 48 && /[^.]\.$/.test(own) && el.matches('button,a,label,h1,h2,h3,h4,h5,h6,th,[role=tab]')) out.push({ rule: 'trailing-period', detail: own });
      const fg = rgb(s.color);
      const bg = bgOf(el);
      if (fg && bg && !el.closest('[disabled],[aria-disabled=true],[data-disabled]')) {
        const mixed = { r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a) };
        const [hi, lo] = [lum(mixed), lum(bg)].sort((a, b) => b - a) as [number, number];
        const ratio = (hi + 0.05) / (lo + 0.05);
        const large = fs >= 24 || (fs >= 18.66 && Number(s.fontWeight) >= 600);
        if (ratio < (large ? 3 : 4.5)) out.push({ rule: 'contrast', detail: `${own.slice(0, 30)} ${ratio.toFixed(2)}:1` });
      }
      if (r.top < window.innerHeight && r.height <= 28 && Number.parseFloat(s.borderRadius) >= r.height / 2 - 1 && (s.backgroundColor !== 'rgba(0, 0, 0, 0)' || s.borderStyle !== 'none')) pills++;
    }
    if (pills > 12) out.push({ rule: 'pill-wall', detail: `${pills} pills in the first screen` });
    if (document.documentElement.scrollWidth > window.innerWidth + 1) out.push({ rule: 'horizontal-overflow', detail: `${document.documentElement.scrollWidth}` });
    return out;
  });
}

for (const colorScheme of ['light', 'dark'] as const) {
  for (const width of [1440, 390]) {
    test(`home reads as a designed page (${colorScheme}, ${width}px)`, async ({ page }) => {
      // No reduced-motion emulation: its reset gives every element a transition duration, which reads as `transition: all`.
      await page.emulateMedia({ colorScheme });
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await page.waitForTimeout(800); // let the headline reveal finish
      expect(await audit(page)).toEqual([]);

      // Keyboard focus is always visible.
      await page.keyboard.press('Tab');
      const ring = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return true;
        const s = getComputedStyle(el);
        return (s.outlineStyle !== 'none' && Number.parseFloat(s.outlineWidth) > 0) || s.boxShadow !== 'none';
      });
      expect(ring).toBe(true);
    });
  }
}
