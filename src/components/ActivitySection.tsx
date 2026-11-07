"use client";

import { useEffect, useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import { ArrowUpRight } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ActivityState {
  loading: boolean;
  error: boolean;
  days: ContributionDay[];
  offset: number;
  total: number;
  rangeText: string;
}

const availableYears = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
];

export default function ActivitySection() {
  const { activeSection } = useNavigation();
  const [selectedYear, setSelectedYear] = useState<number>(availableYears[0]);

  const [state, setState] = useState<ActivityState>({
    loading: true,
    error: false,
    days: [],
    offset: 0,
    total: 0,
    rangeText: "@nitindogra7",
  });

  useEffect(() => {
    let active = true;
    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      if (active) {
        setState({
          loading: false,
          error: true,
          days: [],
          offset: 0,
          total: 0,
          rangeText: "No activity data loaded",
        });
      }
    }, 12000);

    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/nitindogra7?y=${selectedYear}`
        );
        if (!active || timedOut) return;
        if (!res.ok) throw new Error("Unavailable");
        const data = await res.json();
        if (!active || timedOut) return;
        if (!Array.isArray(data.contributions) || !data.contributions.length) {
          throw new Error("No data");
        }

        const filtered: ContributionDay[] = data.contributions
          .filter((d: { date: string }) => d.date.startsWith(`${selectedYear}-`))
          .sort((a: { date: string }, b: { date: string }) =>
            a.date.localeCompare(b.date)
          );

        if (!filtered.length) throw new Error("No data");

        const firstDate = new Date(`${filtered[0].date}T00:00:00Z`);
        const dayOffset = firstDate.getUTCDay();

        let sum = 0;
        filtered.forEach((d) => {
          sum += Number(d.count) || 0;
        });

        if (active) {
          setState({
            loading: false,
            error: false,
            days: filtered,
            offset: dayOffset,
            total: sum,
            rangeText: `Jan — Dec ${selectedYear}`,
          });
        }
      } catch {
        if (!active) return;
        setState({
          loading: false,
          error: true,
          days: [],
          offset: 0,
          total: 0,
          rangeText: "No activity data loaded",
        });
      } finally {
        clearTimeout(timeout);
      }
    }

    void fetchContributions();

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [selectedYear]);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setState((prev) => ({
      ...prev,
      loading: true,
      error: false,
    }));
  };

  return (
    <section
      className={`section ${activeSection === "activity" ? "is-current" : ""}`}
      id="activity"
      aria-label="GitHub contribution activity and open source commitment"
    >
      <div className="section-head">
        <h2 className="title">
          <span className="section-number">04 /</span>A little, every day
        </h2>
        <a
          href="https://github.com/nitindogra7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
          aria-label="View Nitin Dogra GitHub profile and public contributions"
          title="View GitHub profile"
        >
          View GitHub{" "}
          <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
        </a>
      </div>
      <div className="graph-card">
        <div className="graph-top">
          <span id="contribution-label">
            {state.loading
              ? "GitHub contributions"
              : state.error
              ? "GitHub contributions"
              : `${state.total.toLocaleString()} contributions in ${selectedYear}`}
          </span>
          <label className="sr-only" htmlFor="contribution-year">Contribution year</label>
          <select
            className="select"
            id="contribution-year"
            value={selectedYear}
            onChange={(event) => handleYearChange(Number(event.target.value))}
          >
            {availableYears.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>

        <p className="graph-status" role="status">
          {state.loading ? (
            "Loading contribution activity…"
          ) : state.error ? (
            <>
              <a href={`https://github.com/nitindogra7?tab=overview&from=${selectedYear}-01-01&to=${selectedYear}-12-31`} target="_blank" rel="noopener noreferrer">
                Activity is unavailable right now. View the latest on GitHub ↗
              </a>
            </>
          ) : null}
        </p>

        <div className="graph-scroll">
          <div
            className="graph"
            id="contribution-grid"
            role="img"
            aria-label={state.loading ? "GitHub contribution chart loading" : `GitHub contributions in ${selectedYear}`}
          >
            {state.loading ? (
              Array.from({ length: 371 }, (_, idx) => (
                <span className="cell" key={`loading-${idx}`} aria-hidden="true" />
              ))
            ) : state.error ? null : (
              <>
                {Array.from({ length: state.offset }).map((_, idx) => (
                  <span className="cell cell-empty" key={`empty-${idx}`} aria-hidden="true" />
                ))}
                {state.days.map((day) => (
                  <span
                    key={day.date}
                    className="cell"
                    data-level={day.level}
                    data-date={day.date}
                    data-count={day.count}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </>
            )}
          </div>
        </div>

        <div className="graph-foot">
          <span className="mono" id="contribution-range">
            {state.rangeText}
          </span>
          <div className="legend" aria-hidden="true">
            <span style={{ marginRight: 4 }}>Less</span>
            <i className="cell" />
            <i className="cell" data-level="1" />
            <i className="cell" data-level="2" />
            <i className="cell" data-level="3" />
            <i className="cell" data-level="4" />
            <span style={{ marginLeft: 4 }}>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
