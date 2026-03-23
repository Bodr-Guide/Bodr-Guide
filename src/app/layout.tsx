import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const SITE_URL = "https://borderwiki.com";
const SITE_NAME = "보더위키(BorderWiki)";
const DEFAULT_TITLE = "보더위키(BorderWiki) | 국가별 입국·비자·여행 준비 가이드";
const DEFAULT_DESCRIPTION =
  "보더위키는 한국인 여행자를 위한 국가별 입국 정보, 비자, 무비자 체류 기간, 전자비자, 여행 체크리스트, 여행 준비 가이드를 제공하는 여행 정보 사이트입니다.";
const DEFAULT_KEYWORDS = [
  "보더위키",
  "borderwiki",
  "국가별 입국 정보",
  "비자 정보",
  "무비자",
  "전자비자",
  "입국 규정",
  "해외여행 준비",
  "여행 체크리스트",
  "여행 준비물",
  "출국 준비",
  "여행 준비 가이드",
];

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: "%s | 보더위키(BorderWiki)",
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "ko_KR",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "보더위키 BorderWiki 아이콘",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "travel",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "BorderWiki",
      alternateName: "보더위키",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      sameAs: [SITE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BorderWiki",
      alternateName: "보더위키",
      inLanguage: "ko-KR",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
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
        <meta
          name="naver-site-verification"
          content="9787849b23d7daf690f8218ccfc84763c7f52c5a"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQGDP8SC');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MHWTZEWCQ2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MHWTZEWCQ2');`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vls12kpibh");`,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQGDP8SC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
