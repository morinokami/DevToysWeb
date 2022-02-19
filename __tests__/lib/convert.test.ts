import { convertRadix, isValidNumber } from "../../lib/convert";

describe("convert", () => {
  describe("number base", () => {
    describe("isValidNumber", () => {
      it("returns true for a decimal string", () => {
        expect(isValidNumber("123", 10)).toBe(true);
      });

      it("returns false for a non-decimal string", () => {
        expect(isValidNumber("abc", 10)).toBe(false);
      });

      it("returns true for a binary string", () => {
        expect(isValidNumber("10101", 2)).toBe(true);
      });

      it("returns false for a non-binary string", () => {
        expect(isValidNumber("123", 2)).toBe(false);
      });

      it("returns true for an octal string", () => {
        expect(isValidNumber("123", 8)).toBe(true);
      });

      it("returns false for a non-octal string", () => {
        expect(isValidNumber("789", 8)).toBe(false);
      });

      it("returns true for a hex string", () => {
        expect(isValidNumber("abc", 16)).toBe(true);
      });

      it("returns false for a non-hex string", () => {
        expect(isValidNumber("efg", 16)).toBe(false);
      });
    });

    describe("convertRadix", () => {
      it("converts a decimal string to a decimal string", () => {
        expect(convertRadix("123", 10, 10)).toBe("123");
      });

      it("converts a decimal string to a binary string", () => {
        expect(convertRadix("123", 10, 2)).toBe("1111011");
      });

      it("converts a decimal string to an octal string", () => {
        expect(convertRadix("123", 10, 8)).toBe("173");
      });

      it("converts a decimal string to a hex string", () => {
        expect(convertRadix("123", 10, 16)).toBe("7b");
      });

      it("converts a binary string to a decimal string", () => {
        expect(convertRadix("10101", 2, 10)).toBe("21");
      });

      it("converts a binary string to a binary string", () => {
        expect(convertRadix("10101", 2, 2)).toBe("10101");
      });

      it("converts a binary string to an octal string", () => {
        expect(convertRadix("10101", 2, 8)).toBe("25");
      });

      it("converts a binary string to a hex string", () => {
        expect(convertRadix("10101", 2, 16)).toBe("15");
      });

      it("converts an octal string to a decimal string", () => {
        expect(convertRadix("123", 8, 10)).toBe("83");
      });

      it("converts an octal string to a binary string", () => {
        expect(convertRadix("123", 8, 2)).toBe("1010011");
      });

      it("converts an octal string to an octal string", () => {
        expect(convertRadix("123", 8, 8)).toBe("123");
      });

      it("converts an octal string to a hex string", () => {
        expect(convertRadix("123", 8, 16)).toBe("53");
      });

      it("converts a hex string to a decimal string", () => {
        expect(convertRadix("7b", 16, 10)).toBe("123");
      });

      it("converts a hex string to a binary string", () => {
        expect(convertRadix("7b", 16, 2)).toBe("1111011");
      });

      it("converts a hex string to an octal string", () => {
        expect(convertRadix("7b", 16, 8)).toBe("173");
      });

      it("converts a hex string to a hex string", () => {
        expect(convertRadix("7b", 16, 16)).toBe("7b");
      });

      it("returns empty string if an invalid number given", () => {
        expect(convertRadix("abc", 10, 10)).toBe("");
      });
    });
  });
});
