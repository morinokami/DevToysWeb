import {
  compress,
  decodeUrl,
  decompress,
  encodeUrl,
} from "../../lib/encode-decode";

describe("encode-decode", () => {
  describe("URL", () => {
    describe("encodeUrl", () => {
      it("encodes a url", () => {
        expect(encodeUrl("https://www.google.com")).toEqual(
          "https%3A%2F%2Fwww.google.com"
        );
      });

      it("returns an empty string if the input is malformed", () => {
        expect(encodeUrl("\uD800")).toEqual("");
      });
    });

    describe("decodeUrl", () => {
      it("decodes a url", () => {
        expect(decodeUrl("https%3A%2F%2Fwww.google.com")).toEqual(
          "https://www.google.com"
        );
      });

      it("returns an empty string if the input is malformed", () => {
        expect(decodeUrl("%E0%A4%A")).toEqual("");
      });
    });
  });

  describe("GZip", () => {
    describe("compress", () => {
      it("compresses a string", () => {
        expect(compress("hello")).toEqual(
          "H4sIAAAAAAAAA8tIzcnJBwCGphA2BQAAAA=="
        );
      });
    });

    describe("decompress", () => {
      it("decompresses a string", () => {
        expect(decompress("H4sIAAAAAAAAA8tIzcnJBwCGphA2BQAAAA==")).toEqual(
          "hello"
        );
      });

      it("returns an empty string if the input is invalid", () => {
        expect(decompress("meow")).toEqual("");
      });
    });
  });
});
