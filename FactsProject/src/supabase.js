import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bhsnvctuvvswkzcdrase.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoc252Y3R1dnZzd2t6Y2RyYXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NDM3MzgsImV4cCI6MjAwNDMxOTczOH0.RnVATdnXvGB3cHMt8oMUGhgV-i6KfS0H25t3-nLcbsM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
