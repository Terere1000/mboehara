# Accounts setup (Supabase)

Accounts are **optional**. With `js/supabase-config.js` left blank the app behaves exactly
as it always has: progress lives in `localStorage` and no account UI appears. Nothing below
is needed to run or deploy Mbo'ehára.

Learners sign up with a **username and password only** — no email, no real name, no
birthday. This follows Duolingo's "Child User" model, and for the same reason: many
learners here are schoolchildren, and the safest personal data is the kind you never
collect. Supabase Auth needs an email internally, so the client derives a throwaway one
(`kuarahy@no-mail.mboehara.com.py`) that is never sent to and never delivered.

## One-time setup

1. **Create the project** at [supabase.com](https://supabase.com) (the free tier is far
   more than this needs). Pick the region closest to Paraguay — `sa-east-1` (São Paulo).

2. **Create the tables.** Dashboard → SQL Editor → New query → paste all of
   [`schema.sql`](schema.sql) → Run. It creates `profiles` and `progress`, turns on
   row-level security, and adds the `username_taken()` lookup.

3. **Turn OFF email confirmation.** Dashboard → Authentication → Providers → Email →
   uncheck **Confirm email** → Save.
   *This matters:* the synthetic addresses can never receive mail, so with confirmation on,
   every sign-up would hang forever waiting for a click that cannot happen.

4. **Copy the keys.** Dashboard → Project Settings → API. Put the Project URL and the
   `anon` / `public` key into `js/supabase-config.js`:

   ```js
   const SUPABASE_CONFIG = {
     url: "https://YOUR-PROJECT.supabase.co",
     anonKey: "eyJhbGci..."
   };
   ```

   Both values are **public by design** — the anon key is meant to ship in the browser.
   Never put the `service_role` key here; it bypasses every policy below.

5. Commit and push. The account card appears on the profile screen.

## How the data is protected

The anon key is public, so **row-level security is the only thing protecting this data**.
Every policy in `schema.sql` checks `auth.uid()`, so a signed-in learner can read and write
their own row and nothing else. `username_taken()` is `security definer` — it can see past
RLS — but it returns only a boolean, never a row or a list of names.

If you add a table later, `alter table ... enable row level security` is not optional.

## Things worth knowing

- **No email means no password reset.** The sign-up form says so in a highlighted box.
  If you later want recovery, the Duolingo pattern is to ask for a *parent's* email at
  first sign-out and send them a notice — not to require an email up front.
- **Signing in never overwrites.** `Progress.merge()` keeps the better of local and remote
  for every field (max XP, max stars per lesson, union of lessons read), so a learner who
  practised as a guest and then signs in keeps both sides. It is idempotent — syncing twice
  changes nothing.
- **Local first, always.** Progress is written to `localStorage` before any network call.
  If Supabase is unreachable the app keeps working and the profile screen says the progress
  is still safe in this browser.
- **Writes are debounced** (`Account.PUSH_DEBOUNCE`, 1.5s), so a lesson's worth of answers
  becomes one request rather than twenty.
- **Usernames are folded** with `Search.fold()`, so `Maríañe` and `mariane` are the same
  account and cannot both be registered.
