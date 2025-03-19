import { supabase } from "./supabase";

// Sign Up Function: Registers a user and saves data in users table
export const signUp = async (email: string, password: string, userName: string, userBio: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return { user: null, error };

  const user = data?.user;

  if (user) {
    // Insert user into users table with all required fields
    const { error: dbError } = await supabase.from("users").insert([
      {
        id: user.id,
        email: user.email,
        user_name: userName,
        user_bio: userBio,
      },
    ]);

    if (dbError) return { user: null, error: dbError };
  }

  return { user, error: null };
};

// Sign In Function: Logs in a user with email and password
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { user: data?.user, error };
};

// Sign Out Function: Logs out the current user
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Update User Profile Function 
export const updateUserProfile = async (userId: string, userName: string, userBio: string) => {
  const { data, error } = await supabase
    .from("users")
    .upsert({
      id: userId,
      user_name: userName,
      user_bio: userBio,
    })
    .eq("id", userId);

  return { data, error };
};

export { supabase };
