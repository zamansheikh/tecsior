"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { StatusPill } from "@/components/admin/status-pill";
import { SEED_POSTS } from "@/lib/seed";
import type { Post } from "@/lib/types";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<Post[]>(SEED_POSTS);
  const [q, setQ] = useState("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:6001";
    fetch(`${base}/api/content/posts`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (Array.isArray(d) && d.length) setPosts(d as Post[]); })
      .catch(() => {});
  }, []);

  const filtered = q ? posts.filter((p) => p.title.toLowerCase().includes(q.toLowerCase())) : posts;

  return (
    <>
      <PageHead title="Blog posts" sub={`${posts.filter((p) => p.status === "Published").length} published, ${posts.filter((p) => p.status === "Draft").length} drafts, 0 scheduled`} />
      <AdminToolbar
        count={posts.length}
        label="posts"
        search={q}
        onSearch={setQ}
        filters={[
          { value: "All categories", options: ["All categories", "Engineering", "Design", "Culture", "Operations"] },
          { value: "All statuses", options: ["All statuses", "Published", "Draft", "Scheduled"] },
        ]}
        actionLabel="New post"
        onAction={() => {}}
      />
      <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <table className="dt">
          <thead>
            <tr><th><input type="checkbox" /></th><th>Title</th><th>Author</th><th>Category</th><th>Views</th><th>Status</th><th>Published</th><th></th></tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className="cell-title" style={{ maxWidth: 380 }}>{p.title}</div>
                  <div style={{ color: "var(--fg-mute)", fontSize: 12, marginTop: 2 }}>{p.read} read · {p.id}</div>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="avatar" style={{ width: 26, height: 26, fontSize: 11 }}>{p.author.split(" ").map((x) => x[0]).join("")}</div>
                    <span style={{ fontSize: 13 }}>{p.author}</span>
                  </div>
                </td>
                <td><span className="tag">{p.category}</span></td>
                <td className="mono" style={{ fontSize: 12.5 }}>{p.views ? p.views.toLocaleString() : "—"}</td>
                <td><StatusPill status={p.status} /></td>
                <td className="mono" style={{ fontSize: 11.5, color: "var(--fg-faint)" }}>{p.date}</td>
                <td>
                  <div className="row-actions">
                    <button className="icon-btn"><Icon name="eye" /></button>
                    <button className="icon-btn"><Icon name="edit" /></button>
                    <button className="icon-btn danger"><Icon name="trash" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
