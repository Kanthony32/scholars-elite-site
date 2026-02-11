export function Noise({ opacity = 0.2 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-noise"
      style={{ opacity }}
    />
  );
}
