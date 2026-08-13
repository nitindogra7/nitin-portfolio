"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Reveal, Magnetic } from "@/components/Motion";
import { useAuth } from "@/components/AuthProvider";
import { AuthButton } from "@/components/AuthButton";
import { LOGS } from "@/lib/data";

export default function LogsPage() {
  const { isAuth } = useAuth();
  const [logs, setLogs] = useState(LOGS);
  const [draft, setDraft] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setLogs([{ name: "Guest User", initial: "G", color: "#f2f2f2", time: "Just now", msg: draft.trim() }, ...logs]);
    setDraft("");
  };

  const stats = [
    { label: "Total logs", value: logs.length.toString() },
    { label: "Unique visitors", value: new Set(logs.map((l) => l.name)).size.toString() },
    { label: "This week", value: logs.filter((l) => /hour|day|Just now/i.test(l.time)).length.toString() },
  ];

  return (
    <>
      <PageHeader
        index="04. Logs"
        title="System logs"
        subtitle="A public guestbook — every visitor who's authenticated and left a trace. Login with Google to add your own."
      />

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-4.5 text-center transition-all duration-[400ms] ease-smooth hover:-translate-y-1 hover:border-borderStrong dark:hover:border-borderStrong-dark hover:shadow-[0_14px_28px_rgba(0,0,0,0.2)]"
              >
                <p className="mb-1 text-xl font-bold text-textPrimary dark:text-textPrimary-dark">{s.value}</p>
                <p className="text-[10px] text-textMuted dark:text-textMuted-dark">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-[26px]">
        <Reveal>
          <div className="rounded-2xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-6">
            {!isAuth ? (
              <div className="py-6 text-center">
                <i className="mb-2.5 block text-2xl text-textMuted dark:text-textMuted-dark fa-solid fa-lock" />
                <p className="mb-1 text-xs font-semibold text-textPrimary dark:text-textPrimary-dark">
                  Authentication Required
                </p>
                <p className="mb-3.5 text-[10.5px] text-textSecondary dark:text-textSecondary-dark">
                  You must be logged in to leave a system log.
                </p>
                <AuthButton className="mx-auto" />
              </div>
            ) : (
              <div>
                <div className="mb-3.5 flex items-center gap-2.5 border-b border-borderc dark:border-borderc-dark pb-3.5">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Guest&backgroundColor=1a1a1a"
                    alt="Guest avatar"
                    className="h-8 w-8 rounded-full bg-surfaceHover dark:bg-surfaceHover-dark"
                  />
                  <div>
                    <p className="text-[11.5px] font-semibold text-textPrimary dark:text-textPrimary-dark">Guest User</p>
                    <p className="font-mono text-[9.5px] text-textPrimary dark:text-textPrimary-dark">
                      google_auth_verified
                    </p>
                  </div>
                  <AuthButton className="ml-auto scale-90 origin-right" />
                </div>
                <form onSubmit={submit}>
                  <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Write your log message here..."
                    className="mb-2.5 h-[70px] w-full resize-none rounded-[9px] border border-borderc dark:border-borderc-dark bg-surfaceHover dark:bg-surfaceHover-dark px-3 py-2.5 font-mono text-[11px] text-textPrimary dark:text-textPrimary-dark transition-all duration-200 hover:border-borderStrong dark:hover:border-borderStrong-dark focus:border-textPrimary dark:focus:border-textPrimary-dark focus:outline-none focus:ring-4 focus:ring-borderc dark:focus:ring-borderc-dark"
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
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-[9px] border-none bg-textPrimary px-4 py-2 text-[11px] font-bold text-bg transition-all duration-[400ms] ease-smooth hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-[0.98] dark:bg-textPrimary-dark dark:text-bg-dark"
                    >
                      <i className="fa-solid fa-paper-plane text-[10px]" /> Push Log
                    </Magnetic>
                  </div>
                </form>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      <section className="py-2.5 pb-10">
        <div className="flex flex-col gap-2">
          {logs.map((l, i) => (
            <Reveal key={l.name + i} delay={i * 0.2}>
              <div className="rounded-xl border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark p-5">
                <div className="mb-1.5 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ background: l.color }}
                  >
                    {l.initial}
                  </div>
                  <span className="text-[11px] font-semibold text-textPrimary dark:text-textPrimary-dark">{l.name}</span>
                  <span className="font-mono text-[9.5px] text-textMuted dark:text-textMuted-dark">{l.time}</span>
                </div>
                <p className="ml-8 font-mono text-[10.5px] text-textSecondary dark:text-textSecondary-dark">
                  &gt; {l.msg}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
