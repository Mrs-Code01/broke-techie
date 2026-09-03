import { createClient } from "@supabase/supabase-js";

// Server-only: the service role key bypasses Row Level Security, so this
// must never be imported from a "use client" component or exposed to the
// browser. Every write in this app goes through our own API routes, which
// is what keeps that safe.
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } },
);
