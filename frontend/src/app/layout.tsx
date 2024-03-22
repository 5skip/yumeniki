import { UIProvider } from "@yamada-ui/react";
import "./globals.css";
import Main from "./Main";

export const metadata = {
  title: "yumeniki",
  description:
    "AIが夢占いをしてくれるアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
       <body >
        <UIProvider>
          <Main>
            {children}
          </Main>
        </UIProvider>
      </body>
    </html>
  );
}
