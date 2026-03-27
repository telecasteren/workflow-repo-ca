import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  /** Tests if user can login.
   * If the test user in env doesn't work,
   * create a new user with register form after running the project
   */
  test("user can login", async ({ page }) => {
    await page.goto("/login/");

    // Wait for form to be ready
    await expect(page.locator('input[name="email"]')).toBeVisible();

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await Promise.all([
      page.waitForURL("/", { timeout: 10000 }),
      page.getByRole("button", { name: "Login" }).click(),
    ]);

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  /** Tests if user can login with wrong password */
  test("wrong password shows error message", async ({ page }) => {
    await page.goto("/login/");

    await expect(page.locator('input[name="email"]')).toBeVisible();

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("kgjtntrjgghrtnhnrth");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
