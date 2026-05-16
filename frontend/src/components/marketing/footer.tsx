import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 20 }}>
              <Image src="/logo.png" alt="" width={28} height={28} />
              <span>Programmer Nexus</span>
            </div>
            <p style={{ color: "var(--fg-mute)", fontSize: 14, maxWidth: 360, lineHeight: 1.6 }}>
              A senior-only engineering studio for fintech, health and AI-native products. Engineered in Dhaka, London and Lagos.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 24, color: "var(--fg-mute)", fontSize: 13 }}>
              <span><span className="accent-text">●</span> All systems operational</span>
              <span className="mono">v0.1.0</span>
            </div>
          </div>
          <div className="footer-col">
            <h5>Studio</h5>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Case files</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Writing</h5>
            <ul>
              <li><Link href="/blog">Field notes</Link></li>
              <li><Link href="/blog?category=Engineering">Engineering</Link></li>
              <li><Link href="/blog?category=Design">Design</Link></li>
              <li><a href="/rss.xml">RSS feed</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><Link href="/contact">Start a project</Link></li>
              <li><a href="mailto:partners@programmernexus.com">Partnerships</a></li>
              <li><a href="mailto:press@programmernexus.com">Press inquiries</a></li>
              <li><Link href="/admin">Admin sign-in</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Offices</h5>
            <ul>
              <li><span>Dhaka — HQ</span></li>
              <li><span>London</span></li>
              <li><span>Lagos</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Programmer Nexus Ltd. All rights reserved.</span>
          <span>
            <Link href="/privacy" style={{ marginRight: 24 }}>Privacy</Link>
            <Link href="/terms" style={{ marginRight: 24 }}>Terms</Link>
            <Link href="/security">Security</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
