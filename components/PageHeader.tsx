import Link from "next/link";
import { Reveal } from "./Motion";

export default function PageHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="pb-2.5 pt-[118px]">
      <Reveal>
        <Link
          href="/"
          className="mb-[18px] inline-flex items-center gap-1.5 font-mono text-[11px] text-textSecondary dark:text-textSecondary-dark transition-opacity duration-300 hover:opacity-70"
        >
          <i className="fa-solid fa-arrow-left text-[10px]" /> Back home
        </Link>
        <p className="mb-2.5 font-mono text-[11px] text-textPrimary dark:text-textPrimary-dark">{index}</p>
        <h1 className="mb-2.5 text-[28px] font-bold leading-[1.1] tracking-tight text-textPrimary dark:text-textPrimary-dark">
          {title}
        </h1>
        <p className="max-w-[480px] text-[12.5px] leading-[1.7] text-textSecondary dark:text-textSecondary-dark">
          {subtitle}
        </p>
      </Reveal>
    </section>
  );
}
