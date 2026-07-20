import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseToken = import.meta.env.PUBLIC_SUPABASE_TOKEN;

export function createServerClient() {
  return createClient(supabaseUrl, supabaseToken);
}

export const supabase = createServerClient();
