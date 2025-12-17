import { describe, expect, it, beforeEach } from "vitest";
import { getUsername } from "/js/utils/storage.js";

describe("storage functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getUsername", () => {
    it("retrieves username from localStorage", () => {
      localStorage.setItem("user", JSON.stringify({ name: "testuser" }));

      const retrievedUser = getUsername();
      expect(retrievedUser).toBe("testuser");
    });

    it("returns null if no user is found", () => {
      const user = getUsername();
      expect(user).toBeNull();
    });
  });
});
