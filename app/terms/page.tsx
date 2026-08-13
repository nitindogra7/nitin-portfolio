import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Terms of Service | Nitin Dogra",
  description: "Terms of Service for Nitin Dogra's portfolio website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        index="Legal // 02."
        title="Terms of Service"
        subtitle="Please read these terms of service carefully before using this website or authenticating with your account."
      />

      <section className="py-6">
        <Reveal delay={0.1}>
          <div className="space-y-6 rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-6 text-xs text-textSecondary dark:text-textSecondary-dark leading-relaxed">
            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using nitindogra.space (the &quot;Website&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the site or its features.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                2. User Authentication & Guestbook Logs
              </h2>
              <p>
                Certain features, such as submitting guestbook entries or public system log messages, require authentication via Google OAuth. You agree not to post spam, abusive, defamatory, or harmful content. We reserve the right to remove any log entry at our sole discretion.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                3. Intellectual Property
              </h2>
              <p>
                All content, code, projects, designs, and text presented on this website are the property of Nitin Dogra unless explicitly stated otherwise. Unauthorized copying or redistribution without attribution is prohibited.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                4. Limitation of Liability
              </h2>
              <p>
                This website and its services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind. Nitin Dogra shall not be liable for any direct, indirect, or incidental damages arising out of your use of the website.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-mono text-sm font-bold text-textPrimary dark:text-textPrimary-dark">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Continued use of the website following changes constitutes acceptance of the updated terms.
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
