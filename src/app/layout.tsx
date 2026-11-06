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
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Nitin Dogra | Full Stack Developer",
    template: "%s | Nitin Dogra",
  },
  description:
    "Nitin Dogra is a full stack developer in Delhi, India, building web applications from interface to database with React, Next.js, Node.js, and PostgreSQL.",
  applicationName: "Nitin Dogra Portfolio",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Nitin Dogra Portfolio",
    locale: "en_IN",
    title: "Nitin Dogra | Full Stack Developer",
    description:
      "Full stack developer in Delhi, India. Explore Nitin Dogra’s web projects, experience, and tools.",
    url: absoluteUrl("/"),
    images: socialImage,
  },
  twitter: {
    card: "summary",
    title: "Nitin Dogra | Full Stack Developer",
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
          <MarginRules />
          <Rails />
          <PageOrbit />
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Navbar />
          {children}
          <Toast />
          <Analytics />
          <ClientInteractiveController />
        </NavigationProvider>
      </body>
    </html>
  );
}
