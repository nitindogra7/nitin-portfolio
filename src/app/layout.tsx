import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MarginRules from "@/components/MarginRules";
import { Analytics } from "@vercel/analytics/next";
import Rails from "@/components/Rails";
import PageOrbit from "@/components/PageOrbit";
import Toast from "@/components/Toast";
import ClientInteractiveController from "@/components/ClientInteractiveController";
import { NavigationProvider } from "@/context/NavigationContext";
import { absoluteUrl, isPreviewDeployment, siteUrl, socialImage } from "@/lib/site";
import { generateRootSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nitin Dogra — Full Stack Developer & Next.js Engineer | Delhi, India",
    template: "%s | Nitin Dogra",
  },
  description:
    "Delhi-based full stack developer building high-performance web applications with React, Next.js, Node.js & PostgreSQL. View selected projects and case studies.",
  applicationName: "Nitin Dogra Portfolio",
  authors: [{ name: "Nitin Dogra", url: absoluteUrl("/") }],
  creator: "Nitin Dogra",
  publisher: "Nitin Dogra",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Nitin Dogra Portfolio",
    locale: "en_IN",
    title: "Nitin Dogra — Full Stack Developer & Next.js Engineer | Delhi, India",
    description:
      "Delhi-based full stack developer building high-performance web applications with React, Next.js, Node.js & PostgreSQL. View selected projects and case studies.",
    url: absoluteUrl("/"),
    images: socialImage,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Dogra — Full Stack Developer & Next.js Engineer | Delhi, India",
    description:
      "Delhi-based full stack developer building high-performance web applications with React, Next.js, Node.js & PostgreSQL.",
    images: socialImage,
  },
  robots: { index: !isPreviewDeployment, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const root=document.documentElement;root.dataset.theme=localStorage.getItem('nd-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM Context" />
        <link rel="alternate" type="application/json" href="/profile.json" title="Structured Profile" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateRootSchemaGraph()).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <NavigationProvider>
          <Analytics />
          <MarginRules />
          <Rails />
          <PageOrbit />
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Navbar />
          {children}
          <Toast />
          <ClientInteractiveController />
        </NavigationProvider>
      </body>
    </html>
  );
}
