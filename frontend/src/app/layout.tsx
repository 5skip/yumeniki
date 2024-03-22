import { UIProvider } from "@yamada-ui/react";
import "./globals.css";
import Main from "./Main";

export const metadata = {
  title: "yumeniki",
  description:
    "AIが夢占いをしてくれるアプリ",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className="min-h-screen bg-purple md:bg-purple-100">
          <UIProvider>
            <Main>
              {children}
            </Main>
          </UIProvider>
      </body>
    </html>
  );
}
