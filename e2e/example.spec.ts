import { test, expect } from '@playwright/test';

test("ouverture de la page", async({ page }) => {
  await page.goto('http://127.0.0.1:5173/')
})