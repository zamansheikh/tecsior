"use client";

import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { PageHead } from "@/components/admin/page-head";
import { AdminToolbar } from "@/components/admin/toolbar";
import { cn } from "@/lib/cn";
import type { TeamMember } from "@/lib/types";

type FormState = {
  id?: string;
  name: string;
  role: string;
  initials: string;
  focus: string;
};

const EMPTY_FORM: FormState = { name: "", role: "", initials: "", focus: "" };

function deriveInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((n) => n[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamAdminPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<string | "new" | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/proxy/admin/content/team", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) setMembers(data as TeamMember[]);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const startCreate = () => {
    setForm(EMPTY_FORM);
    setEditing("new");
    setError(null);
  };

  const startEdit = (m: TeamMember) => {
    if (!m.id) return;
    setForm({ id: m.id, name: m.name, role: m.role, initials: m.initials, focus: m.focus });
    setEditing(m.id);
    setError(null);
  };

  const cancel = () => {
    setEditing(null);
    setForm(EMPTY_FORM);
    setError(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim() || !form.focus.trim()) {
      setError("Name, role, and focus are required.");
      return;
    }
    const payload = {
      name: form.name.trim(),
      role: form.role.trim(),
      initials: (form.initials.trim() || deriveInitials(form.name)).slice(0, 3).toUpperCase(),
      focus: form.focus.trim(),
    };
    setBusy(true);
    setError(null);
    try {
      const isNew = editing === "new";
      const url = isNew
        ? "/api/proxy/admin/content/team"
        : `/api/proxy/admin/content/team/${encodeURIComponent(form.id ?? "")}`;
      const res = await fetch(url, {
        method: isNew ? "POST" : "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        const msg = Array.isArray(body?.message) ? body.message.join(", ") : body?.message;
        throw new Error(msg ?? `Save failed (${res.status})`);
      }
      await load();
      cancel();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async (m: TeamMember) => {
    if (!m.id) return;
    if (!confirm(`Remove ${m.name} from the team?`)) return;
    setBusy(true);
    setError(null);
    // Optimistic
    setMembers((prev) => prev.filter((x) => x.id !== m.id));
    try {
      const res = await fetch(`/api/proxy/admin/content/team/${encodeURIComponent(m.id)}`, {
        method: "DELETE",
      });
      if (!res.ok && res.status !== 204) {
        throw new Error(`Delete failed (${res.status})`);
      }
    } catch (err) {
      setError((err as Error).message);
      await load(); // re-sync on failure
    } finally {
      setBusy(false);
    }
  };

  const filtered = search
    ? members.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.role.toLowerCase().includes(search.toLowerCase()) ||
          m.focus.toLowerCase().includes(search.toLowerCase()),
      )
    : members;

  const editingExisting = editing && editing !== "new" ? editing : null;

  return (
    <>
      <PageHead title="Team members" sub={`${members.length} people on the team`} />

      <AdminToolbar
        count={members.length}
        label="team members"
        search={search}
        onSearch={setSearch}
        actionLabel="Add member"
        onAction={startCreate}
      />

      {error && (
        <div
          style={{
            marginBottom: 16,
            padding: "10px 14px",
            color: "var(--danger)",
            border: "1px solid rgba(255,90,95,0.3)",
            background: "rgba(255,90,95,0.06)",
            borderRadius: 8,
            fontSize: 13,
          }}
        >
          {error}
        </div>
      )}

      {editing && (
        <div className="panel" style={{ padding: 24, marginBottom: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>
              {editing === "new" ? "New team member" : `Editing — ${form.name || "team member"}`}
            </h3>
            <span
              className="mono"
              style={{ fontSize: 11, color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {editing === "new" ? "Create" : form.id}
            </span>
          </div>

          <MemberForm
            form={form}
            setForm={setForm}
            onSubmit={submit}
            onCancel={cancel}
            busy={busy}
            isNew={editing === "new"}
          />
        </div>
      )}

      {loading && members.length === 0 ? (
        <div style={{ padding: 60, textAlign: "center", color: "var(--fg-mute)" }}>
          Loading team…
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ padding: 60, textAlign: "center", color: "var(--fg-mute)" }}>
          {search ? "No matches." : "No team members yet — click “Add member” to add the first."}
        </div>
      ) : (
        <div className="grid-4">
          {filtered.map((p) => (
            <div
              key={p.id ?? p.name}
              className={cn("card", "card-hover")}
              style={{
                padding: 20,
                borderColor: editingExisting === p.id ? "var(--accent)" : "var(--border)",
                boxShadow: editingExisting === p.id ? "0 0 0 3px var(--accent-glow)" : undefined,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="avatar" style={{ width: 44, height: 44, fontSize: 15 }}>
                  {p.initials}
                </div>
              </div>
              <div style={{ marginTop: 14 }}>
                <div style={{ fontWeight: 500 }}>{p.name}</div>
                <div style={{ color: "var(--fg-mute)", fontSize: 12.5 }}>{p.role}</div>
              </div>
              <div
                style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="mono" style={{ fontSize: 11, color: "var(--fg-faint)" }}>
                  {p.focus}
                </span>
                <div style={{ display: "flex", gap: 2 }}>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => startEdit(p)}
                    title="Edit"
                    disabled={busy}
                  >
                    <Icon name="edit" />
                  </button>
                  <button
                    type="button"
                    className="icon-btn danger"
                    onClick={() => remove(p)}
                    title="Remove"
                    disabled={busy || !p.id}
                  >
                    <Icon name="trash" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function MemberForm({
  form,
  setForm,
  onSubmit,
  onCancel,
  busy,
  isNew,
}: {
  form: FormState;
  setForm: (f: FormState) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  busy: boolean;
  isNew: boolean;
}) {
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="grid-2" style={{ gap: 14 }}>
        <div className="field">
          <label>Name</label>
          <input
            className="input"
            value={form.name}
            onChange={(e) => {
              const name = e.target.value;
              setForm({
                ...form,
                name,
                // auto-derive initials only if the user hasn't typed any yet
                initials: form.initials || deriveInitials(name),
              });
            }}
            placeholder="Mehedi Hasan"
            required
            autoFocus
          />
        </div>
        <div className="field">
          <label>Role</label>
          <input
            className="input"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            placeholder="Chief Executive"
            required
          />
        </div>
      </div>

      <div className="grid-2" style={{ gap: 14 }}>
        <div className="field">
          <label>Initials</label>
          <input
            className="input"
            maxLength={3}
            value={form.initials}
            onChange={(e) =>
              setForm({ ...form, initials: e.target.value.toUpperCase() })
            }
            placeholder="MH"
            required
            style={{ textTransform: "uppercase", letterSpacing: "0.04em" }}
          />
        </div>
        <div className="field">
          <label>Focus</label>
          <input
            className="input"
            value={form.focus}
            onChange={(e) => setForm({ ...form, focus: e.target.value })}
            placeholder="Strategy, Partnerships"
            required
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
        <button type="submit" className="btn btn-primary btn-sm" disabled={busy}>
          {busy ? "Saving…" : isNew ? "Add member" : "Save changes"}
        </button>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={onCancel}
          disabled={busy}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
