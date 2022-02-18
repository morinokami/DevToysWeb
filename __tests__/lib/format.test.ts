import { formatJson } from "../../lib/format";

describe("format", () => {
  describe("formatJson", () => {
    const json = JSON.parse(`{
      "foo": "bar",
      "baz": "qux"
    }`);

    it("minifies output", () => {
      const formatted = formatJson(JSON.stringify(json));
      expect(formatted).toBe('{"foo":"bar","baz":"qux"}');
    });

    it("formats with 2-space indent", () => {
      const formatted = formatJson(JSON.stringify(json), "  ");
      expect(formatted).toBe(`{
  "foo": "bar",
  "baz": "qux"
}`);
    });

    it("formats with 4-space indent", () => {
      const formatted = formatJson(JSON.stringify(json), "    ");
      expect(formatted).toBe(`{
    "foo": "bar",
    "baz": "qux"
}`);
    });

    it("formats with tab", () => {
      const formatted = formatJson(JSON.stringify(json), "\t");
      expect(formatted).toBe(`{
\t"foo": "bar",
\t"baz": "qux"
}`);
    });
  });
});
