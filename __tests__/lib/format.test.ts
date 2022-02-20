import { formatJson } from "../../lib/format";

describe("format", () => {
  describe("Json", () => {
    describe("formatJson", () => {
      const json = JSON.parse(`{
      "foo": "bar",
      "baz": "qux"
    }`);

      it("minifies the output", () => {
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

      it("returns an empty string if the input is not a valid json", () => {
        const formatted = formatJson('{ "foo": "bar" "baz": "qux" }');
        expect(formatted).toBe("");
      });
    });
  });
});
