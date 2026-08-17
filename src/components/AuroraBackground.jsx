export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute -left-[15%] -top-[15%] h-[55vw] w-[55vw] rounded-full bg-emerald-600/30 blur-[110px] animate-aurora-1" />
      <div className="absolute -right-[10%] top-[5%] h-[45vw] w-[45vw] rounded-full bg-teal-500/25 blur-[110px] animate-aurora-2" />
      <div className="absolute -bottom-[20%] left-[15%] h-[50vw] w-[50vw] rounded-full bg-blue-500/20 blur-[110px] animate-aurora-3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_78%)]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
    </div>
  );
}
