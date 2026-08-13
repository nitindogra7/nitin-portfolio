import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Privacy Policy | Nitin Dogra",
  description: "Privacy Policy for Nitin Dogra's portfolio website and Google OAuth authentication.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        index="Legal // 01."
        title="Privacy Policy"
        subtitle="This privacy policy details how user information is handled when authenticating via Google on this website."
      />

      <section className="py-6">
        <Reveal delay={0.1}>
          <div className="space-y-6 rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-6 text-xs text-textSecondary dark:text-textSecondary-dark leading-relaxed">
            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                1. Overview
              </h2>
              <p>
                This website (nitindogra.space / portfolio) respects your privacy. We only collect basic profile information when you explicitly choose to log in using Google OAuth for features like leaving public system logs or guestbook entries.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                2. Information We Collect
              </h2>
              <p>
                When you sign in with Google, we access only basic profile details provided by Google Auth, including:
              </p>
              <ul className="ml-5 mt-2 list-disc space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your profile picture URL</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                3. How Information is Used
              </h2>
              <p>
                The information collected is strictly used to authenticate your identity for user interactions on this portfolio. We do not sell, share, rent, or distribute your personal information to any third parties or marketing platforms.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                4. Data Security & Storage
              </h2>
              <p>
                Authentication credentials and sessions are securely managed using Supabase Authentication with encrypted HTTPS connections.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                5. Contact
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy, please feel free to reach out via the contact section of this website.
              </p>
            </div>

            <p className="pt-2 font-mono text-[10px] text-textMuted dark:text-textMuted-dark">
              Last updated: August 2026
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
