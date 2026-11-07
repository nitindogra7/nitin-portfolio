import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MarginRules from "@/components/MarginRules";
import { Analytics } from "@vercel/analytics/next"
import Rails from "@/components/Rails";
import PageOrbit from "@/components/PageOrbit";
import Toast from "@/components/Toast";
import ClientInteractiveController from "@/components/ClientInteractiveController";
import { NavigationProvider } from "@/context/NavigationContext";
import { absoluteUrl, isPreviewDeployment, siteUrl, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nitin Dogra | Full Stack Developer in Delhi, India",
    template: "%s | Nitin Dogra",
  },
  description:
    "Nitin Dogra is a Delhi-based full stack developer building web applications with React, Next.js, Node.js, and PostgreSQL. Explore his projects, experience, and contact details.",
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
    title: "Nitin Dogra | Full Stack Developer in Delhi, India",
    description:
      "Delhi-based full stack developer building web applications with React, Next.js, Node.js, and PostgreSQL. Explore Nitin Dogra’s projects and experience.",
    url: absoluteUrl("/"),
    images: socialImage,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Dogra | Full Stack Developer in Delhi, India",
    description:
      "Full stack developer in Delhi, India. Explore Nitin Dogra’s web projects and experience.",
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
