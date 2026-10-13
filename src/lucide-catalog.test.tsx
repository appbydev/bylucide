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
  test('span shell keeps original web sizing contract', () => {
    const { container } = render(<library.Icon name="calendar-days" size={31} loop={false} style={{ marginTop: 2 }} />);
    const span = container.querySelector('span')!;
    expect(span.style.display).toBe('inline-flex');
    expect(span.style.verticalAlign).toBe('middle');
    expect(span.style.marginTop).toBe('2px');
    expect(span.style.alignItems).toBe('');
    expect(span.style.justifyContent).toBe('');
    expect(span.style.flexShrink).toBe('');
    expect(span.style.lineHeight).toBe('');
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
      expect(markup(name)).not.toContain('class="lucide');
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
  test('consumer component/props types describe the span-ref contract', () => {
    const Component: LucideIcon = library.Calendar;
    const props: LucideProps = { size: 18 };
    const ref = React.createRef<HTMLSpanElement>();
    expect(renderToStaticMarkup(<Component {...props} ref={ref} />)).toContain('width="18"');
  });
});
