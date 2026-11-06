"use client";

import { useEffect, useState, useRef } from "react";

export default function Toast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setMessage(customEvent.detail || "");
      setVisible(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    };

    window.addEventListener("nd-toast", handleToast);
    return () => {
      window.removeEventListener("nd-toast", handleToast);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className={`toast ${visible ? "show" : ""}`}
      id="toast"
      role="status"
    >
      {message}
    </div>
  );
}

