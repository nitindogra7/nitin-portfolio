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
    default: "Nitin Dogra | Full-Stack Developer in Delhi — Next.js, SaaS & Web Apps",
    template: "%s | Nitin Dogra",
  },
  description:
    "Portfolio of Nitin Dogra (Nitin), a Full-Stack Developer in New Delhi, India. I build fast, clean websites, SaaS MVPs, and web apps with Next.js, React, Node.js & TypeScript.",
  applicationName: "Nitin Dogra Portfolio",
  authors: [{ name: "Nitin Dogra", url: absoluteUrl("/") }],
  creator: "Nitin Dogra",
  publisher: "Nitin Dogra",
  keywords: [
    "Nitin Dogra",
    "Nitin",
    "Nitin Dogra portfolio",
    "Nitin Dogra developer",
    "Nitin Dogra full stack developer",
    "Nitin Dogra web developer",
    "Nitin Dogra Next.js developer",
    "Nitin Dogra Delhi",
    "Nitin Dogra New Delhi",
    "Nitin Dogra India",
    "Nitin Dogra Contra",
    "Nitin Dogra SaaS developer",
    "Nitin developer Delhi",
    "full stack developer in Delhi",
    "full stack developer in New Delhi",
    "best full stack developer in Delhi",
    "freelance full stack developer in Delhi",
    "hire full stack developer Delhi",
    "Next.js developer in Delhi",
    "SaaS developer in Delhi",
    "full stack developer India",
    "hire full stack developer India",
    "best freelance full stack developer India",
    "freelance Next.js developer India",
    "SaaS MVP developer India",
    "Next.js App Router developer",
    "React.js full stack engineer",
    "TypeScript full stack developer",
    "Supabase full stack developer",
    "SaaS MVP development services",
    "Micro-SaaS product development",
    "custom web application development",
    "high-converting landing page development",
  ],
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en": absoluteUrl("/"),
      "en-IN": absoluteUrl("/"),
      "en-US": absoluteUrl("/"),
      "en-GB": absoluteUrl("/"),
      "x-default": absoluteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    siteName: "Nitin Dogra Portfolio",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    title: "Nitin Dogra | Full-Stack Developer in Delhi — Next.js, SaaS & Web Apps",
    description:
      "Portfolio of Nitin Dogra (Nitin), a Full-Stack Developer in New Delhi, India. I build fast, clean websites, SaaS MVPs, and web apps with Next.js, React, Node.js & TypeScript.",
    url: absoluteUrl("/"),
    images: socialImage,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Dogra | Full-Stack Developer in Delhi — Next.js, SaaS & Web Apps",
    description:
      "Portfolio of Nitin Dogra (Nitin), a Full-Stack Developer in New Delhi, India. Fast, clean websites, SaaS MVPs, and web apps with Next.js, React, Node.js & TypeScript.",
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
        <meta name="author" content="Nitin Dogra" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://rsms.me" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
        <link
          rel="alternate"
          type="text/markdown"
          href="/llms.txt"
          title="Nitin Dogra LLM Portfolio Summary"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="Nitin Dogra Full LLM Context"
        />
        <link
          rel="alternate"
          type="application/json"
          href="/profile.json"
          title="Nitin Dogra Structured Profile"
        />
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
