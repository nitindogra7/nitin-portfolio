"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LiveStatus() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState("Fetching weather...");
  const [icon, setIcon] = useState("fa-solid fa-circle-notch fa-spin");

  useEffect(() => {
    // Update local time
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);

    // Fetch live weather for New Delhi, India
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const code = data.current_weather.weathercode;
        const temp = Math.round(data.current_weather.temperature);
        
        let condition = "Clear skies";
        let ic = "fa-solid fa-sun";
        
        if (code >= 1 && code <= 3) { condition = "Partly cloudy"; ic = "fa-solid fa-cloud-sun"; }
        else if (code >= 45 && code <= 48) { condition = "Fog"; ic = "fa-solid fa-smog"; }
        else if (code >= 51 && code <= 67) { condition = "Rain"; ic = "fa-solid fa-cloud-rain"; }
        else if (code >= 71 && code <= 77) { condition = "Snow"; ic = "fa-solid fa-snowflake"; }
        else if (code >= 80 && code <= 82) { condition = "Showers"; ic = "fa-solid fa-cloud-showers-heavy"; }
        else if (code >= 95) { condition = "Thunderstorm"; ic = "fa-solid fa-bolt"; }
        
        setWeather(`${temp}°C · ${condition}`);
        setIcon(ic);
      } catch (e) {
        setWeather("Weather unavailable");
        setIcon("fa-solid fa-cloud");
      }
    };
    fetchWeather();

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-5 flex w-fit items-center gap-2.5 rounded-full border border-borderc dark:border-borderc-dark bg-surface dark:bg-surface-dark px-3.5 py-1.5 shadow-sm"
    >
      <div className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
      </div>
      <p className="font-mono text-[10.5px] font-medium text-textSecondary dark:text-textSecondary-dark">
        {time ? (
          <>
            <span className="text-textPrimary dark:text-textPrimary-dark">{time}</span> in India
          </>
        ) : (
          "Connecting..."
        )}
      </p>
      <div className="h-3 w-px bg-borderc dark:bg-borderc-dark" />
      <p className="flex items-center gap-1.5 font-mono text-[10.5px] font-medium text-textSecondary dark:text-textSecondary-dark">
        <i className={`${icon} text-[10px]`} />
        {weather}
      </p>
    </motion.div>
  );
}
