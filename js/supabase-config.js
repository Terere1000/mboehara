/* Supabase connection for optional accounts.

   Fill these in from Supabase Dashboard → Project Settings → API. Both values are
   PUBLIC by design — the anon key is meant to ship in the browser, and row-level
   security in supabase/schema.sql is what actually protects the data. Never put the
   service_role key here.

   Left blank, the app runs exactly as before: progress stays in localStorage only and
   no account UI appears. */

const SUPABASE_CONFIG = {
  url: "",      // e.g. "https://abcdefghijklm.supabase.co"
  anonKey: ""   // the "anon / public" key
};
