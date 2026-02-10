import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BodrGuide — Travel Without Borders",
  description:
    "대한민국 여권으로 떠나는 가장 자유로운 여행. 전 세계 입국 규정을 한눈에 확인하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
