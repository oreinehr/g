import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gustavo Reinehr | Film & Content Editor",
  description:
    "Portfoliod de Gustavo Reinehr",
  generator: "v0.dev",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
import "./globals.css";
