import { decodeUrl, encodeUrl } from "../../lib/encode-decode";

describe("encode-decode", () => {
  describe("URL", () => {
    describe("encodeUrl", () => {
      it("encodes a url", () => {
        expect(encodeUrl("https://www.google.com")).toBe(
          "https%3A%2F%2Fwww.google.com"
        );
      });

      it("returns an empty string if the input is malformed", () => {
        expect(encodeUrl("\uD800")).toBe("");
      });
    });

    describe("decodeUrl", () => {
      it("decodes a url", () => {
        expect(decodeUrl("https%3A%2F%2Fwww.google.com")).toBe(
          "https://www.google.com"
        );
      });

      it("returns an empty string if the input is malformed", () => {
        expect(decodeUrl("%E0%A4%A")).toBe("");
      });
    });
  });
});
