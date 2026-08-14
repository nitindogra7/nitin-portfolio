"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, SectionTitle, Magnetic } from "../Motion";
import { useAuth } from "../AuthProvider";
import { AuthButton } from "../AuthButton";

const pillBtn =
  "inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-borderc dark:border-borderc-dark px-3.5 py-2 text-[11px] font-semibold transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5 hover:border-borderStrong dark:hover:border-borderStrong-dark bg-surface text-textPrimary dark:bg-surface-dark dark:text-textPrimary-dark";

type DBLog = {
  id: string;
  logs: string;
  user_name?: string | null;
  user_avatar?: string | null;
  user_email?: string | null;
  created_at: string;
};

function formatTime(dateStr: string) {
  try {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins} min${mins > 1 ? "s" : ""} ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return "Recent";
  }
}

const COLORS = ["#3b82f6", "#a855f7", "#22c55e", "#f97316", "#ec4899", "#06b6d4"];

export default function GuestbookTeaser() {
  const { isAuth, user } = useAuth();
  const [logs, setLogs] = useState<DBLog[]>([]);
  const [fetching, setFetching] = useState(true);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    (user?.email ? user.email.split("@")[0] : "Authenticated User");

  const avatarUrl =
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.picture ||
    `https://api.dicebear.com/7.x/notionists/svg?seed=${user?.email || "Guest"}&backgroundColor=1a1a1a`;

  useEffect(() => {
    async function fetchLogs() {
      try {
        const res = await fetch("/api/logs");
        const data = await res.json();
        if (data.success && Array.isArray(data.logs)) {
          setLogs(data.logs);
        }
      } catch (err) {
        console.error("Failed to fetch logs:", err);
      } finally {
        setFetching(false);
      }
    }
    fetchLogs();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!draft.trim() || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          logs: draft.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data.message || data.error);
        return;
      }

      if (data.logs) {
        setLogs((prev) => [data.logs, ...prev]);
      } else {
        setLogs((prev) => [
          {
            id: Math.random().toString(),
            logs: draft.trim(),
            user_name: displayName,
            user_avatar: avatarUrl,
            user_email: user?.email,
            created_at: new Date().toISOString(),
          },
          ...prev,
        ]);
      }

      setDraft("");
    } catch (error) {
      console.error("Failed to submit log:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-[26px]" id="guestbook">
      <Reveal>
        <div className="mb-3.5 flex items-center justify-between">
          <SectionTitle index="04.">System Logs</SectionTitle>
          <Link href="/logs" className="text-[10.5px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70">
            View more <i className="fa-solid fa-arrow-right text-[9px]" />
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="mb-3.5 font-mono text-[11px] text-textSecondary dark:text-textSecondary-dark">
          &gt; nitindogra App Purpose: Sign in with Google to post verified public system logs and guestbook notes.
        </p>
      </Reveal>
      <Reveal delay={0.5} className="mb-6">
        <div className="rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-6">
          {!isAuth ? (
            <div className="py-6 text-center">
              <i className="mb-2.5 block text-2xl text-textMuted dark:text-textMuted-dark fa-solid fa-lock" />
              <p className="mb-1 text-xs font-semibold text-textPrimary dark:text-textPrimary-dark">
                Google Authentication Required
              </p>
              <p className="mb-3.5 text-[10.5px] text-textSecondary dark:text-textSecondary-dark max-w-sm mx-auto">
                Authentication with Google verifies your user identity to submit public logs and guestbook notes on nitindogra.
              </p>
              <AuthButton className="mx-auto" />
            </div>
          ) : (
            <div>
              <div className="mb-3.5 flex items-center gap-2.5 border-b border-borderc dark:border-borderc-dark pb-3.5">
                <img
                  src={avatarUrl}
                  alt={displayName}
                  className="h-8 w-8 rounded-full object-cover bg-surfaceHover dark:bg-surfaceHover-dark"
                />
                <div>
                  <p className="text-[11.5px] font-semibold text-textPrimary dark:text-textPrimary-dark">{displayName}</p>
                  <p className="font-mono text-[9.5px] text-textPrimary dark:text-textPrimary-dark">
                    {user?.email ? `@${user.email.split("@")[0]}` : "google_auth_verified"}
                  </p>
                </div>
                <AuthButton className="ml-auto scale-90 origin-right" />
              </div>
              <form onSubmit={submit}>
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  disabled={loading}
                  placeholder="Write your log message here..."
                  className="mb-2.5 h-[70px] w-full resize-none rounded-[9px] border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark px-3 py-2.5 font-mono text-[11px] text-textPrimary dark:text-textPrimary-dark transition-all duration-200 hover:border-borderStrong dark:hover:border-borderStrong-dark focus:border-textPrimary dark:focus:border-textPrimary-dark focus:outline-none focus:ring-4 focus:ring-borderc dark:focus:ring-borderc-dark disabled:opacity-50"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9.5px] text-textMuted dark:text-textMuted-dark">
                    Markdown supported
                  </span>
                  <Magnetic
                    as={motion.button}
                    strength={0.3}
                    maxOffset={5}
                    type="submit"
                    disabled={loading || !draft.trim()}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-[9px] border-none bg-textPrimary px-4 py-2 text-[11px] font-bold text-bg transition-all duration-[400ms] ease-smooth hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 dark:bg-textPrimary-dark dark:text-bg-dark"
                  >
                    {loading ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin text-[10px]" /> Pushing...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane text-[10px]" /> Push Log
                      </>
                    )}
                  </Magnetic>
                </div>
              </form>
            </div>
          )}
        </div>
      </Reveal>

      {fetching ? (
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-16 animate-pulse rounded-xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-4 opacity-50"
            />
          ))}
        </div>
      ) : logs.length === 0 ? (
        <div className="rounded-xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-6 text-center">
          <p className="font-mono text-[11px] text-textMuted dark:text-textMuted-dark">
            No system logs posted yet. Be the first to leave a log!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {logs.slice(0, 3).map((l, i) => {
            const color = COLORS[i % COLORS.length];
            const name = l.user_name || "Verified Visitor";
            const initial = (name[0] || "V").toUpperCase();
            const avatar =
              l.user_avatar ||
              (l.user_email
                ? `https://api.dicebear.com/7.x/notionists/svg?seed=${l.user_email}&backgroundColor=1a1a1a`
                : `https://api.dicebear.com/7.x/notionists/svg?seed=${l.id || name}&backgroundColor=1a1a1a`);

            return (
              <Reveal key={l.id || i} delay={i * 0.2}>
                <div className="rounded-xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-5">
                  <div className="mb-1.5 flex items-center gap-2">
                    <img
                      src={avatar}
                      alt={name}
                      referrerPolicy="no-referrer"
                      className="h-6 w-6 rounded-full object-cover flex-shrink-0 bg-surfaceHover dark:bg-surfaceHover-dark"
                    />
                    <span className="text-[11px] font-semibold text-textPrimary dark:text-textPrimary-dark">
                      {name}
                    </span>
                    <span className="font-mono text-[9.5px] text-textMuted dark:text-textMuted-dark">
                      {formatTime(l.created_at)}
                    </span>
                  </div>
                  <p className="ml-8 font-mono text-[10.5px] text-textSecondary dark:text-textSecondary-dark">
                    &gt; {l.logs}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      )}

      {logs.length > 3 && (
        <div className="mt-4 flex justify-center">
          <Link href="/logs" className={pillBtn}>
            <i className="fa-solid fa-angle-down" /> Show More Logs ({logs.length})
          </Link>
        </div>
      )}
    </section>
  );
}
