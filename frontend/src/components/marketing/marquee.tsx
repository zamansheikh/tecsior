const ITEMS = [
  "Meridian Capital", "Stellar Health", "Voltflow", "Loom Studio", "Atlas Logistics",
  "Northwind Energy", "Helix Bank", "Verde Health", "Origami Labs", "Forte Retail", "Polaris AI", "Ironbridge",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <div key={i} className="marquee-item">{t}</div>
        ))}
      </div>
    </div>
  );
}
