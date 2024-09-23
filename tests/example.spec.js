import { test, expect } from '@playwright/test';

test('Ana sayfanın başlığını kontrol et', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Vite projenin çalıştığı portu kullan
  await expect(page).toHaveTitle(/Vite/);
});
