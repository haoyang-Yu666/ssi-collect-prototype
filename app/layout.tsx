import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSI Collect 交互原型",
  description: "SSI Collect 设备连接、配对编组和采集流程原型。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
