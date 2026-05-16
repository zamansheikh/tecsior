"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const initial: LoginState = {};

export function LoginForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(loginAction, initial);
  return (
    <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <input type="hidden" name="next" value={next} />
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className="input" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="input" placeholder="••••••••" />
      </div>

      {state.error && (
        <div
          style={{
            padding: "10px 12px",
            border: "1px solid rgba(255,90,95,0.3)",
            background: "rgba(255,90,95,0.06)",
            color: "var(--danger)",
            borderRadius: 6,
            fontSize: 13,
          }}
        >
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary"
        style={{ justifyContent: "center", marginTop: 8, opacity: pending ? 0.7 : 1 }}
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
