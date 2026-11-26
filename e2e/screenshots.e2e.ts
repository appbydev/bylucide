import { expect, type Page, test } from '@playwright/test';

// Regenerates the README screenshots in docs/screenshots (1280x800, light and dark).
// Skipped in the normal e2e run; use `bun run screenshots`.
test.skip(!process.env.SCREENSHOTS, 'set SCREENSHOTS=1 to regenerate docs/screenshots');
test.use({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce' });

const toCatalog = (page: Page) =>
  page.evaluate(() => {
    const top = document.getElementById('catalog')?.getBoundingClientRect().top ?? 0;
    window.scrollTo({ top: top + window.scrollY, behavior: 'instant' });
  });

const screens: { name: string; prepare: (page: Page) => Promise<void> }[] = [
  { name: 'home', prepare: async () => {} },
  { name: 'catalog', prepare: toCatalog },
  {
    name: 'search',
    prepare: async (page) => {
      await page.getByRole('textbox', { name: 'Search icons' }).fill('arrow');
      await toCatalog(page);
    },
  },
  {
    name: 'empty-search',
    prepare: async (page) => {
      await page.getByRole('textbox', { name: 'Search icons' }).fill('zzzz');
      await expect(page.getByRole('tabpanel').getByRole('status')).toBeVisible();
      await toCatalog(page);
    },
  },
];

for (const scheme of ['light', 'dark'] as const) {
  for (const screen of screens) {
    test(`${screen.name} ${scheme}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme, reducedMotion: 'reduce' });
      await page.goto('/');
      await expect(page.locator('html')).toHaveClass(scheme);
      await page.evaluate(() => document.fonts.ready);
      await screen.prepare(page);
      await page.mouse.move(0, 0);
      await page.waitForTimeout(400);
      await page.screenshot({ path: `docs/screenshots/${screen.name}-${scheme}.png` });
    });
  }
}
