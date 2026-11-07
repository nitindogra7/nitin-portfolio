"use client";

import { useEffect, useRef } from "react";
import { useNavigation } from "@/context/NavigationContext";
import { usePathname } from "next/navigation";
import { initLeadAttribution } from "@/lib/attribution";

export default function ClientInteractiveController() {
  const { setActiveSection, setBranchRunning } = useNavigation();
  const pathname = usePathname();
  const activeSectionRef = useRef("home");

  useEffect(() => {
    initLeadAttribution();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // 1. Scroll-linked rulers & active section spy
    const railFrame = document.querySelector<HTMLElement>(".rails");
    const orbitNav = document.querySelector<HTMLElement>(".page-orbit");
    const pageSections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );

    let scrollQueued = false;

    function updateRulers() {
      scrollQueued = false;
      const viewport = window.innerHeight;
      const scan = viewport * 0.36;
      const max = Math.max(1, document.documentElement.scrollHeight - viewport);
      const progress = Math.max(0, Math.min(1, window.scrollY / max));

      if (railFrame) {
        railFrame.style.setProperty("--read-progress", String(progress));
        railFrame.style.setProperty(
          "--tick-shift",
          -(window.scrollY % 48) + "px"
        );
      }

      if (orbitNav) {
        orbitNav.style.setProperty("--orbit-progress", String(progress));
        orbitNav.style.setProperty("--orbit-angle", progress * 360 + "deg");
      }

      if (pageSections.length > 0) {
        let current = pageSections[0];
        for (const section of pageSections) {
          if (section.getBoundingClientRect().top <= scan + 40) {
            current = section;
          }
        }
        if (progress > 0.98) {
          current = pageSections[pageSections.length - 1];
        }

        if (current && current.id && current.id !== activeSectionRef.current) {
          activeSectionRef.current = current.id;
          setActiveSection(current.id);
        }
      }
    }

    function queueRulers() {
      if (!scrollQueued) {
        scrollQueued = true;
        requestAnimationFrame(updateRulers);
      }
    }

    window.addEventListener("scroll", queueRulers, { passive: true });
    window.addEventListener("resize", queueRulers, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    const mainEl = document.querySelector("main");
    if (mainEl && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(queueRulers);
      resizeObserver.observe(mainEl);
    }
    updateRulers();

    // 2. Pause branch flow when hero is offscreen or tab hidden
    const branchHero = document.querySelector<HTMLElement>(".hero");
    let heroInView = true;

    function syncBranchFlow() {
      const running = heroInView && !document.hidden && !reduceMotion.matches;
      setBranchRunning(running);
    }

    let heroObserver: IntersectionObserver | null = null;
    if (branchHero && "IntersectionObserver" in window) {
      heroObserver = new IntersectionObserver(([entry]) => {
        heroInView = entry.isIntersecting;
        syncBranchFlow();
      });
      heroObserver.observe(branchHero);
    }

    document.addEventListener("visibilitychange", syncBranchFlow);
    reduceMotion.addEventListener("change", syncBranchFlow);
    syncBranchFlow();

    // 3. Pointer spotlight on project visual cards
    const cleanups: (() => void)[] = [];
    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      document.querySelectorAll<HTMLElement>(".project").forEach((card) => {
        const handler = (event: PointerEvent) => {
          if (reduceMotion.matches) return;
          const art = card.querySelector<HTMLElement>(".project-visual");
          if (!art) return;
          const rect = art.getBoundingClientRect();
          art.style.setProperty("--pointer-x", event.clientX - rect.left + "px");
          art.style.setProperty("--pointer-y", event.clientY - rect.top + "px");
        };
        card.addEventListener("pointermove", handler, { passive: true });
        cleanups.push(() => card.removeEventListener("pointermove", handler));
      });
    }

    // 4. Match the reference's blur-to-clear reveals without moving layout.
    const running = new Map<HTMLElement, Animation>();
    const revealed = new WeakSet<HTMLElement>();
    const revealSelector = [
      ".rails",
      ".margin-rule",
      ".nav",
      ".hero-branches",
      ".hero-portrait-frame",
      ".hero-portrait",
      ".hero-copy > h1",
      ".hero-copy > h2",
      ".hero-copy > p",
      ".btn",
      ".hero-bottom",
      ".hero-stack > *",
      ".section-head > *",
      ".project",
      ".project-visual",
      ".project-body > h3",
      ".project-body > p",
      ".tag",
      ".project-links a",
      ".job-icon",
      ".job-header > *",
      ".job-role",
      ".job p",
      "summary",
      "details li",
      ".skill-row > span",
      ".graph-card",
      ".graph-top > *",
      ".graph-status",
      "#contribution-grid",
      ".graph-footer > *",
      ".contact > :not(.actions)",
      ".contact-form > *",
      ".contact-form",
      ".blog-intro > *",
      ".graph-foot > *",
      ".footer > span",
      ".footer-links a",
    ].join(",");

    function finishReveal(element: HTMLElement) {
      revealed.add(element);
      const animation = running.get(element);
      if (animation) {
        animation.cancel();
        running.delete(element);
      }
    }

    function reveal(element: HTMLElement, delay = 0) {
      if (revealed.has(element)) return;
      revealed.add(element);
      if (reduceMotion.matches || typeof element.animate !== "function") return;

      try {
        const animation = element.animate(
          [
            { opacity: 0, filter: "blur(8px)" },
            { opacity: 1, filter: "blur(0px)" },
          ],
          {
            duration: 650,
            delay: (delay + 0.12) * 1000,
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "both",
          }
        );
        running.set(element, animation);
        void animation.finished.then(
          () => {
            if (running.get(element) !== animation) return;
            running.delete(element);
            animation.cancel();
          },
          () => {
            if (running.get(element) === animation) running.delete(element);
          }
        );
      } catch {
        finishReveal(element);
      }
    }

    const revealObserver = "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            let order = 0;
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const target = entry.target as HTMLElement;
              reveal(target, Math.min(order++ * 0.035, 0.28));
              revealObserver?.unobserve(target);
            }
          },
          { threshold: 0.04, rootMargin: "0px 0px -12px 0px" }
        )
      : null;

    function prepareReveal(element: HTMLElement) {
      if (revealed.has(element)) return;
      if (element.id === "graph-status" && !element.textContent?.trim()) return;
      if (reduceMotion.matches || !revealObserver) {
        revealed.add(element);
        return;
      }
      revealObserver.observe(element);
    }

    function collectReveals(root: Node) {
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const element = root as HTMLElement;
      if (element.matches(revealSelector)) prepareReveal(element);
      element.querySelectorAll<HTMLElement>(revealSelector).forEach(prepareReveal);
    }

    collectReveals(document.body);
    const revealMutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach(collectReveals);
        if (record.target instanceof HTMLElement && record.target.matches(revealSelector)) {
          prepareReveal(record.target);
        }
      }
    });
    revealMutations.observe(document.body, { childList: true, subtree: true });

    function revealOnFocus(event: FocusEvent) {
      let element = event.target;
      while (element instanceof HTMLElement && element !== document.body) {
        if (element.matches(revealSelector)) {
          revealObserver?.unobserve(element);
          finishReveal(element);
        }
        element = element.parentElement;
      }
    }
    document.addEventListener("focusin", revealOnFocus);

    function showAllForReducedMotion() {
      if (reduceMotion.matches) {
        revealObserver?.disconnect();
        document.querySelectorAll<HTMLElement>(revealSelector).forEach(finishReveal);
        return;
      }
      collectReveals(document.body);
    }
    reduceMotion.addEventListener("change", showAllForReducedMotion);

    return () => {
      window.removeEventListener("scroll", queueRulers);
      window.removeEventListener("resize", queueRulers);
      document.removeEventListener("visibilitychange", syncBranchFlow);
      reduceMotion.removeEventListener("change", syncBranchFlow);
      if (resizeObserver) resizeObserver.disconnect();
      if (heroObserver) heroObserver.disconnect();
      revealMutations.disconnect();
      revealObserver?.disconnect();
      running.forEach((animation) => animation.cancel());
      running.clear();
      document.removeEventListener("focusin", revealOnFocus);
      reduceMotion.removeEventListener("change", showAllForReducedMotion);
      cleanups.forEach((c) => c());
    };
  }, [pathname, setActiveSection, setBranchRunning]);

  return null;
}
