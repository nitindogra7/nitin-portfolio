"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface HistoryItem {
  id: string;
  type: "command" | "output";
  text: string;
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: "0", type: "output", text: "Nitin OS v1.0.0" },
    { id: "1", type: "output", text: "Type 'help' for a list of available commands." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useTheme();

  // Handle hotkey
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in another input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        // Allow hiding the terminal even if focused
        if (e.target === inputRef.current && (e.key === "`" || e.key === "~" || e.key === "Escape")) {
            e.preventDefault();
            setIsOpen(false);
        }
        return;
      }
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (!trimmed) return;

    setHistory((prev) => [...prev, { id: Date.now().toString(), type: "command", text: cmd }]);

    let output = "";
    switch (trimmed) {
      case "help":
        output = "Available commands:\n- whoami: About me\n- projects: List projects\n- contact: Contact info\n- theme: Toggle dark/light theme\n- clear: Clear terminal";
        break;
      case "whoami":
        output = "Nitin Dogra. Full-stack software engineer building scalable systems.";
        break;
      case "projects":
        output = "1. GetMeChai Platform\n2. LogoCraft AI SaaS\n(Type 'projects' in the UI to see more details)";
        break;
      case "contact":
        output = "Email: dogra.nitin@example.com\nGithub: github.com/nitindogra7";
        break;
      case "theme":
        toggleTheme();
        output = `Theme switched.`;
        break;
      case "clear":
        setHistory([]);
        return;
      case "sudo":
        output = "Nice try.";
        break;
      default:
        output = `Command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    if (output) {
      // Split by newline if we have them
      const lines = output.split("\n");
      lines.forEach((line, i) => {
        setTimeout(() => {
          setHistory((prev) => [...prev, { id: Date.now().toString() + i, type: "output", text: line }]);
        }, i * 50);
      });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processCommand(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          drag
          dragMomentum={false}
          className="fixed bottom-[10vh] right-[5vw] z-[200] flex h-[350px] w-[450px] flex-col overflow-hidden rounded-xl border border-borderc dark:border-borderc-dark bg-surface shadow-2xl dark:bg-surface-dark max-w-[calc(100vw-40px)]"
        >
          {/* Header */}
          <div className="flex h-10 cursor-grab items-center justify-between border-b border-borderc bg-borderc/30 px-4 active:cursor-grabbing dark:border-borderc-dark dark:bg-borderc-dark/30">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Close terminal"
                className="flex h-5 w-5 items-center justify-center rounded-full transition-transform active:scale-90"
                onClick={() => setIsOpen(false)}
              >
                <div className="h-3 w-3 rounded-full bg-red-500" />
              </button>
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <p className="font-mono text-[11px] font-medium text-textSecondary dark:text-textSecondary-dark">
              nitin@portfolio:~
            </p>
            <div className="w-10" /> {/* Spacer */}
          </div>

          {/* Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 font-mono text-[12px] leading-relaxed cursor-text" onClick={() => inputRef.current?.focus()}>
            {history.map((item) => (
              <div key={item.id} className="mb-1.5">
                {item.type === "command" ? (
                  <p className="text-textPrimary dark:text-textPrimary-dark">
                    <span className="text-green-500 mr-2">➜</span>
                    <span className="text-blue-500 mr-2">~</span>
                    {item.text}
                  </p>
                ) : (
                  <p className="text-textSecondary dark:text-textSecondary-dark whitespace-pre-wrap">{item.text}</p>
                )}
              </div>
            ))}
            
            <form onSubmit={onSubmit} className="mt-2 flex items-center">
              <span className="text-green-500 mr-2">➜</span>
              <span className="text-blue-500 mr-2">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-textPrimary dark:text-textPrimary-dark placeholder-textMuted dark:placeholder-textMuted-dark"
                spellCheck={false}
                autoComplete="off"
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
