// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vsrgotmchlzgjettxphc.supabase.co'; // 네 프로젝트 URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzcmdvdG1jaGx6Z2pldHR4cGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3Njc0ODMsImV4cCI6MjA2OTM0MzQ4M30.-QF2GD3Ck9Z9z6QaIjRxOTyrtAQey9Gc3YNv3mNePgc'; 
// anon 공개키

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
