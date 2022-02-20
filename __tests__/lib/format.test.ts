import { formatJson, formatSql, formatXml } from "../../lib/format";

describe("format", () => {
  describe("Json", () => {
    describe("formatJson", () => {
      const json = JSON.parse(`{
      "foo": "bar",
      "baz": "qux"
    }`);

      it("minifies the output", () => {
        const formatted = formatJson(JSON.stringify(json));
        expect(formatted).toEqual('{"foo":"bar","baz":"qux"}');
      });

      it("formats the output with 2-space indent", () => {
        const formatted = formatJson(JSON.stringify(json), "  ");
        expect(formatted).toEqual(`{
  "foo": "bar",
  "baz": "qux"
}`);
      });

      it("formats the output with 4-space indent", () => {
        const formatted = formatJson(JSON.stringify(json), "    ");
        expect(formatted).toEqual(`{
    "foo": "bar",
    "baz": "qux"
}`);
      });

      it("formats the output with tab", () => {
        const formatted = formatJson(JSON.stringify(json), "\t");
        expect(formatted).toEqual(`{
\t"foo": "bar",
\t"baz": "qux"
}`);
      });

      it("returns an empty string if the input is not a valid json", () => {
        const formatted = formatJson('{ "foo": "bar" "baz": "qux" }');
        expect(formatted).toEqual("");
      });
    });
  });

  describe("SQL", () => {
    describe("formatSql", () => {
      it("formats the output with 2-space indent", () => {
        const formatted = formatSql(
          "SELECT * FROM users WHERE id = 1;",
          "sql",
          "  "
        );
        expect(formatted).toEqual(`SELECT
  *
FROM
  users
WHERE
  id = 1;`);
      });

      it("formats the output with 4-space indent", () => {
        const formatted = formatSql(
          "SELECT * FROM users WHERE id = 1;",
          "sql",
          "    "
        );
        expect(formatted).toEqual(`SELECT
    *
FROM
    users
WHERE
    id = 1;`);
      });

      it("returns an empty string if the input is also an empty string", () => {
        const formatted = formatSql("", "sql", "  ");
        expect(formatted).toEqual("");
      });
    });
  });

  describe("XML", () => {
    describe("formatXml", () => {
      it("formats the output with 2-space indent", () => {
        const formatted = formatXml(
          '<root><content><p xml:space="preserve">This is <b>some</b> content.</content></p>',
          "  "
        );
        expect(formatted).toEqual(`<root>
  <content>
    <p xml:space="preserve">This is <b>some</b> content.</p>
  </content>
</root>`);
      });

      it("formats the output with 4-space indent", () => {
        const formatted = formatXml(
          '<root><content><p xml:space="preserve">This is <b>some</b> content.</content></p>',
          "    "
        );
        expect(formatted).toEqual(`<root>
    <content>
        <p xml:space="preserve">This is <b>some</b> content.</p>
    </content>
</root>`);
      });

      it("returns an empty string if the input is also an empty string", () => {
        const formatted = formatXml("", "  ");
        expect(formatted).toEqual("");
      });
    });
  });
});
