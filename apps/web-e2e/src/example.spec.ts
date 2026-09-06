import { test, expect } from '@playwright/test';

test('provides an accessible application shell', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Symphony Apps');
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Bring people together through play.',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('navigation', { name: 'Primary navigation' }),
  ).toBeVisible();
  await expect(page.locator('main#main-content')).toBeVisible();
});
