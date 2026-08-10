"use client";
import FloatingNav from "./FloatingNav";
import Footer from "./Footer";
import DotBackground from "./DotBackground";
import { useAuth } from "./AuthProvider";
import { ParallaxBackground } from "./ParallaxBackground";
import { Terminal } from "./Terminal";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { isAuth, toggleLogin } = useAuth();

  return (
    <div className="relative min-h-screen bg-bg dark:bg-bg-dark text-textPrimary dark:text-textPrimary-dark">
      <FloatingNav />
      <div className="relative mx-auto max-w-shell px-5 pb-[30px]">
        <ParallaxBackground />
        <DotBackground />
        <div className="relative z-[1]">{children}</div>
      </div>
      <Footer />
      <Terminal />
    </div>
  );
}
