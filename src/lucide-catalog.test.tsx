import { describe, expect, test } from 'bun:test';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { render } from '@testing-library/react';
import * as upstream from 'lucide-react';
import * as library from './index';
import { iconRegistry } from './icon-registry';
import type { IconComponent, LucideIcon, LucideProps } from './types';

const markup = (name: string) => renderToStaticMarkup(<library.Icon name={name} loop={false} />);

describe('official Lucide surface', () => {
  test('native SVG sizing and layout match upstream Lucide', () => {
    const { container } = render(<library.Icon name="calendar-days" size={31} loop={false} style={{ marginTop: 2 }} />);
    const svg = container.querySelector('svg')!;
    const reference = render(<upstream.CalendarDays size={31} style={{ marginTop: 2 }} />).container.querySelector('svg')!;
    expect(container.firstElementChild).toBe(svg);
    expect(container.querySelector('span')).toBeNull();
    for (const attribute of ['width', 'height', 'viewBox', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'class']) {
      expect(svg.getAttribute(attribute), attribute).toBe(reference.getAttribute(attribute));
    }
    expect(svg.style.marginTop).toBe('2px');
    for (const property of ['display', 'verticalAlign', 'alignItems', 'justifyContent', 'flexShrink', 'lineHeight'] as const) {
      expect(svg.style[property], property).toBe(reference.style[property]);
    }
  });
  test('nomes Lucide usados por consumidores comuns são exportados', () => {
    for (const name of ['Activity', 'AlertCircle', 'AlertTriangle', 'AppWindow', 'ArrowDown', 'Bell', 'Calendar', 'Check', 'Home', 'Search', 'Settings', 'User']) {
      expect(Object.hasOwn(library, name), name).toBe(true);
      expect(markup(name), name).toContain('<svg');
    }
  });
  test('every upstream icon export and official alias resolves and renders', () => {
    const components = new Set(Object.values(upstream.icons));
    for (const [name, component] of Object.entries(upstream)) {
      if (!components.has(component as upstream.LucideIcon)) continue;
      const exported = (library as unknown as Record<string, IconComponent>)[name];
      expect(exported, name).toBeDefined();
      expect(renderToStaticMarkup(React.createElement(exported!, { loop: false })), name).toContain('<svg');
      expect(markup(name), name).toContain('<svg');
    }
  });
  test('official aliases share their animated component and geometry', () => {
    expect(library.Home).toBe(library.House);
    expect(library.HomeIcon).toBe(library.LucideHouse);
    expect(library.Loader2).toBe(library.LoaderCircle);
    expect(library.Code2).toBe(library.CodeXml);
    for (const name of ['Home', 'HomeIcon', 'LucideHouse', 'house']) {
      expect(library.normalizeName(name)).toBe('home');
      expect(iconRegistry[library.normalizeName(name)]).toBeDefined();
      expect(markup(name)).toBe(markup('home'));
      expect(markup(name)).toContain('class="lucide lucide-home');
    }
    expect(library.normalizeName('ArrowDown01')).toBe('arrow-down-0-1');
    expect(iconRegistry[library.normalizeName('ArrowDown01')]).toBeDefined();
    expect(markup('Axis3D')).toContain('<svg');
  });
  test('all canonical icons without a local animation use static Lucide geometry', () => {
    for (const name of Object.keys(upstream.icons)) {
      const resolved = library.normalizeName(name);
      if (Object.hasOwn(iconRegistry, resolved)) continue;
      const html = markup(name);
      expect(html, name).toContain('<svg');
      expect(html, name).toContain('class="lucide');
    }
  });
  test('unknown, empty, prototype and Iconoir-only names never resolve', () => {
    for (const name of ['', '-', 'not-a-real-icon', 'constructor', '__proto__', 'toString', 'airplane', 'attach-file', 'cart', 'key-circle', 'cursor-click', 'LogInBroken']) {
      expect(markup(name), name).not.toContain('<svg');
      expect(renderToStaticMarkup(React.createElement(library.createIcon(name))), name).not.toContain('<svg');
    }
    for (const name of ['Airplane', 'AttachFile', 'KeyCircle', 'NavArrowDown']) expect(Object.hasOwn(library, name)).toBe(false);
  });
  test('consumer component/props types describe the SVG-ref contract', () => {
    const Component: LucideIcon = library.Calendar;
    const props: LucideProps = { size: 18 };
    const ref = React.createRef<SVGSVGElement>();
    expect(renderToStaticMarkup(<Component {...props} ref={ref} />)).toContain('width="18"');
  });
});
