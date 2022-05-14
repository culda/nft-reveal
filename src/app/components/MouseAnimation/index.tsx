export default function MouseAnimation({
  enabled,
  x,
  y,
}: {
  enabled: boolean;
  x: number;
  y: number;
}) {
  if (!enabled) return <></>;
  return (
    <div
      style={{
        mixBlendMode: "exclusion",
        color: "white",
      }}
    >
      <div
        className="fixed w-40 justify-center uppercase cursor-pointer pointer-events-none"
        style={{
          left: x - 65 + "px",
          top: y - 25 + "px",
        }}
      >
        CLICK TO REVEAL
      </div>
    </div>
  );
}
