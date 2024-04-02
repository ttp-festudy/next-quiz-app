import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "프론트엔드 면접 퀴즈앱",
  description: "TTP에서 만든 프론트엔드 개발자를 위한 퀴즈앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
