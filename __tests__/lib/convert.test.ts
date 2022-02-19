import { convertRadix, isValidNumber, toJson, toYaml } from "../../lib/convert";

describe("convert", () => {
  describe("JSON <> YAML", () => {
    describe("toYaml", () => {
      it("converts JSON to YAML", () => {
        const json = `{
          "foo": "bar",
          "baz": "qux"
        }`;
        const yaml = toYaml(json, 2);
        expect(yaml).toBe("foo: bar\nbaz: qux\n");
      });

      it("converts JSON to YAML with 2-space indent", () => {
        const json = `{
          "foo": [
            1,
            2
          ]
        }`;
        const yaml = toYaml(json, 2);
        expect(yaml).toBe(`foo:\n  - 1\n  - 2\n`);
      });

      it("returns an empty string if the input is not a valid JSON", () => {
        const yaml = toYaml('{ "foo": "bar" "baz": "qux" }', 2);
        expect(yaml).toBe("");
      });
    });

    describe("toJson", () => {
      it("converts YAML to JSON", () => {
        const yaml = `foo: bar
baz: qux
`;
        const json = toJson(yaml, 2);
        expect(json).toBe(`{
  "foo": "bar",
  "baz": "qux"
}`);
      });

      it("converts YAML to JSON with 2-space indent", () => {
        const yaml = `foo:
  - 1
  - 2
`;
        const json = toJson(yaml, 2);
        expect(json).toBe(`{
  "foo": [
    1,
    2
  ]
}`);
      });

      it("returns an empty string if the input is not a valid YAML", () => {
        const json = toJson("foo: bar baz: qux", 2);
        expect(json).toBe("");
      });
    });
  });

  describe("Number Base", () => {
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

      it("returns an empty string if an invalid number given", () => {
        expect(convertRadix("abc", 10, 10)).toBe("");
      });
    });
  });
});
