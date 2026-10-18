"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase";

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");
  const configured = isSupabaseConfigured();

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    void client.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: subscription } = client.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    return () => subscription.subscription.unsubscribe();
  }, []);

  const signIn = async () => {
    const client = getSupabaseBrowserClient();
    if (!client) {
      setMessage("Cloud sync is not configured yet.");
      return;
    }
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/` },
    });
    if (error) setMessage(error.message);
  };

  const signOut = async () => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    const { error } = await client.auth.signOut();
    if (error) setMessage(error.message);
  };

  if (user) {
    return (
      <button className="account-button" type="button" onClick={signOut} title="Sign out of cloud sync">
        {user.user_metadata.full_name?.split(" ")[0] ?? "Signed in"} · Sign out
      </button>
    );
  }

  return (
    <div style={{ display: "grid", justifyItems: "end", gap: 4 }}>
      <button className="account-button" type="button" onClick={signIn} aria-describedby={message ? "auth-status" : undefined}>
        Continue with Google
      </button>
      {!configured && <span id="auth-status" className="sr-only">Cloud sync needs Supabase setup.</span>}
      {message && <span id="auth-status" className="auth-message" role="status">{message}</span>}
    </div>
  );
}
