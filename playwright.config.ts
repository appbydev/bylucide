import { defineConfig, devices } from '@playwright/test';

// e2e for the demo. Files end in .e2e.ts so `bun test` (unit tests) never picks them up.
// The demo is built and served with vite preview on 5419; it has no API to mock.
export default defineConfig({
  testDir: 'e2e',
  testMatch: '**/*.e2e.ts',
  // Each page renders all 1,698 animated icons, so keep few workers and generous timeouts.
  fullyParallel: true,
  workers: 2,
  timeout: 60_000,
  expect: { timeout: 10_000 },
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://127.0.0.1:5419/', trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'bun run demo:build && bun x vite preview --config demo/vite.config.ts --host 127.0.0.1',
    url: 'http://127.0.0.1:5419/',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
