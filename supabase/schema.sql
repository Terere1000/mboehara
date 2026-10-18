-- Mbo'ehára — Supabase schema for optional accounts.
-- Run this once in the Supabase SQL editor (Dashboard → SQL Editor → New query).
--
-- Design follows Duolingo's "Child User" model: learners sign up with a USERNAME and
-- password only. No email, no real name, no phone — nothing that identifies a child.
-- Supabase Auth requires an email internally, so the client derives a synthetic one
-- (<folded-username>@no-mail.mboehara.com.py) that is never sent to and never delivered.
--
-- The anon key shipped in the browser is public by design. Row-level security below is
-- therefore the ONLY thing protecting this data — every policy must check auth.uid().

-- ---------------------------------------------------------------- profiles
-- Maps an auth user to the username they chose. `username` is what we show;
-- `username_key` is the folded, lowercased form that must be unique (so "Maríañe"
-- and "marine" can't both exist and collide on the synthetic email).
create table if not exists public.profiles (
  id            uuid primary key references auth.users (id) on delete cascade,
  username      text not null,
  username_key  text not null unique,
  created_at    timestamptz not null default now(),
  constraint username_len     check (char_length(username) between 3 and 20),
  constraint username_key_fmt check (username_key ~ '^[a-z0-9_]{3,20}$')
);

alter table public.profiles enable row level security;

-- A signed-in user reads and writes only their own profile row.
drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles
  for select using (auth.uid() = id);

drop policy if exists profiles_insert_own on public.profiles;
create policy profiles_insert_own on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- ---------------------------------------------------------------- progress
-- One row per user holding the same JSON blob Progress keeps in localStorage:
-- { xp, lessons:{ "g1:0": {done,stars} }, taught:{}, streak, lastDay }.
-- Kept as jsonb so the app's shape can evolve without a migration.
create table if not exists public.progress (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.progress enable row level security;

drop policy if exists progress_select_own on public.progress;
create policy progress_select_own on public.progress
  for select using (auth.uid() = user_id);

drop policy if exists progress_insert_own on public.progress;
create policy progress_insert_own on public.progress
  for insert with check (auth.uid() = user_id);

drop policy if exists progress_update_own on public.progress;
create policy progress_update_own on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Keep updated_at honest; the client never sets it.
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists progress_touch on public.progress;
create trigger progress_touch
  before update on public.progress
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------- username lookup
-- Sign-in needs to know whether a username exists before attempting a password, and
-- sign-up needs to reject taken names — both WITHOUT exposing the profiles table.
-- This function is security definer so it can read past RLS, but it returns only a
-- boolean: never a username list, never a row.
create or replace function public.username_taken(name_key text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (select 1 from public.profiles where username_key = name_key);
$$;

revoke all on function public.username_taken(text) from public;
grant execute on function public.username_taken(text) to anon, authenticated;
