export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#04040a]" />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_60%)] blur-3xl" />
      <div className="absolute bottom-[-180px] left-[-160px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.24),transparent_60%)] blur-3xl animate-[orbFloat_9s_ease-in-out_infinite]" />
      <div className="absolute right-[-170px] top-[120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_62%)] blur-3xl animate-[orbFloat2_11s_ease-in-out_infinite]" />

      <div className="absolute inset-0 opacity-[0.28] bg-[radial-gradient(900px_circle_at_10%_10%,rgba(124,58,237,0.20),transparent_50%),radial-gradient(700px_circle_at_90%_30%,rgba(34,211,238,0.14),transparent_55%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-noise" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85))]" />
    </div>
  );
}

