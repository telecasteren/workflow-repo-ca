import { test, expect } from "@playwright/test";

/** Tests if user can navigate to home,
 * click the first venue and see "Venue details" in the heading.
 */

test.describe("Venue list navigation", () => {
  test("navigates to home and clicks first venue in the list", async ({
    page,
  }) => {
    await page.goto("/");

    await page.locator("#venue-container a").first().waitFor();

    const firstVenue = page.locator("#venue-container a").first();
    await Promise.all([page.waitForURL("/venue/**"), firstVenue.click()]);

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
