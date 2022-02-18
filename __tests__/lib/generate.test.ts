import { generateUuid } from "../../lib/generate";

describe("generate", () => {
  describe("generateUuid", () => {
    it("generates v1 uuid without hyphens", () => {
      const uuid = generateUuid(1, false, false);
      expect(uuid).toMatch(
        /[a-z0-9]{8}[a-z0-9]{4}[a-z0-9]{4}[a-z0-9]{4}[a-z0-9]{12}/
      );
    });

    it("generates v4 uuid without hyphens", () => {
      const uuid = generateUuid(4, false, false);
      expect(uuid).toMatch(
        /[a-z0-9]{8}[a-z0-9]{4}[a-z0-9]{4}[a-z0-9]{4}[a-z0-9]{12}/
      );
    });

    it("generates v1 uuid with hyphens", () => {
      const uuid = generateUuid(1, true, false);
      expect(uuid).toMatch(
        /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/
      );
    });

    it("generates v4 uuid with hyphens", () => {
      const uuid = generateUuid(4, true, false);
      expect(uuid).toMatch(
        /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/
      );
    });

    it("generates uppercased v1 uuid", () => {
      const uuid = generateUuid(1, true, true);
      expect(uuid).toMatch(
        /[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}/
      );
    });

    it("generates uppercased v4 uuid", () => {
      const uuid = generateUuid(4, true, true);
      expect(uuid).toMatch(
        /[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}/
      );
    });
  });
});
