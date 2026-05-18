/* eslint-disable @next/next/no-img-element */
// Plain <img> instead of next/image because next/image is conservative with
// SVGs by default. The files in /public/sponsors/ are vetted SVGs from
// Wikimedia Commons / official press kits and contain no scripts.

type Sponsor = {
  name: string;
  /** Absolute path under /public — omit if no logo file yet (renders as text). */
  logo?: string;
};

const SPONSORS: Sponsor[] = [
  { name: "bKash",                   logo: "/sponsors/bkash.svg" },
  { name: "Grameenphone",            logo: "/sponsors/grameenphone.svg" },
  { name: "Robi",                    logo: "/sponsors/robi.svg" },
  { name: "Walton",                  logo: "/sponsors/walton.svg" },
  { name: "Dutch-Bangla Bank",       logo: "/sponsors/dutch-bangla-bank.svg" },
  { name: "Samsung",                 logo: "/sponsors/samsung.svg" },
  // Text fallback — drop a file in /public/sponsors/ with the matching
  // kebab-case name and add `logo: "/sponsors/<file>.svg"` to upgrade.
  { name: "Nagad" },
  { name: "Pathao" },
  { name: "Daraz" },
  { name: "Banglalink" },
  { name: "BRAC Bank" },
  { name: "Square Pharmaceuticals" },
];

export function Marquee() {
  // Doubled list = seamless loop (CSS animation translates -50%).
  const doubled = [...SPONSORS, ...SPONSORS];
  return (
    <div className="marquee" aria-label="Trusted by">
      <div className="marquee-track">
        {doubled.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className={s.logo ? "marquee-item" : "marquee-item is-text"}
            title={s.name}
          >
            {s.logo ? (
              <img src={s.logo} alt={s.name} loading="lazy" />
            ) : (
              s.name
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
