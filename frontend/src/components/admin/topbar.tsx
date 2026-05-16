"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { getCurrentSectionLabel } from "./sidebar";

export function Topbar() {
  const pathname = usePathname();
  const label = getCurrentSectionLabel(pathname);
  return (
    <div className="admin-top">
      <div className="admin-crumbs">
        <span>Admin</span>
        <Icon name="chevron" size={12} className="text-fg-faint" />
        <span className="now">{label}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div className="admin-search">
          <Icon name="search" size={14} />
          <input placeholder="Search anything — posts, people, inquiries…" />
          <kbd>⌘K</kbd>
        </div>
        <Link href="/" className="icon-btn" style={{ width: 36, height: 36 }} title="View site">
          <Icon name="external" size={16} />
        </Link>
        <button className="icon-btn" style={{ width: 36, height: 36, position: "relative" }} title="Notifications">
          <Icon name="bell" size={16} />
          <span style={{ position: "absolute", top: 6, right: 6, width: 7, height: 7, background: "var(--accent)", borderRadius: "50%" }} />
        </button>
        <div className="admin-user">
          <div className="avatar">ZS</div>
        </div>
      </div>
    </div>
  );
}
