import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript, defaultConfig } from "@yamada-ui/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
