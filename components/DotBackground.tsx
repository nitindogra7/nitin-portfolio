export default function DotBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-[60px] left-1/2 z-0 h-[280px] w-screen max-w-[1200px] -translate-x-1/2 bg-[radial-gradient(rgba(0,0,0,0.32)_1px,transparent_1.4px)] bg-[length:18px_18px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_30%,#000_25%,transparent_78%)] [-webkit-mask-image:radial-gradient(ellipse_65%_60%_at_50%_30%,#000_25%,transparent_78%)] dark:bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1.4px)]"
    />
  );
}
