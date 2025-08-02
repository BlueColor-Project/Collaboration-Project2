import { supabase } from "../lib/supabaseClient";

export const signUp = async ({ email, password, name }) => {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (signUpError) return { error: signUpError.message };

  const { error: profileError } = await supabase
    .from('profiles')
    .insert([{ id: data.user.id, name, email }]);

  return profileError 
    ? { error: profileError.message }
    : { data, error: null };
}; 