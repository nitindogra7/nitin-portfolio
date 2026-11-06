import type { Metadata } from "next";
import ThankYouRedirect from "@/components/ThankYouRedirect";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your message has been submitted.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main id="main" className="wrap">
      <ThankYouRedirect />
    </main>
  );
}
