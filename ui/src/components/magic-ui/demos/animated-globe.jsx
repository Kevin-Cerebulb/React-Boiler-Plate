import Globe from "@/components/magic-ui/globe";

export function AnimatedGlobeDemo() {
  return (
    <div className="relative h-full justify-center items-center flex">
      <Globe className="top-0" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
