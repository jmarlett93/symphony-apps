import { test, expect } from '@playwright/test';

test('presents the marketing page in an accessible shell', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('BreakTimerr — Remote team games');
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /Turn your next team call into playtime/,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('navigation', { name: 'Primary navigation' }),
  ).toBeVisible();
  await expect(page.locator('main#main-content')).toBeVisible();
  await expect(page.locator('header')).toHaveCSS('position', 'sticky');
  await expect(page.locator('.btr-hero-grid')).toHaveCSS('display', 'grid');

  await page.getByRole('link', { name: 'See how it works' }).click();
  await expect(page.locator('#how-it-works')).toBeInViewport();
  await expect(
    page.getByRole('heading', { name: 'Meet Rally Partners.' }),
  ).toBeVisible();
});
