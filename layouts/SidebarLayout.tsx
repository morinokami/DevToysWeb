import React from "react"

const SidebarLayout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto px-4">
      <div className="hidden lg:block fixed z-20 inset-0 right-auto w-[19.5rem] px-4 overflow-y-auto">
        <ul>
          <li>All tools</li>
          <li>
            Converters
            <ul>
              <li>JSON &lt;&gt; YAML</li>
              <li>Number Base</li>
            </ul>
          </li>
          <li>
            Encoders / Decoders
            <ul>
              <li>HTML</li>
              <li>URL</li>
              <li>Base 64</li>
              <li>GZip</li>
              <li>JWT Decoder</li>
            </ul>
          </li>
          <li>
            Formatters
            <ul>
              <li>JSON</li>
              <li>SQL</li>
              <li>XML</li>
            </ul>
          </li>
          <li>
            Generators
            <ul>
              <li>Hash</li>
              <li>UUID</li>
              <li>Lorem Ipsum</li>
              <li>Checksum</li>
            </ul>
          </li>
          <li>
            Text
            <ul>
              <li>Inspector &amp; Case Converter</li>
              <li>Regex Tester</li>
              <li>Text Diff</li>
              <li>Markdown Preview</li>
            </ul>
          </li>
          <li>
            Graphic
            <ul>
              <li>Color Blindness Simulator</li>
              <li>PNG / JPEG Compressor</li>
              <li>Image Converter</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="lg:pl-[19.5rem]">{children}</div>
    </div>
  )
}

export default SidebarLayout