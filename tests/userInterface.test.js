import { describe, expect, it } from "vitest";
import { isActivePath } from "js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true for root path '/' when currentPath is exactly '/'", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("returns true when currentPath is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when currentPath includes href", () => {
    expect(isActivePath("/about", "/about/venue")).toBe(true);
  });

  it("returns false when currentPath does not match", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
  });
});
