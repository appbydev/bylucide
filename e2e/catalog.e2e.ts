import { expect, type Locator, test } from '@playwright/test';

const total = '1,698';

// bylucide drives icons with motion values (attributes, inline styles or transforms), so compare a snapshot of the SVG.
const svgState = (target: Locator) =>
  target
    .locator('svg')
    .first()
    .evaluate((svg) => {
      const parts = [svg.innerHTML, getComputedStyle(svg).transform];
      for (const node of Array.from(svg.querySelectorAll('*'))) parts.push(`${node.getAttribute('style')}|${getComputedStyle(node).transform}`);
      return parts.join('\n');
    });

async function expectAnimates(target: Locator, trigger: () => Promise<void>) {
  const before = await svgState(target);
  await trigger();
  await expect.poll(() => svgState(target), { timeout: 2_000 }).not.toBe(before);
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('hero shows real icons and links to the catalog', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Lucide iconsthat move');
  await expect(page.getByRole('link', { name: 'View on GitHub' })).toHaveAttribute('href', 'https://github.com/appbydev/bylucide');
  const picker = page.getByRole('radiogroup', { name: 'Preview icon' });
  await expect(picker.getByRole('radio')).toHaveCount(6);
  const rocket = picker.getByRole('radio', { name: 'rocket' });
  await expectAnimates(rocket, () => rocket.hover());
  await rocket.click();
  await expect(page.locator('.specimen code')).toHaveText('<Icon name="rocket" loop="always" />');
  await page.getByRole('link', { name: 'Browse icons' }).click();
  await expect(page).toHaveURL(/#catalog$/);
  await expect(page.getByRole('heading', { name: 'Find an icon' })).toBeInViewport();
});

test('search filters the grid, shows the empty state and clears', async ({ page }) => {
  const search = page.getByRole('textbox', { name: 'Search icons' });
  await expect(search).toHaveAttribute('placeholder', 'Search');
  await expect(page.getByText(`${total} of ${total} icons`)).toBeVisible();

  await search.fill('arrow-down');
  await expect(page.getByRole('button', { name: 'Copy arrow-down', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Copy activity', exact: true })).toHaveCount(0);

  await search.fill('zzzz');
  const empty = page.getByRole('tabpanel').getByRole('status');
  await expect(empty).toContainText('No icons match “zzzz”');
  await expect(page.getByText(`0 of ${total} icons`)).toBeVisible();
  await empty.getByRole('button', { name: 'Clear search' }).click();
  await expect(search).toHaveValue('');
  await expect(page.getByText(`${total} of ${total} icons`)).toBeVisible();

  await search.fill('x');
  await page.getByRole('button', { name: 'Clear search' }).click();
  await expect(search).toHaveValue('');
});

test('category tabs filter the icons', async ({ page }) => {
  const tabs = page.getByRole('tablist', { name: 'Icon category' });
  await expect(tabs.getByRole('tab')).toHaveCount(7);
  await expect(tabs.getByRole('tab', { name: /All icons/ })).toHaveAttribute('aria-selected', 'true');
  await tabs.getByRole('tab', { name: 'Media' }).click();
  await expect(tabs.getByRole('tab', { name: 'Media' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('button', { name: 'Copy play', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Copy arrow-down', exact: true })).toHaveCount(0);
  await expect(page.getByText(`${total} of ${total} icons`)).toHaveCount(0);
});

test('size slider resizes the icons from the keyboard', async ({ page }) => {
  const slider = page.getByRole('slider', { name: 'Icon size' });
  await expect(slider).toHaveAttribute('aria-valuenow', '28');
  await slider.focus();
  await page.keyboard.press('End');
  await expect(slider).toHaveAttribute('aria-valuenow', '48');
  await expect(page.locator('output')).toHaveText('48px');
  const box = await page.locator('.tile .glyph svg').first().boundingBox();
  expect(Math.round(box?.width ?? 0)).toBe(48);
});

test('motion modes switch the preview behaviour', async ({ page }) => {
  const modes = page.getByRole('radiogroup', { name: 'Animation behavior' });
  await expect(modes.getByRole('radio', { name: 'On hover' })).toBeChecked();
  await expect(page.getByText('Icons move when you point at them or focus them with the keyboard')).toBeVisible();
  await modes.getByRole('radio', { name: 'Always' }).click();
  await expect(page.getByText(/Every icon on screen loops/)).toBeVisible();
  await modes.getByRole('radio', { name: 'Off' }).click();
  await expect(page.getByText('Icons stay still')).toBeVisible();
});

test('each tile animates its own icon on hover and keyboard focus', async ({ page }) => {
  const tiles = page.locator('.tile');
  for (const index of [0, 7, 20]) {
    const tile = tiles.nth(index);
    const neighbour = tiles.nth(index + 1);
    await tile.scrollIntoViewIfNeeded();
    const still = await svgState(neighbour);
    // Hover the tile corner, away from the glyph: the tile, as the parent control, drives the animation.
    await expectAnimates(tile, () => tile.hover({ position: { x: 6, y: 6 } }));
    expect(await svgState(neighbour)).toBe(still);
    await page.mouse.move(0, 0);
  }
  const focused = tiles.nth(3);
  await tiles.nth(2).focus();
  await expectAnimates(focused, () => page.keyboard.press('Tab'));
  await expect(focused).toBeFocused();
});

test('copying a tile shows feedback', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  const tile = page.getByRole('button', { name: 'Copy activity', exact: true });
  await tile.click();
  await expect(tile).toHaveAttribute('data-copied', 'true');
  await expect(tile.getByText('Copied')).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('activity');
});

test('no horizontal overflow on a phone, light and dark', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const scheme of ['light', 'dark'] as const) {
    await page.emulateMedia({ colorScheme: scheme });
    await page.reload();
    await expect(page.locator('html')).toHaveClass(scheme);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBe(0);
  }
});
