create table if not exists public.saved_lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  tool text not null check (tool in ('spin-the-wheel')),
  name text not null default 'My wheel' check (char_length(name) between 1 and 80),
  payload jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, tool, name)
);

alter table public.saved_lists enable row level security;

create policy "Users read their saved lists" on public.saved_lists
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users create their saved lists" on public.saved_lists
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users update their saved lists" on public.saved_lists
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Users delete their saved lists" on public.saved_lists
  for delete to authenticated using ((select auth.uid()) = user_id);
