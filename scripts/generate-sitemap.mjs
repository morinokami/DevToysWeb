import { writeFileSync } from "fs";
import prettier from "prettier";

const locales = ["en", "ja"];

const paths = [
  "",
  "/converters",
  "/converters/json-yaml",
  "/converters/number-base",
  "/encoders-decoders",
  "/encoders-decoders/html",
  "/encoders-decoders/url",
  "/encoders-decoders/base64",
  "/encoders-decoders/gzip",
  "/encoders-decoders/jwt-decider",
  "/formatters",
  "/formatters/json",
  "/formatters/sql",
  "/formatters/xml",
  "/generators",
  "/generators/hash",
  "/generators/uuid",
  "/generators/lorem-ipsum",
  "/generators/checksum",
  "/text",
  "/text/markdown-preview",
  "/settings",
];

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc");

  const urls = [];
  for (const locale of locales) {
    for (const path of paths) {
      if (locale === "en") {
        urls.push(`https://devtoys.vercel.app${path}`);
      } else {
        urls.push(`https://devtoys.vercel.app/${locale}${path}`);
      }
    }
  }

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map((url) => {
            return `
              <url>
                  <loc>${url}</loc>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", formatted);
}

generate();
