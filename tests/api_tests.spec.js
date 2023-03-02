const { test, expect } = require('@playwright/test');

test('get a page and verify status 200', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('get the main page', async ({ request, baseURL }) => {
    const issues = await request.get(`${baseURL}/docs/intro`);
    expect(issues.ok()).toBeTruthy();
    expect(issues.status()).toBe(200);
});

