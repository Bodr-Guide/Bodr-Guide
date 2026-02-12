import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "BorderWiki — Travel Without Borders",
  description:
    "흩어진 여행 정보, 여기서 끝. 출입국, 교통, 숙소, 맛집까지 한 곳에서.",
};

// 페이지 로드 시 깜빡임(FOUC) 방지: SSR 단계에서 dark 클래스를 미리 적용
const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    if (t === 'light') return;
    if (t === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
