import { Window } from 'happy-dom';
import { strict as assert } from 'node:assert';

// Install the DOM before importing Motion: its browser detection is module-scoped.
const window = new Window();
Object.assign(globalThis, { window, document: window.document, navigator: window.navigator, HTMLElement: window.HTMLElement, SVGElement: window.SVGElement, Element: window.Element, getComputedStyle: window.getComputedStyle.bind(window), requestAnimationFrame: (callback: FrameRequestCallback) => setTimeout(() => callback(performance.now()), 8), cancelAnimationFrame: clearTimeout });
const { createElement } = await import('react');
const { render, act, cleanup } = await import('@testing-library/react');
const { default: Accessibility } = await import('../src/icons/accessibility');
const { default: PanelTop } = await import('../src/icons/panel-top');
import type { IconDriver } from '../src/icon-runtime';

for (const Component of [Accessibility, PanelTop]) {
  let driver: IconDriver | null = null;
  const view = render(createElement(Component, { size: 24, strokeWidth: 2, register: value => { driver = value; } }));
  assert.ok(driver, 'mounted driver registered');
  const transforms = () => Array.from(view.container.querySelectorAll('svg,path,circle,rect,g,line')).map(node => (node.getAttribute('style') ?? '') + (node.tagName === 'line' ? ` y1=${node.getAttribute('y1')} y2=${node.getAttribute('y2')}` : '')).join('|');
  const rest = transforms();
  for (let cycle = 0; cycle < 2; cycle++) {
    const samples: string[] = [];
    await act(async () => {
      const timer = setInterval(() => samples.push(transforms()), 25);
      try { await driver!.play(new AbortController().signal); }
      finally { clearInterval(timer); }
      await new Promise(resolve => setTimeout(resolve, 30));
    });
    assert.ok(samples.some(sample => sample !== rest), 'real Motion values rendered during playback');
    // Motion retains identity transform styles after returning to its starting values.
    const end = transforms();
    assert.ok(!/translate[XY]\((?!0px)[^)]+\)|rotate\((?!0deg)[^)]+\)/.test(end), `cycle ${cycle}: returned to rest: ${end}`);
    if (Component === PanelTop) {
      assert.equal(view.container.querySelector('line')!.getAttribute('y1'), '9');
      assert.equal(view.container.querySelector('line')!.getAttribute('y2'), '9');
    }
    assert.ok(samples.length >= 20, 'forward/reverse timeline actually ran');
  }
  cleanup();
}
console.log('Mounted Motion: accessibility + panel-top, two forward/reverse cycles each');
